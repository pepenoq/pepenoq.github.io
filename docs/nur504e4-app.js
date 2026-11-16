/* NUR 504 Exam 4 — Neuro, Endocrine & Musculoskeletal Trauma practice engine.
   Covers Weeks 9–11: traumatic brain injury, increased ICP, CPP and osmotic therapy,
   spinal cord injury, spinal vs neurogenic shock, autonomic dysreflexia, Guillain-Barre,
   diabetes and insulin, hypoglycemia, DKA, HHS, DI, SIADH, fractures, traction,
   fixation, fat embolism and compartment syndrome.
   Same engine family as the other banks: case-study chains (a scenario shared by
   several consecutive questions) and a per-distractor explanation of why each
   incorrect option is not the best answer, as the course question prompt requires.
   Uses its own STORE_KEY so no bank shares saved progress. */
(function () {
  "use strict";

  var DATA = (window.NUR504E4_DATA && window.NUR504E4_DATA.questions) || [];
  var EXAMS = [1, 2, 3, 4, 5, 6];
  var PASS = 75; // % considered passing (typical nursing benchmark)
  var STORE_KEY = "nur504_exam4_v1"; // distinct from every other bank key

  // Per-exam presentation (title shown on cards + quiz header; theme = subtitle).
  var EXAM_META = {
    1: { title: "Set 1 \u00b7 Week 9 \u2014 TBI, Increased ICP, CPP & Osmotic Therapy",
         theme: "GCS severity and primary vs secondary injury, the CSF halo sign and basilar skull fracture, Monro-Kellie, early vs late signs and Cushing\u2019s triad, posturing, ICP nursing care and suctioning, CPP and MAP calculations, mannitol and 3% saline dosing, pump rates, hold parameters and monitoring, hemorrhagic stroke priorities, craniotomy care \u2014 includes the motorcycle-crash TBI case chain" },
    2: { title: "Set 2 \u00b7 Week 9 \u2014 Spinal Cord Injury, Spinal vs Neurogenic Shock & Guillain-Barr\u00e9",
         theme: "Complete vs incomplete injury, airway by level, MAP above 65, immobilization, spinal shock vs neurogenic shock and when they coexist, fluids, atropine and vasopressors, autonomic dysreflexia triggers and the first action, halo vest care, SCI complications and medications, Guillain-Barr\u00e9 ascending weakness, airway readiness, plasmapheresis and IVIG \u2014 includes the C5 diving-injury case chain" },
    3: { title: "Set 3 \u00b7 Week 10 \u2014 Diabetes Review, Insulin, Hypoglycemia & HHS",
         theme: "Diagnostic thresholds and A1C, insulin onset and peak, basal / bolus / correction, insulin when NPO, hypoglycemia levels and the rule of 15, glucagon vs IV dextrose, sick-day rules, foot care, then hyperglycemic hyperosmolar state: labs, fluids first, potassium, low-dose insulin, safe rate of glucose fall, resolution criteria and fluid overload \u2014 includes the nursing-home HHS and held-breakfast hypoglycemia case chains" },
    4: { title: "Set 4 \u00b7 Week 10 \u2014 DKA: Labs, Acid-Base, Potassium & the Insulin Drip",
         theme: "Ketones, acid and the anion gap, ABG compensation and Kussmaul breathing, beta-hydroxybutyrate vs urine ketones, point-of-care vs serum glucose, fluids before insulin, the potassium thresholds, weight-based insulin math, adding dextrose below 250, cerebral edema, resolution criteria, the subcutaneous transition, sick-day prevention, DKA vs HHS \u2014 includes the Mr. J clinical-judgment case chain" },
    5: { title: "Set 5 \u00b7 Week 10 \u2014 Diabetes Insipidus & SIADH",
         theme: "ADH and the four values to read together, central vs nephrogenic DI, lithium, desmopressin and vasopressin effects and overcorrection, the sodium speed limits, SIADH causes, labs and findings, fluid restriction, 3% saline safety and osmotic demyelination, tolvaptan, seizure precautions, DI vs SIADH \u2014 includes the post-pituitary-surgery SIADH and DI case chains" },
    6: { title: "Set 6 \u00b7 Week 11 \u2014 Fractures, Traction, Fixation, Fat Embolism & Compartment Syndrome",
         theme: "Fracture healing and risk, Buck\u2019s vs Russell\u2019s vs skeletal traction and the TRACTION checks, ORIF vs external fixation, pin-site assessment and care, cast complications and infection, neurovascular checks, fat embolism vs clot embolism, the 6 Ps of compartment syndrome, no elevation, fasciotomy, amputation care \u2014 includes the tibial-fracture compartment syndrome and femoral fat-embolism case chains" }
  };
  function examTitle(ex) { return (EXAM_META[ex] && EXAM_META[ex].title) || ("Practice Exam " + ex); }

  // ---- persistence (best-effort; app still works if storage blocked) ----
  var state = loadState();
  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function examState(ex) {
    if (!state[ex]) state[ex] = { answers: {} };
    return state[ex];
  }

  // ---- helpers ----
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function questionsFor(ex) {
    return DATA.filter(function (q) { return q.exam === ex; });
  }
  function arrEq(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort(), y = b.slice().sort();
    for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
    return true;
  }
  // Correctness for any question type (mcq/sata use option indices).
  function answeredCorrect(q, a) {
    if (!a || !a.submitted) return false;
    if (q.type === "fill") {
      var v = parseFloat(String(a.value).replace(/,/g, "").trim());
      if (isNaN(v)) return false;
      var tol = (q.tolerance != null) ? q.tolerance : 0.01;
      return Math.abs(v - q.answer) <= tol + 1e-9;
    }
    return !!(a.picked && arrEq(a.picked, q.correct));
  }

  // ---- view routing ----
  var current = { exam: null, index: 0, list: [] };

  function show(section) {
    ["landing", "quiz", "results"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== section);
    });
    $("homeBtn").classList.toggle("hidden", section === "landing");
    window.scrollTo(0, 0);
  }

  // =====================================================================
  //  LANDING
  // =====================================================================
  function renderLanding() {
    var grid = $("examGrid");
    grid.innerHTML = "";
    EXAMS.forEach(function (ex) {
      var qs = questionsFor(ex);
      var st = examState(ex);
      var answered = 0, correct = 0;
      qs.forEach(function (q) {
        var a = st.answers[q.id];
        if (a && a.submitted) {
          answered++;
          if (answeredCorrect(q, a)) correct++;
        }
      });

      var card = el("div", "card");
      card.appendChild(el("div", "num", String(ex)));
      card.appendChild(el("h3", null, examTitle(ex)));
      card.appendChild(el("p", "meta", qs.length + " questions · multiple choice + SATA"));
      if (EXAM_META[ex] && EXAM_META[ex].theme) {
        card.appendChild(el("p", "meta", EXAM_META[ex].theme));
      }

      if (answered > 0) {
        var pm = el("div", "progress-mini",
          "In progress · " + answered + "/" + qs.length + " answered · " +
          correct + " correct");
        card.appendChild(pm);
      }

      var row = el("div", "row");
      var start = el("button", "start", answered > 0 ? "Resume exam" : "Start exam");
      start.addEventListener("click", function () { openExam(ex); });
      row.appendChild(start);

      if (answered > 0) {
        var reset = el("button", "reset", "Reset");
        reset.title = "Clear your answers for this exam";
        reset.addEventListener("click", function (e) {
          e.stopPropagation();
          if (confirm("Reset all answers for " + examTitle(ex) + "?")) {
            state[ex] = { answers: {} };
            saveState();
            renderLanding();
          }
        });
        row.appendChild(reset);
      }
      card.appendChild(row);
      grid.appendChild(card);
    });

    $("disclaimer").textContent =
      "Educational practice tool by Enoch Zhao. " + DATA.length +
      " questions total, built only from the MCPHS NUR 504 Exam 4 source material \u2014 the Week 9 " +
      "Disorders of the Brain and Spinal Cord and Mannitol & 3% Saline decks, the Week 10 Diabetes " +
      "Review, DKA and HHS, and DI and SIADH decks with their review slides, the Week 11 " +
      "Musculoskeletal deck and Fracture Management handout, all speaker notes, the Iggy Chapter 38, 44 " +
      "and 56 study guides and answer keys, the CPP and medication-math worksheets, the DKA, SIADH, " +
      "neurogenic vs spinal shock and fat vs clot embolism activities, and the instructor\u2019s Exam 4 " +
      "practice questions. Following the course question prompt, every item is written at the " +
      "Application level or higher, nothing outside those files is used, and each states why the " +
      "correct answer is right and why every other option is not. \n" +
      "Rationales are study aids and should not serve as clinical guidance. " +
      "Contact your local professor for content clarification.";
  }

  // =====================================================================
  //  QUIZ
  // =====================================================================
  function openExam(ex) {
    current.exam = ex;
    current.list = questionsFor(ex);
    // resume at first unanswered, else question 1
    var st = examState(ex);
    var idx = 0;
    for (var i = 0; i < current.list.length; i++) {
      var a = st.answers[current.list[i].id];
      if (!(a && a.submitted)) { idx = i; break; }
      if (i === current.list.length - 1) idx = 0;
    }
    current.index = idx;
    $("qExamName").textContent = examTitle(ex);
    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var q = current.list[current.index];
    var st = examState(current.exam);
    var ans = st.answers[q.id];
    var submitted = !!(ans && ans.submitted);
    var picked = (ans && ans.picked) ? ans.picked.slice() : [];
    var isSata = q.type === "sata";
    var isFill = q.type === "fill";

    $("qCounter").textContent = "Question " + (current.index + 1) + " of " + current.list.length;
    $("progressFill").style.width =
      ((current.index + 1) / current.list.length * 100) + "%";

    // badges
    var badges = $("qBadges");
    badges.innerHTML = "";
    var tb = el("span",
      "badge " + (isFill ? "type-fill" : (isSata ? "type-sata" : "type-mcq")),
      isFill ? "Dosage calculation" : (isSata ? "Select all that apply" : "Multiple choice"));
    badges.appendChild(tb);
    if (q.topic) badges.appendChild(el("span", "badge topic", q.topic));
    $("sataHint").classList.toggle("hidden", !isSata);

    // case-study scenario, shared by every question in a chain
    var sc = $("qScenario");
    if (sc) {
      sc.innerHTML = "";
      if (q.scenario) {
        sc.appendChild(el("div", "case-label", q.caseTitle || "Case study"));
        sc.appendChild(el("p", null, q.scenario));
        sc.classList.remove("hidden");
      } else {
        sc.classList.add("hidden");
      }
    }

    $("qStem").textContent = q.stem;

    // options / answer input
    var box = $("qOptions");
    box.innerHTML = "";
    if (isFill) {
      var wrap = el("div", "fill-group");
      var fin = document.createElement("input");
      fin.type = "text";
      fin.setAttribute("inputmode", "decimal");
      fin.className = "fill-input";
      fin.placeholder = "Enter number";
      fin.value = (ans && ans.value != null) ? ans.value : "";
      if (submitted) {
        fin.disabled = true;
        fin.classList.add(answeredCorrect(q, ans) ? "correct" : "incorrect");
      }
      fin.addEventListener("input", function () {
        current._fillValue = fin.value;
        updateSubmitEnabled();
      });
      wrap.appendChild(fin);
      if (q.unit) wrap.appendChild(el("span", "fill-unit", q.unit));
      box.appendChild(wrap);
      current._fillValue = fin.value;
    } else {
    q.options.forEach(function (text, i) {
      var lab = el("label", "opt");
      var input = document.createElement("input");
      input.type = isSata ? "checkbox" : "radio";
      input.name = "opt";
      input.value = i;
      input.checked = picked.indexOf(i) !== -1;
      if (submitted) { input.disabled = true; lab.classList.add("locked"); }
      input.addEventListener("change", function () {
        if (submitted) return;
        if (isSata) {
          var pos = picked.indexOf(i);
          if (input.checked && pos === -1) picked.push(i);
          if (!input.checked && pos !== -1) picked.splice(pos, 1);
        } else {
          picked = [i];
        }
        current._picked = picked; // re-point: MCQ reassigns picked to a new array
        updateSubmitEnabled();
      });
      lab.appendChild(input);
      lab.appendChild(el("span", "lab", text));

      if (submitted) {
        var isCorrect = q.correct.indexOf(i) !== -1;
        var wasPicked = picked.indexOf(i) !== -1;
        if (isCorrect && wasPicked) { lab.classList.add("correct"); mark(lab, "✓"); }
        else if (!isCorrect && wasPicked) { lab.classList.add("incorrect"); mark(lab, "✗"); }
        else if (isCorrect && !wasPicked) { lab.classList.add("missed"); mark(lab, "correct answer"); }
      }
      box.appendChild(lab);
    });
    }

    // rationale
    var r = $("qRationale");
    if (submitted) {
      var right = answeredCorrect(q, ans);
      r.className = "rationale " + (right ? "correct" : "incorrect");
      r.innerHTML = "";
      var h = el("h4", null, right ? "✓ Correct" : "✗ Incorrect");
      r.appendChild(h);
      r.appendChild(el("p", null, q.rationale));
      if (q.whyNot && q.options) {
        var wrongs = [];
        q.options.forEach(function (text, i) {
          if (q.correct.indexOf(i) === -1 && q.whyNot[i]) {
            wrongs.push([letter(i), q.whyNot[i]]);
          }
        });
        if (wrongs.length) {
          r.appendChild(el("div", "whynot-head", "Why the other options are not the best answer"));
          var ul = el("ul", "whynot");
          wrongs.forEach(function (w) {
            var li = document.createElement("li");
            li.appendChild(el("b", null, w[0] + ". "));
            li.appendChild(document.createTextNode(w[1]));
            ul.appendChild(li);
          });
          r.appendChild(ul);
        }
      }
      var ansTxt = isFill
        ? (q.answer + (q.unit ? " " + q.unit : ""))
        : q.correct.map(function (i) { return letter(i); }).join(", ");
      r.appendChild(el("div", "ans", "Correct answer" + ((!isFill && q.correct.length > 1) ? "s" : "") + ": " + ansTxt));
      if (q.bloom) {
        r.appendChild(el("div", "bloom", "Bloom’s level: " + q.bloom));
      }
    } else {
      r.className = "rationale hidden";
      r.innerHTML = "";
    }

    // buttons
    $("submitBtn").classList.toggle("hidden", submitted);
    current._picked = picked; // stash for submit
    updateSubmitEnabled();
    $("prevBtn").disabled = current.index === 0;
    $("nextBtn").disabled = current.index === current.list.length - 1;

    renderNav();
  }

  function mark(lab, txt) { lab.appendChild(el("span", "mark", txt)); }
  function letter(i) { return String.fromCharCode(65 + i); }

  function updateSubmitEnabled() {
    var q = current.list[current.index];
    if (q && q.type === "fill") {
      var v = (current._fillValue == null ? "" : String(current._fillValue)).trim();
      $("submitBtn").disabled = (v === "" || isNaN(parseFloat(v.replace(/,/g, ""))));
    } else {
      $("submitBtn").disabled = !current._picked || current._picked.length === 0;
    }
  }

  function submitAnswer() {
    var q = current.list[current.index];
    var st = examState(current.exam);
    if (q.type === "fill") {
      var v = (current._fillValue == null ? "" : String(current._fillValue)).trim();
      if (v === "" || isNaN(parseFloat(v.replace(/,/g, "")))) return;
      st.answers[q.id] = { value: v, submitted: true };
    } else {
      if (!current._picked || current._picked.length === 0) return;
      st.answers[q.id] = { picked: current._picked.slice(), submitted: true };
    }
    saveState();
    renderQuestion();
  }

  function go(delta) {
    var n = current.index + delta;
    if (n < 0 || n >= current.list.length) return;
    current.index = n;
    renderQuestion();
  }

  // ---- navigator grid (1..N) ----
  function renderNav() {
    var g = $("navGrid");
    g.innerHTML = "";
    var st = examState(current.exam);
    current.list.forEach(function (q, i) {
      var b = el("button", null, String(i + 1));
      var a = st.answers[q.id];
      if (i === current.index) b.classList.add("current");
      if (a && a.submitted) {
        b.classList.add("answered");
        b.classList.add(answeredCorrect(q, a) ? "correct" : "incorrect");
      }
      b.addEventListener("click", function () {
        current.index = i;
        renderQuestion();
      });
      g.appendChild(b);
    });
  }

  // =====================================================================
  //  RESULTS
  // =====================================================================
  function showResults() {
    var ex = current.exam;
    var qs = current.list;
    var st = examState(ex);
    var answered = 0, correct = 0;
    var byTopic = {};
    qs.forEach(function (q) {
      var t = q.topic || "General";
      if (!byTopic[t]) byTopic[t] = { c: 0, t: 0 };
      byTopic[t].t++;
      var a = st.answers[q.id];
      if (a && a.submitted) {
        answered++;
        var right = answeredCorrect(q, a);
        if (right) { correct++; byTopic[t].c++; }
      }
    });
    var pct = qs.length ? Math.round(correct / qs.length * 100) : 0;

    $("rExamName").textContent = examTitle(ex) + " — Results";
    var ring = $("rScore");
    ring.textContent = pct + "%";
    ring.className = "score-ring " + (pct >= PASS ? "pass" : "fail");
    $("rSummary").textContent =
      correct + " of " + qs.length + " correct · " +
      answered + " answered · " +
      (pct >= PASS ? "At or above the " + PASS + "% benchmark 🎉" : "Below the " + PASS + "% benchmark — keep reviewing");

    var bd = $("rBreakdown");
    bd.innerHTML = "";
    Object.keys(byTopic).sort().forEach(function (t) {
      var row = el("div", "brow");
      row.appendChild(el("span", "t", t));
      row.appendChild(el("span", null, byTopic[t].c + " / " + byTopic[t].t));
      bd.appendChild(row);
    });

    show("results");
  }

  // =====================================================================
  //  WIRING
  // =====================================================================
  function init() {
    if (!DATA.length) {
      $("examGrid").innerHTML =
        "<p style='color:#ff6b6b'>Could not load nur504e4-questions.js \u2014 make sure it sits next to nur504e4.html.</p>";
      return;
    }
    renderLanding();
    show("landing");

    $("homeBtn").addEventListener("click", function () { renderLanding(); show("landing"); });
    $("submitBtn").addEventListener("click", submitAnswer);
    $("prevBtn").addEventListener("click", function () { go(-1); });
    $("nextBtn").addEventListener("click", function () { go(1); });
    $("finishBtn").addEventListener("click", showResults);
    $("rHomeBtn").addEventListener("click", function () { renderLanding(); show("landing"); });
    $("rReviewBtn").addEventListener("click", function () {
      current.index = 0; show("quiz"); renderQuestion();
    });

    // keyboard: left/right to flip
    document.addEventListener("keydown", function (e) {
      if ($("quiz").classList.contains("hidden")) return;
      var tg = e.target;
      if (tg && (tg.tagName === "INPUT" || tg.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
