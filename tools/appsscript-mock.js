// A small stand-in for the Google Apps Script services that backend/Code.gs uses
// (SpreadsheetApp, LockService, PropertiesService, ContentService, Utilities, Logger).
// Lets us run the real backend code locally (npm run local) and in the tests.

const fs = require("fs");
const vm = require("vm");
const path = require("path");
const crypto = require("crypto");

class MockSheet {
  constructor(name, rows) {
    this.name = name;
    this.rows = rows || [];
  }
  getLastRow() { return this.rows.length; }
  appendRow(values) { this.rows.push(values.map((v) => (v === undefined ? "" : v))); }
  setFrozenRows() {}
  deleteRow(r) { this.rows.splice(r - 1, 1); }
  getDataRange() {
    const rows = this.rows;
    const width = Math.max(0, ...rows.map((r) => r.length));
    return { getValues: () => rows.map((r) => Array.from({ length: width }, (_, i) => (r[i] === undefined ? "" : r[i]))) };
  }
  getRange(row, col) {
    const rows = this.rows;
    return {
      setValue: (v) => {
        while (rows.length < row) rows.push([]);
        rows[row - 1][col - 1] = v;
      },
      getValue: () => (rows[row - 1] || [])[col - 1],
    };
  }
}

class MockSpreadsheet {
  constructor(file) {
    this.file = file;
    this.sheets = {};
    if (file && fs.existsSync(file)) {
      const data = JSON.parse(fs.readFileSync(file, "utf8"));
      for (const [n, rows] of Object.entries(data)) this.sheets[n] = new MockSheet(n, rows);
    }
  }
  getSheetByName(n) { return this.sheets[n] || null; }
  insertSheet(n) { return (this.sheets[n] = new MockSheet(n)); }
  save() {
    if (!this.file) return;
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    const out = {};
    for (const [n, s] of Object.entries(this.sheets)) out[n] = s.rows;
    fs.writeFileSync(this.file, JSON.stringify(out));
  }
}

// Loads Code.gs in a fresh context. Returns { ctx, ss, get(params), post(body) }.
function loadBackend({ dataFile = null, codeFile = path.join(__dirname, "..", "backend", "Code.gs") } = {}) {
  const ss = new MockSpreadsheet(dataFile);
  const props = {};
  const ctx = {
    console,
    Logger: { log: () => {} },
    SpreadsheetApp: { getActiveSpreadsheet: () => ss },
    LockService: { getScriptLock: () => ({ waitLock() {}, releaseLock() {} }) },
    PropertiesService: {
      getScriptProperties: () => ({ getProperty: (k) => props[k] || null, setProperty: (k, v) => { props[k] = v; } }),
    },
    Utilities: { getUuid: () => crypto.randomUUID() },
    ContentService: {
      MimeType: { JSON: "application/json" },
      createTextOutput: (s) => ({ content: s, setMimeType() { return this; }, getContent() { return s; } }),
    },
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(codeFile, "utf8"), ctx, { filename: "Code.gs" });
  // The admin key lives in script properties; keep it stable across restarts via the data file's Info sheet.
  const info = ss.getSheetByName("Info");
  if (info) for (const r of info.rows) if (r[0] === "dashboard_key") props.ADMIN_KEY = r[1];
  const key = ctx.setup();
  ss.save();
  const parse = (out) => JSON.parse(out.getContent());
  return {
    ctx,
    ss,
    key,
    get(params) { const r = parse(ctx.doGet({ parameter: params })); ss.save(); return r; },
    post(body) { const r = parse(ctx.doPost({ postData: { contents: JSON.stringify(body) } })); ss.save(); return r; },
  };
}

module.exports = { loadBackend, MockSpreadsheet };
