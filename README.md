# pepenoq Pages — NCLEX/HESI Question Banks

A local, offline web app holding NCLEX/HESI-style practice question banks for more than
one nursing course. Runs entirely in your web browser on **Windows and macOS** — no
internet, no installation, no accounts.

Two courses are covered, and they are kept completely separate — separate pages, separate
questions, and separate saved progress:

- **NUR 504 — Adult Cardiovascular Critical Care** (current) — `nur504.html`
- **NUR 404 — Maternity / Paediatrics** (earlier) — `exam4.html`, `infant.html`, plus the
  word-scramble study games

`index.html` is the landing page and links to everything.

## Internet Direct Access link:
[https://pepenoq.github.io](https://pepenoq.github.io/)

---

## What's included

### NUR 504 — Adult Cardiovascular Critical Care (`nur504.html`)

- **200 questions** across **four 50-question exams**, built from the Week 1, Week 2 and
  Week 3 lecture decks (slides + speaker notes), the pre-class materials, and the in-class
  activities and case studies.
  - **Exam 1 — Week 1:** hemodynamic monitoring and vasoactive therapy — preload, afterload
    and contractility, CO/CI, MAP and pulse pressure, arterial lines, CVP, the PA catheter,
    pressors and inotropes, and ECG fundamentals.
  - **Exam 2 — Week 2:** dysrhythmias, conduction and devices — sinus, atrial and ventricular
    rhythms, AV block, the lethal rhythms, electrolyte ECG changes, the antiarrhythmics,
    cardioversion versus defibrillation, pacemakers and AICDs.
  - **Exam 3 — Week 2:** acute coronary syndrome, PCI and cardiac surgery — angina through
    STEMI, troponin kinetics, lead localization, door-to-balloon, fibrinolytics, PCI
    aftercare, and CABG.
  - **Exam 4 — Week 3:** valves, carditis, cardiomyopathy, tamponade and aortic disease.
- **148 multiple choice + 52 SATA**, written as hard NCLEX critical-thinking items. There
  are no filler options — every distractor is a real drug, rhythm, value or intervention
  from an adjacent concept, so you have to know the material to rule it out. The correct
  answer is spread evenly across all four multiple-choice positions, and SATA items vary
  between two and five correct options, so neither position nor count gives anything away.
- **Full rationale** on every question that also explains why the best distractor is wrong.

### NUR 404 — Maternity / Paediatrics

The Exam 4 bank (`exam4.html`, 300 questions, Toddler through Adolescent) and the study
games (`psychopharm.html`, `scramble.html`) are linked from the landing page. The Infant
unit bank (`infant.html`) is described below.

#### Infant unit (`infant.html`)

- **345 questions** total: **six 50-question practice exams**, a **20-question dosage-calculation test**, and a **25-question priority-intervention exam**.
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
- **Exam 8** is a **25-question Priority-Intervention exam** organized around the **ABCs of nursing**
  (Airway > Breathing > Circulation, then safety/priority-setting). These are NCLEX-style "what is the
  FIRST/priority action" and "which patient/finding requires immediate intervention" items drawn from
  the infant-unit conditions in Exams 1-6 (epiglottitis, RSV/bronchiolitis, EA/TEF, cleft palate,
  choking, seizures, apnea of prematurity, RDS, tetralogy hypercyanotic spells, digoxin/heart failure,
  pyloric stenosis, shock/dehydration, central cyanosis).
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
1. Open the `pepenoqPages` folder.
2. **Double-click `index.html`** — it opens in your default browser (Edge, Chrome, etc.).

### macOS
1. Open the `pepenoqPages` folder in Finder.
2. **Double-click `index.html`**, or right-click → **Open With** → your browser (Safari,
   Chrome, etc.).

That's it. Choose a practice exam from the landing screen and begin.

> **Tip:** If you ever want progress-saving to work most reliably, keep all the files
> in `docs/` together in the same folder and open `index.html` directly. Some browsers restrict
> storage on `file://` pages in private/incognito mode — if progress doesn't persist, try a
> normal (non-private) window.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The app shell — landing screen, quiz screen, results screen, and all styling. |
| `app.js` | The quiz engine — rendering, grading, navigation, rationale display, scoring, and progress persistence. |
| `questions.js` | The 345-question bank (data only). Each question has a stem, options, correct answer(s), topic, format, and rationale. |
| `README.md` | This file. |

---

## How to use each screen

**Landing screen** — pick one of the eight exam cards. Cards show your progress and let you
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

Questions were written from the **Week 7 "The Infant" unit** materials provided on Blackboard, and are intended to reinforce that content.


---

## Educational use only

This tool is a study aid. Rationales summarize course material for exam preparation and are
**not** clinical guidance.
