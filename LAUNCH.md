# Launch checklist

Everything runs on free services: the **website** (survey, dashboard, media) on **GitHub Pages**, the **data** in a **Google Sheet** through a small **Google Apps Script** web app. No server to keep alive, no database to pay for. About 20 minutes the first time.

---

## 1 · Put in the media files

1. Record the 24 explanation texts in `stimuli/scripts/` (one file per topic × variant) with your TTS voice, and make the 24 avatar videos from the same audio.
2. Save them as:
   - `docs/media/audio/topic1_correct.mp3` … `topic6_error_hard.mp3` (24 files)
   - `docs/media/video/topic1_correct.mp4` … `topic6_error_hard.mp4` (24 files)

   The exact names are listed in `docs/media/audio/README.md` and `docs/media/video/README.md`. Text versions need no files; they're built in.
3. Optional, recommended: check them locally (needs Node 18+): `npm run local` → open http://localhost:8080/check.html. Every row should show ✓ and a duration. The *preview* links show each explanation exactly as participants will see it.

## 2 · Create the backend (Google Sheet + Apps Script)

1. Create a new Google Sheet (e.g. "AI explanation survey – data").
2. In the Sheet: **Extensions → Apps Script**. Delete the sample code in `Code.gs`, paste the **entire** contents of [`backend/Code.gs`](backend/Code.gs), and save (💾).
3. In the toolbar, pick the function **`setup`** and click **Run**. Google asks for permission: choose your account → *Advanced* → *Go to … (unsafe)* → *Allow*. (It's your own script; Google shows this for every unverified script.)
   This creates the tabs `Participants`, `Answers`, `Extra` and `Info`. The **dashboard key** is in the `Info` tab.
4. **Deploy → New deployment** → gear icon → **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   
   Click **Deploy** and copy the **Web app URL** (ends in `/exec`).
5. Paste that URL into `docs/js/config.js` → `backendUrl: "https://script.google.com/macros/s/…/exec"`.

> If you ever change `Code.gs` later: **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**. The URL stays the same. (Just saving is not enough.)

## 3 · Fill in the remaining settings — `docs/js/config.js`

- `contactEmail` – shown on the consent and thank-you pages.
- `extraQuestions` – the 3 questions after the topics (placeholders now). Types: `choice`, `scale`, `text`; `withCertainty: true` adds the 1–5 certainty item.
- Optional: `blockPhones` (now: phones get a warning but may continue), `requireFullPlay`, `textMinSecondsPerWord`, `shuffleOptions`.

## 4 · Put it online (GitHub Pages)

1. Commit and push everything (including the media files) to GitHub.
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/docs** → Save.
3. After a minute your site is at `https://<user>.github.io/<repo>/`:
   - Survey (send this to participants): `https://<user>.github.io/<repo>/`
   - Dashboard: `…/dashboard/` (enter the key from the `Info` tab)
   - Media checker: `…/check.html`

## 5 · Test, clean up, launch

1. Do one full run yourself at `…/?test=1`. Test runs are saved but **marked as test**: they don't count for the balancing and the dashboard hides them unless you tick *Include test data*.
2. In the dashboard, tick *Include test data* and check your run arrived. Then **Delete all test data**.
3. Open `…/check.html` on the live site once more: all 48 files ✓.
4. Send the plain link (without `?test=1`) to participants. 🚀

---

## How the 72 conditions are assigned

- A **condition** fixes, for each of the 6 topics, which variant (correct / error on the easy, medium or hard question) and which form (text / voice / video) the participant gets. There are 72 conditions (`docs/js/design.js`).
- When someone presses *Start*, the backend counts per condition the participants who **finished** or **started less than 2 hours ago**, and assigns a **random condition among the least-filled ones**. A lock prevents two people from grabbing the same slot at the same moment.
- So: after 72 finished participants every condition has exactly 1, after 144 exactly 2, etc. Someone who abandons frees their slot after 2 hours (`ACTIVE_HOURS` in `backend/src/server.js`).
- Within a condition, the 6 topics are shown in a **random order**, saved per participant.
- Properties (checked by `npm test`): every topic × variant × form cell appears exactly 6 times per 72 participants; every participant sees each form exactly twice and every error type at least once.

## Things to know

- **Participants can resume**: progress is kept in their browser, so a reload continues where they left off.
- **Answer key** is only in the backend; the participant page never sees which option is correct.
- Media are served from GitHub Pages (bandwidth limit ~100 GB/month — plenty for a few hundred participants with 720p videos).
- Google Apps Script handles ~30 simultaneous requests; fine for this study.
- If someone reports "could not save": the page retries automatically and keeps the answers until it succeeds.
