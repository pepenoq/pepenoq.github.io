/* Word Scramble — Toddler Unit game engine
   Pure vanilla JS, no dependencies. Works from file:// on Windows & Mac.
   Word data comes from scramble-words.js -> window.SCRAMBLE_WORDS */
(function () {
  "use strict";

  var WORDS = window.SCRAMBLE_WORDS || [];
  var ROUND_SIZE = 10;
  var STORE_KEY = "peds_scramble_v1";

  // ---- persistence (best-effort; game still works if storage blocked) ----
  var store = loadStore();
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
  }

  // ---- helpers ----
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  // Normalize for answer comparison: uppercase, drop spaces/hyphens/apostrophes.
  function norm(s) {
    return String(s).toUpperCase().replace(/[^A-Z]/g, "");
  }
  // Scramble the letters within each word; keep multi-word structure.
  // Guarantees the result differs from the original when possible.
  function scrambleTerm(term) {
    var words = term.toUpperCase().split(/[\s-]+/);
    for (var attempt = 0; attempt < 20; attempt++) {
      var scrambled = words.map(function (w) { return shuffle(w.split("")).join(""); });
      if (scrambled.join(" ") !== words.join(" ")) return scrambled;
    }
    return words.map(function (w) { return shuffle(w.split("")).join(""); });
  }
  function categories() {
    var seen = {};
    WORDS.forEach(function (w) { seen[w.category] = (seen[w.category] || 0) + 1; });
    return Object.keys(seen).sort().map(function (c) { return { name: c, count: seen[c] }; });
  }

  // ---- game state ----
  var game = {
    category: null,   // null = all
    list: [],         // words for this round
    index: 0,
    score: 0,
    streak: 0,
    hintUsed: false,
    solvedState: null, // null=open, "solved", "revealed"
    missed: [],
    scrambled: []
  };

  function show(section) {
    ["setup", "game", "results"].forEach(function (s) {
      $(s).classList.toggle("hidden", s !== section);
    });
    $("quitBtn").classList.toggle("hidden", section !== "game");
    window.scrollTo(0, 0);
  }

  // =====================================================================
  //  SETUP
  // =====================================================================
  function renderSetup() {
    var grid = $("catGrid");
    grid.innerHTML = "";

    var all = el("button", "catbtn all");
    all.appendChild(el("span", "t", "🎲 All categories"));
    all.appendChild(el("span", "m", WORDS.length + " terms · random mix of the whole unit"));
    all.addEventListener("click", function () { startGame(null); });
    grid.appendChild(all);

    categories().forEach(function (c) {
      var b = el("button", "catbtn");
      b.appendChild(el("span", "t", c.name));
      b.appendChild(el("span", "m", c.count + " terms"));
      b.addEventListener("click", function () { startGame(c.name); });
      grid.appendChild(b);
    });

    var best = store.best || 0;
    $("bestLine").classList.toggle("hidden", !best);
    if (best) $("bestLine").textContent = "🏆 Your best round: " + best + " points";
  }

  // =====================================================================
  //  GAME
  // =====================================================================
  function startGame(cat) {
    var pool = cat ? WORDS.filter(function (w) { return w.category === cat; }) : WORDS;
    game.category = cat;
    game.list = shuffle(pool).slice(0, Math.min(ROUND_SIZE, pool.length));
    game.index = 0;
    game.score = 0;
    game.streak = 0;
    game.missed = [];
    show("game");
    renderWord();
  }

  function currentWord() { return game.list[game.index]; }

  function renderWord() {
    var w = currentWord();
    game.hintUsed = false;
    game.solvedState = null;
    game.scrambled = scrambleTerm(w.word);

    $("gCounter").textContent = (game.index + 1) + "/" + game.list.length;
    $("gScore").textContent = String(game.score);
    $("gStreak").textContent = String(game.streak);
    $("gProgress").style.width = (game.index / game.list.length * 100) + "%";

    $("gCat").textContent = w.category;
    var letterCount = norm(w.word).length;
    var wordCount = w.word.split(/[\s-]+/).length;
    $("gLetters").textContent = letterCount + " letters" + (wordCount > 1 ? " · " + wordCount + " words" : "");
    $("gClue").innerHTML = "<b>Clue:</b> " + escapeHtml(w.clue);

    renderTiles(false);

    var input = $("gInput");
    input.value = "";
    input.disabled = false;
    input.className = "answer-input";
    $("checkBtn").disabled = false;
    $("gFeedback").textContent = "";
    $("gFeedback").className = "feedback";
    $("hintText").classList.add("hidden");
    $("hintBtn").disabled = false;
    $("helperRow").classList.remove("hidden");
    $("answerRow").classList.remove("hidden");
    $("gReveal").classList.add("hidden");
    $("nextRow").classList.add("hidden");
    input.focus();
  }

  function renderTiles(solved) {
    var box = $("gTiles");
    box.innerHTML = "";
    box.className = "tiles" + (solved ? " solved" : "");
    var groups = solved ? currentWord().word.toUpperCase().split(/[\s-]+/) : game.scrambled;
    groups.forEach(function (word, gi) {
      if (gi > 0) box.appendChild(el("span", "tile sep", ""));
      var g = el("span", "word-group");
      word.split("").forEach(function (ch) {
        g.appendChild(el("span", "tile", ch));
      });
      box.appendChild(g);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function checkAnswer() {
    if (game.solvedState) return;
    var w = currentWord();
    var guess = norm($("gInput").value);
    if (!guess) return;
    if (guess === norm(w.word)) {
      var pts = game.hintUsed ? 5 : 10;
      game.score += pts;
      game.streak += 1;
      finishWord("solved", "✓ Correct! +" + pts + " points");
    } else {
      game.streak = 0;
      $("gStreak").textContent = "0";
      var input = $("gInput");
      input.className = "answer-input wrong";
      $("gFeedback").textContent = "Not quite — try again.";
      $("gFeedback").className = "feedback bad";
      setTimeout(function () {
        if (!game.solvedState) input.className = "answer-input";
      }, 400);
    }
  }

  function useHint() {
    if (game.solvedState || game.hintUsed) return;
    game.hintUsed = true;
    var w = currentWord();
    var first = w.word.toUpperCase().replace(/[^A-Z]/g, "").charAt(0);
    $("hintText").textContent = "💡 Starts with “" + first + "” — " + w.hint;
    $("hintText").classList.remove("hidden");
    $("hintBtn").disabled = true;
  }

  function revealAnswer() {
    if (game.solvedState) return;
    game.streak = 0;
    game.missed.push(currentWord());
    finishWord("revealed", "Answer revealed — no points this word.");
  }

  function finishWord(state, feedbackText) {
    var w = currentWord();
    game.solvedState = state;
    var good = state === "solved";

    $("gScore").textContent = String(game.score);
    $("gStreak").textContent = String(game.streak);
    $("gProgress").style.width = ((game.index + 1) / game.list.length * 100) + "%";

    renderTiles(true);
    var input = $("gInput");
    input.value = w.word.toUpperCase();
    input.disabled = true;
    input.className = "answer-input" + (good ? " correct" : "");
    $("checkBtn").disabled = true;
    $("gFeedback").textContent = feedbackText;
    $("gFeedback").className = "feedback " + (good ? "good" : "bad");
    $("helperRow").classList.add("hidden");
    $("hintText").classList.add("hidden");

    var r = $("gReveal");
    r.className = "reveal" + (good ? "" : " skipped");
    r.innerHTML = "";
    r.appendChild(el("h4", null, w.word.toUpperCase()));
    r.appendChild(el("p", null, w.def));
    if (w.source) r.appendChild(el("div", "src", "Source: " + w.source));
    r.classList.remove("hidden");

    var nb = $("nextBtn");
    nb.textContent = (game.index === game.list.length - 1) ? "See results →" : "Next word →";
    $("nextRow").classList.remove("hidden");
    nb.focus();
  }

  function nextWord() {
    if (game.index >= game.list.length - 1) { showResults(); return; }
    game.index += 1;
    renderWord();
  }

  // =====================================================================
  //  RESULTS
  // =====================================================================
  function showResults() {
    var max = game.list.length * 10;
    $("rCat").textContent =
      (game.category || "All categories") + " — round complete";
    $("rScore").textContent = game.score + " pts";
    $("rSummary").textContent =
      (game.list.length - game.missed.length) + " of " + game.list.length +
      " solved · max possible " + max + " points";

    var isBest = game.score > (store.best || 0);
    if (isBest) { store.best = game.score; saveStore(); }
    $("rBest").classList.toggle("hidden", !isBest);

    var ml = $("rMissed");
    ml.innerHTML = "";
    if (game.missed.length) {
      var head = el("div", "mrow");
      head.appendChild(el("span", "s", "Terms to review:"));
      ml.appendChild(head);
      game.missed.forEach(function (w) {
        var row = el("div", "mrow");
        row.appendChild(el("span", "w", w.word.toUpperCase()));
        row.appendChild(el("span", "s", w.category));
        ml.appendChild(row);
      });
    }
    show("results");
  }

  // =====================================================================
  //  WIRING
  // =====================================================================
  function init() {
    if (!WORDS.length) {
      $("catGrid").innerHTML =
        "<p style='color:#ff6b6b'>Could not load scramble-words.js — make sure it sits next to scramble.html.</p>";
      return;
    }
    renderSetup();
    show("setup");

    $("checkBtn").addEventListener("click", checkAnswer);
    $("gInput").addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkAnswer();
    });
    $("shuffleBtn").addEventListener("click", function () {
      if (game.solvedState) return;
      game.scrambled = scrambleTerm(currentWord().word);
      renderTiles(false);
    });
    $("hintBtn").addEventListener("click", useHint);
    $("revealBtn").addEventListener("click", revealAnswer);
    $("nextBtn").addEventListener("click", nextWord);
    $("quitBtn").addEventListener("click", function () {
      if (confirm("End this round and return to category selection?")) {
        renderSetup(); show("setup");
      }
    });
    $("againBtn").addEventListener("click", function () { startGame(game.category); });
    $("homeBtn2").addEventListener("click", function () { renderSetup(); show("setup"); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
