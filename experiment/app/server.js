// Minimal experiment server: serves the participant + researcher pages and
// stores responses in data/responses.json. No dependencies, Node 18+.
//   node server.js            -> http://localhost:3000
//   PORT=8080 node server.js

const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "responses.json");
// Condition ids must match CONDITIONS in public/shared.js: 6 modality orders × 3 rotations × 2 flips.
// The page turns the id into the actual cases and modalities.
const CONDITIONS = [1, 2, 3, 4, 5, 6].flatMap((m) => [1, 2, 3].flatMap((r) => [1, 2].map((f) => ({ id: `M${m}-R${r}-F${f}` }))));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
};

function load() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function save(rows) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(rows, null, 2));
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => {
      data += c;
      if (data.length > 1e6) req.destroy();
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (e) {
        reject(e);
      }
    });
  });
}

// Even presentation: hand out the condition with the fewest real, consented responses.
function nextCondition(rows) {
  const counts = Object.fromEntries(CONDITIONS.map((c) => [c.id, 0]));
  for (const r of rows) if (!r.simulated && r.consentToUse !== false && counts[r.conditionId] !== undefined) counts[r.conditionId]++;
  const min = Math.min(...Object.values(counts));
  const candidates = CONDITIONS.filter((c) => counts[c.id] === min);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const p = url.pathname;

  try {
    if (p === "/api/assign" && req.method === "GET") {
      return send(res, 200, { participantId: "P-" + crypto.randomBytes(3).toString("hex").toUpperCase(), condition: nextCondition(load()) });
    }
    if (p === "/api/responses" && req.method === "GET") {
      return send(res, 200, load());
    }
    if (p === "/api/responses" && req.method === "POST") {
      const body = await readBody(req);
      const rows = load();
      if (Array.isArray(body)) rows.push(...body); // bulk insert (simulated data)
      else rows.push({ ...body, receivedAt: new Date().toISOString() });
      save(rows);
      return send(res, 201, { ok: true, count: rows.length });
    }
    if (p === "/api/responses" && req.method === "DELETE") {
      const which = url.searchParams.get("which"); // "simulated" | "all"
      const rows = which === "simulated" ? load().filter((r) => !r.simulated) : [];
      save(rows);
      return send(res, 200, { ok: true, count: rows.length });
    }

    // Static files
    let file = p === "/" ? "/index.html" : p;
    if (file === "/participant" || file === "/researcher") file += ".html";
    const full = path.normalize(path.join(PUBLIC_DIR, file));
    if (!full.startsWith(PUBLIC_DIR)) return send(res, 403, "Forbidden", "text/plain");
    fs.readFile(full, (err, buf) => {
      if (err) return send(res, 404, "Not found", "text/plain");
      send(res, 200, buf, MIME[path.extname(full)] || "application/octet-stream");
    });
  } catch (e) {
    send(res, 400, { error: String(e.message || e) });
  }
});

server.listen(PORT, () => {
  console.log(`Experiment running:`);
  console.log(`  Participant site: http://localhost:${PORT}/participant`);
  console.log(`  Researcher site:  http://localhost:${PORT}/researcher`);
});
