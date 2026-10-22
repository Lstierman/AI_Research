// The one SQLite database both frontends use (data/survey.db).
// WAL mode lets the participant and dashboard servers run as separate processes on the same file.

const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const DATA_DIR = path.join(__dirname, "..", "data");
const DB_FILE = process.env.SURVEY_DB || path.join(DATA_DIR, "survey.db");

fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
const db = new Database(DB_FILE);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
CREATE TABLE IF NOT EXISTS surveys (
  id           TEXT PRIMARY KEY,
  condition_id TEXT NOT NULL,              -- counterbalancing condition, e.g. P3-S1-F2 (see src/design.js)
  plan         TEXT NOT NULL,              -- the 6 explanations in order, e.g. "case3:video:flawed | case1:text:correct | ..."
  created_at   TEXT NOT NULL,
  completed_at TEXT,
  simulated    INTEGER NOT NULL DEFAULT 0,
  demo         INTEGER NOT NULL DEFAULT 0   -- started from a demo link (?first=...); not counted for counterbalancing
);

-- One row per explanation shown (6 per survey)
CREATE TABLE IF NOT EXISTS explanations (
  survey_id       TEXT NOT NULL REFERENCES surveys(id) ON DELETE CASCADE,
  position        INTEGER NOT NULL,          -- 1..6, presentation order
  case_id         TEXT NOT NULL,
  case_title      TEXT,
  modality        TEXT NOT NULL,             -- text | voice | video
  version         TEXT NOT NULL,             -- correct | flawed
  flawed_question TEXT NOT NULL,             -- difficulty the case's error targets
  explanation_ms  INTEGER,                   -- time on the explanation screen
  plays           INTEGER,                   -- audio/video play starts
  done_at         TEXT,
  PRIMARY KEY (survey_id, position)
);

-- One row per answered question (18 per finished survey)
CREATE TABLE IF NOT EXISTS answers (
  survey_id         TEXT NOT NULL REFERENCES surveys(id) ON DELETE CASCADE,
  position          INTEGER NOT NULL,
  case_id           TEXT NOT NULL,
  modality          TEXT NOT NULL,
  version           TEXT NOT NULL,
  difficulty        TEXT NOT NULL,           -- easy | medium | hard
  is_flaw_target    INTEGER NOT NULL,        -- 1 if the case's error targets this question
  prompt            TEXT,
  selected          TEXT NOT NULL,           -- option key, e.g. "B"
  selected_text     TEXT,
  correct_option    TEXT NOT NULL,
  flawed_option     TEXT,                    -- the answer the error leads to (target question only)
  is_correct        INTEGER NOT NULL,
  chose_flaw_option INTEGER,                 -- target question only, both versions
  adopted_flaw      INTEGER,                 -- target question of a flawed explanation only
  confidence        INTEGER,                 -- 1 (not sure at all) .. 5 (completely sure)
  response_ms       INTEGER,
  answered_at       TEXT NOT NULL,
  PRIMARY KEY (survey_id, position, difficulty)
);
`);

// Columns added after the first version of the schema
const hasColumn = (table, col) => db.prepare(`PRAGMA table_info(${table})`).all().some((c) => c.name === col);
if (!hasColumn("answers", "confidence")) db.exec("ALTER TABLE answers ADD COLUMN confidence INTEGER");
if (!hasColumn("surveys", "demo")) db.exec("ALTER TABLE surveys ADD COLUMN demo INTEGER NOT NULL DEFAULT 0");

module.exports = { db, DB_FILE };
