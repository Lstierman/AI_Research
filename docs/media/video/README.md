# video files go here

Put the 24 video explanations in this folder with exactly these names (24 files):

- `topic1_correct.mp4`  — Compound interest and saving, correct
- `topic1_error_easy.mp4`  — Compound interest and saving, error easy
- `topic1_error_medium.mp4`  — Compound interest and saving, error medium
- `topic1_error_hard.mp4`  — Compound interest and saving, error hard
- `topic2_correct.mp4`  — Phishing and account security, correct
- `topic2_error_easy.mp4`  — Phishing and account security, error easy
- `topic2_error_medium.mp4`  — Phishing and account security, error medium
- `topic2_error_hard.mp4`  — Phishing and account security, error hard
- `topic3_correct.mp4`  — Sunscreen, SPF and the UV index, correct
- `topic3_error_easy.mp4`  — Sunscreen, SPF and the UV index, error easy
- `topic3_error_medium.mp4`  — Sunscreen, SPF and the UV index, error medium
- `topic3_error_hard.mp4`  — Sunscreen, SPF and the UV index, error hard
- `topic4_correct.mp4`  — Insurance deductibles, correct
- `topic4_error_easy.mp4`  — Insurance deductibles, error easy
- `topic4_error_medium.mp4`  — Insurance deductibles, error medium
- `topic4_error_hard.mp4`  — Insurance deductibles, error hard
- `topic5_correct.mp4`  — Food safety and the temperature danger zone, correct
- `topic5_error_easy.mp4`  — Food safety and the temperature danger zone, error easy
- `topic5_error_medium.mp4`  — Food safety and the temperature danger zone, error medium
- `topic5_error_hard.mp4`  — Food safety and the temperature danger zone, error hard
- `topic6_correct.mp4`  — Two blocks on slides of equal height, correct
- `topic6_error_easy.mp4`  — Two blocks on slides of equal height, error easy
- `topic6_error_medium.mp4`  — Two blocks on slides of equal height, error medium
- `topic6_error_hard.mp4`  — Two blocks on slides of equal height, error hard

The text each file must say is in `stimuli/scripts/<same name>.txt`.
Use the same audio recording as the audio version, lip-synced onto the avatar, so audio and video differ only by the face.
Keep each file under ~50 MB (GitHub refuses files over 100 MB). To shrink a video:

    ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 26 -preset veryfast -c:a aac -b:a 128k -movflags +faststart out.mp4

Then open `check.html` on your site (or `npm run local` → http://localhost:8080/check.html) to confirm every file is found.
