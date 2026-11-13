#!/usr/bin/env node
// Generates:
//   backend/Code.gs              – the single file you paste into Google Apps Script
//   stimuli/scripts/*.txt        – the 24 explanation texts to feed to your TTS voice / avatar tool
//   stimuli/ALL_SCRIPTS.md       – all 24 texts in one file, with the changed parts marked
// Run: npm run build   (also checked by npm test, so the generated files never go stale)

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

function buildCodeGs() {
  const parts = [
    ["docs/js/design.js", "EXPERIMENTAL DESIGN (copied from docs/js/design.js)"],
    ["backend/src/key.js", "ANSWER KEY (copied from backend/src/key.js)"],
    ["backend/src/server.js", "SERVER (copied from backend/src/server.js)"],
  ];
  const header =
    "/**\n * @OnlyCurrentDoc  (limits this script to the one Google Sheet it is attached to)\n */\n" +
    "// GENERATED FILE — do not edit here. Edit the source files and run `npm run build`.\n" +
    "// Paste this whole file into Extensions → Apps Script of your Google Sheet (see LAUNCH.md).\n\n";
  return header + parts.map(([file, title]) => `// ═════ ${title} ═════\n` + read(file).trim() + "\n").join("\n");
}

function buildScripts() {
  const C = require(path.join(ROOT, "docs/js/content.js"));
  const D = require(path.join(ROOT, "docs/js/design.js"));
  const files = {};
  let md =
    "# Explanation scripts (24)\n\n" +
    "Generated from `docs/js/content.js` by `npm run build`. Record each script with the same TTS voice; " +
    "the video versions should use the *same audio file* lip-synced onto the avatar, so audio and video differ only by the face.\n\n" +
    "File names to save the recordings as:\n\n" +
    "- audio: `docs/media/audio/<name>.mp3`\n- video: `docs/media/video/<name>.mp4`\n\n" +
    "In the error versions, the changed text is marked **[[like this]]** (the marks are not part of the script).\n\n";
  const key = { correct: null, error_easy: "easy", error_medium: "medium", error_hard: "hard" };
  for (const t of C.topics) {
    md += `## ${t.id} — ${t.title}\n\n`;
    for (const v of D.VARIANTS) {
      const name = `${t.id}_${v}`;
      files[`stimuli/scripts/${name}.txt`] = C.explanationParagraphs(t, v).join("\n\n") + "\n";
      const k = key[v];
      const marked = t.paragraphs
        .map((para) =>
          para
            .map((part) => {
              if (typeof part === "string") return part;
              if (k && Object.prototype.hasOwnProperty.call(part, k)) return part[k] ? `**[[${part[k]}]]**` : "**[[sentence removed]]** ";
              return part.correct;
            })
            .join("")
            .replace(/\s{2,}/g, " ")
            .trim()
        )
        .filter(Boolean)
        .join("\n\n");
      md += `### \`${name}\`${v === "correct" ? " (correct)" : ` (error on the ${k} question)`}\n\n${marked}\n\n`;
    }
  }
  files["stimuli/ALL_SCRIPTS.md"] = md;
  return files;
}

function outputs() {
  return { "backend/Code.gs": buildCodeGs(), ...buildScripts() };
}

if (require.main === module) {
  const check = process.argv.includes("--check");
  let stale = [];
  for (const [file, content] of Object.entries(outputs())) {
    const full = path.join(ROOT, file);
    const old = fs.existsSync(full) ? fs.readFileSync(full, "utf8") : null;
    if (old === content) continue;
    if (check) stale.push(file);
    else {
      fs.mkdirSync(path.dirname(full), { recursive: true });
      fs.writeFileSync(full, content);
      console.log("wrote", file);
    }
  }
  if (check && stale.length) {
    console.error("Generated files are out of date, run `npm run build`:\n  " + stale.join("\n  "));
    process.exit(1);
  }
  if (!check) console.log("build done");
}

module.exports = { outputs };
