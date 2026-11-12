#!/usr/bin/env node
// Runs the whole study on your own computer, no Google account needed:
//   - serves the website in docs/ (survey, dashboard, media checker)
//   - runs the real backend/Code.gs against a local stand-in for Google Sheets (local-data/sheets.json)
//
//   npm run local          → http://localhost:8080   (dashboard key is printed below)
//
// Useful for trying the survey and for checking your media files before you launch.

const http = require("http");
const fs = require("fs");
const path = require("path");
const { loadBackend } = require("./appsscript-mock");

const PORT = Number(process.env.PORT) || 8080;
const DOCS = path.join(__dirname, "..", "docs");
const DATA = process.env.DATA_FILE || path.join(__dirname, "..", "local-data", "sheets.json");
const backend = loadBackend({ dataFile: DATA });

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".wav": "audio/wav", ".mp4": "video/mp4",
  ".webm": "video/webm", ".png": "image/png", ".svg": "image/svg+xml", ".md": "text/plain; charset=utf-8", ".ico": "image/x-icon",
};

function serveFile(req, res, file) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end("Not found"); }
    const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : st.size - 1;
      res.writeHead(206, { "Content-Type": type, "Content-Range": `bytes ${start}-${end}/${st.size}`, "Accept-Ranges": "bytes", "Content-Length": end - start + 1 });
      return fs.createReadStream(file, { start, end }).pipe(res);
    }
    res.writeHead(200, { "Content-Type": type, "Content-Length": st.size, "Accept-Ranges": "bytes", "Cache-Control": "no-cache" });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname === "/api") {
    const send = (obj) => { res.writeHead(200, { "Content-Type": "application/json" }); res.end(JSON.stringify(obj)); };
    if (req.method === "GET") return send(backend.get(Object.fromEntries(url.searchParams)));
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      let parsed = {};
      try { parsed = JSON.parse(body || "{}"); } catch { return send({ error: "Body is not valid JSON" }); }
      send(backend.post(parsed));
    });
    return;
  }
  let p = decodeURIComponent(url.pathname);
  if (p.endsWith("/")) p += "index.html";
  const file = path.normalize(path.join(DOCS, p));
  if (!file.startsWith(DOCS)) { res.writeHead(403); return res.end(); }
  serveFile(req, res, file);
});

server.listen(PORT, () => {
  console.log(`Survey:        http://localhost:${PORT}/`);
  console.log(`Test run:      http://localhost:${PORT}/?test=1`);
  console.log(`Media checker: http://localhost:${PORT}/check.html`);
  console.log(`Dashboard:     http://localhost:${PORT}/dashboard/   (key: ${backend.key})`);
  console.log(`Data file:     ${DATA}`);
});
