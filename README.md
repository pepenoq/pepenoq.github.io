# Paediatrics Practice — NCLEX/HESI Question Bank

A local, offline web app for practicing **Paediatrics (The Infant unit)** questions in
NCLEX/HESI format. Runs entirely in your web browser on **Windows and macOS** — no
internet, no installation, no accounts.

---

## What's included

- **320 questions** total: **six 50-question practice exams** plus a **20-question dosage-calculation test**.
- **Exams 1–4** each **mix every topic** in the unit (newborn adaptation, growth & development,
  congenital heart defects, respiratory & GI disorders, immunizations, safety, etc.) —
  these exams are *not* organized by topic.
- **Exam 5** is a **focused, single-theme exam** on **Developmental Milestones** and
  **Vaccination/Immunization Schedules** for infants/newborns (growth parameters, month-by-month
  motor/fine-motor/language/social milestones, Erikson/Piaget infant tasks, the childhood
  immunization schedule, vaccine types, contraindications, and infant feeding). It is built from
  Pillitteri Ch 28 (pp. 770–789), Ch 29 (pp. 790–803), and Ch 34 (pp. 958–961), and was
  cross-validated against the Exam 3 infant cross-verification study guide.
- **Exam 6** is a **focused, single-theme exam** on **neonatal/infant medications** — 5 questions
  each on erythromycin eye ointment, vitamin K, hepatitis B vaccine, surfactant, dexamethasone,
  ampicillin, gentamicin, acyclovir, nystatin, and digoxin. The assigned material directly covers
  nystatin (pp. 1241–1242), digoxin (pp. 1148–1157), and the hepatitis B vaccine (pp. 958–961),
  and covers the conditions the other drugs treat (RDS, neonatal sepsis, HSV, prematurity, newborn
  nursery care); drug-specific nursing detail is drawn from established NCLEX pharmacology grounded
  in those covered conditions.
- **Exam 7** is a **20-question Pediatric Medication & Fluid Calculation practice test** in NCLEX
  **fill-in-the-blank** format (type the numeric answer; it is graded within a small tolerance for
  rounding). It covers weight conversion, weight-based (mg/kg/day) divided dosing, dose-to-volume,
  safe-dose range, IV maintenance fluids by **both the 4/2/1 rule (mL/hr) and the 100/50/20
  Holliday–Segar rule (mL/day)**, and IV drip rates (gtt/min). These are calculation drills using
  standard pediatric dosing method — confirm any institution-specific rounding rules.
- Question formats: **Multiple Choice** and **Select All That Apply (SATA)**. The format
  is clearly labeled with a badge on every question, and SATA questions show a reminder
  that more than one answer may be correct.
- **Rationale** for every question, revealed after you submit, with the correct answer(s)
  highlighted (green = correct, red = your incorrect pick, dashed green = a correct answer
  you missed).
- **Flip through questions 1–50** with Previous/Next buttons, arrow keys, or the numbered
  navigator grid at the bottom of each exam.
- **Progress is saved** automatically in your browser (localStorage), so you can close the
  app and resume where you left off. Each exam can be **reset** from the landing screen.
- **Score summary** with a per-topic breakdown when you finish an exam.

Difficulty is tuned to be **challenging** — appropriate for a nursing student currently in
the Maternity/Paediatrics semester (application-level, not simple recall).

---

## How to run it

No server or install needed.

### Windows
1. Open the `PaediatricsPractice` folder.
2. **Double-click `index.html`** — it opens in your default browser (Edge, Chrome, etc.).

### macOS
1. Open the `PaediatricsPractice` folder in Finder.
2. **Double-click `index.html`**, or right-click → **Open With** → your browser (Safari,
   Chrome, etc.).

That's it. Choose a practice exam from the landing screen and begin.

> **Tip:** If you ever want progress-saving to work most reliably, keep all three files
> together in the same folder and open `index.html` directly. Some browsers restrict
> storage on `file://` pages in private/incognito mode — if progress doesn't persist, try a
> normal (non-private) window.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The app shell — landing screen, quiz screen, results screen, and all styling. |
| `app.js` | The quiz engine — rendering, grading, navigation, rationale display, scoring, and progress persistence. |
| `questions.js` | The 320-question bank (data only). Each question has a stem, options, correct answer(s), topic, format, and rationale. |
| `README.md` | This file. |

---

## How to use each screen

**Landing screen** — pick one of the seven exam cards. Cards show your progress and let you
resume or reset.

**Quiz screen**
- Read the **badge** to see whether it's Multiple Choice or Select All That Apply.
- Select your answer(s), then click **Submit answer** to lock it in and reveal the rationale.
- Move around with **Previous / Next**, the **← →** arrow keys, or the **numbered grid**
  (green = answered correctly, red = answered incorrectly).
- Click **Finish & score** anytime to see your results.

**Results screen** — shows your percentage, a pass/benchmark indicator (75%), and a
per-topic breakdown. You can **Review questions** (jump back into the exam with all answers
and rationales visible) or return to **all exams**.

---

## About the source material

Questions were written from the **Week 7 "The Infant" unit** materials provided in
`useruploads/`, and are intended to reinforce that content.

**Sourcing / how the textbook was used as the backbone:** The supplied textbook PDFs
(e.g., `770-789.pdf`, `1148-1157.pdf`, `958-961.pdf`) are **scanned images** — their
embedded text layer is corrupt (every glyph decodes to `\x01`), so it could not be read
directly. To honor the requirement that the **textbook be the backbone**, the 18 textbook
reading PDFs were **OCR'd locally** (`pdftoppm` render → `tesseract` OCR) into plain-text
files under `useruploads/ocr/`. Those OCR transcripts were then used to verify and anchor
the quantitative and qualitative facts in the questions (growth/weight/length patterns,
Erikson/Piaget stages, the immunization schedule, DDH/clubfoot exam and treatment,
pyloric-stenosis findings, congenital-heart classifications, etc.). The PowerPoint speaker
notes (`infantnotes.txt`) were used as **supporting** material; where the two could differ,
the OCR'd textbook was treated as authoritative.

The OCR text files remain in `useruploads/ocr/` for reference. If you spot any wording you
want reconciled more tightly to a specific textbook page, point to the page and the
matching question can be adjusted.

---

## Educational use only

This tool is a study aid. Rationales summarize course material for exam preparation and are
**not** clinical guidance.
