/* NUR 504 Exam 3 — Burns, Shock, Sepsis & DIC practice engine.
   Same engine family as the other banks, with two additions for this bank:
   case-study chains (a scenario shared by several consecutive questions) and
   a per-distractor explanation of why each incorrect option is not the best
   answer, which the Exam 3 question prompt requires.
   Uses its own STORE_KEY so no bank shares saved progress. */
(function () {
  "use strict";

  var DATA = (window.NUR504E3_DATA && window.NUR504E3_DATA.questions) || [];
  var EXAMS = [1, 2, 3, 4];
  var PASS = 75; // % considered passing (typical nursing benchmark)
  var STORE_KEY = "nur504_exam3_v1"; // distinct from every other bank key

  // Per-exam presentation (title shown on cards + quiz header; theme = subtitle).
  var EXAM_META = {
    1: { title: "Set 1 \u00b7 Week 7 \u2014 Burn Depth, Extent & Emergent-Phase Priorities",
         theme: "Classifying burn depth from the findings, the blister rule, the rule of nines, the Parkland formula and when its clock starts, mean arterial pressure, electrical injury and the iceberg effect, myoglobin and acute kidney injury, inhalation injury, airway priority and triage, the emergent-phase order of care" },
    2: { title: "Set 2 \u00b7 Week 7 \u2014 Burn Complications, Fluid Shifts & Phases of Care",
         theme: "Capillary leak and hemoconcentration, the potassium and sodium course, burn hyperglycemia, compartment syndrome and escharotomy, paralytic ileus, Curling\u2019s ulcer, burn wound sepsis, the emergent/acute/rehabilitative phases, compression garments and rehabilitation \u2014 includes the house-fire and circumferential-burn case chains" },
    3: { title: "Set 3 \u00b7 Week 8 \u2014 Shock: Recognition, Stages & the Four Shock States",
         theme: "Perfusion before blood pressure, oxygen delivery and demand, the lactate trend, compensatory mechanisms, the four stages through refractory, hypovolemic / cardiogenic / obstructive / distributive shock, the neurogenic and anaphylactic exceptions, delegation \u2014 includes the bee-sting anaphylaxis case chain" },
    4: { title: "Set 4 \u00b7 Week 8 \u2014 Sepsis, Septic Shock, MODS, DIC & Vasoactive Drugs",
         theme: "SIRS criteria and screening, sepsis and septic shock definitions, the hour-1 bundle, cultures before antibiotics, the deceptive middle stage, MODS, DIC labs and bleeding precautions, norepinephrine / vasopressin / dobutamine / dopamine and extravasation \u2014 includes the urosepsis case chain" }
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
      " questions total, built only from the MCPHS NUR 504 Exam 3 source material \u2014 the Week 7 " +
      "and Week 8 objectives, the Burns, Shock Basics, Shock States, Sepsis/MODS, DIC and Shock " +
      "Pharmacology decks with their speaker notes, and the in-class activities and case studies " +
      "(burn questions, the Burns case study, the anaphylaxis case study, the UTI sepsis case study " +
      "and the Shock/Sepsis/Burns worksheet). Following the course question prompt, every item is " +
      "written at the Application level or higher and nothing outside those files is used. \n" +
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
        "<p style='color:#ff6b6b'>Could not load nur504e3-questions.js \u2014 make sure it sits next to nur504e3.html.</p>";
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
