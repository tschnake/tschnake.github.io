/* ============================================================================
   main.js — Startseite (index.html) des Toronto-Leitfadens
   ----------------------------------------------------------------------------
   Liest window.GUIDE_DATA (aus data/sections.js) und baut die EINGANGSSEITE:
   Logo-Hero, Kurzfassungs-Kasten und große Themen-Karten. Jede Karte verlinkt
   auf eine EIGENE Seite (z. B. klimapolitik.html) — der Abschnittsinhalt liegt
   also nicht hier, sondern wird von js/section.js auf der Zielseite gerendert.

     renderHero()        -> Logo + Titel + Zeitraum
     renderKurzfassung() -> hervorgehobener Kasten oben
     renderCards()       -> große Sprung-Karten (14 Themen + Empfehlungen + Vorbehalte)
     setupSearch()       -> Live-Filter der Karten nach Interessensgebiet
   ========================================================================== */

(function () {
  "use strict";

  var D = window.GUIDE_DATA;
  var LOGO = "img/logo.svg";

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  /* -- Eingangs-/Heldensektion (mit Logo) ------------------------------- */
  function renderHero() {
    var hero = document.getElementById("hero");

    var logo = el("img", "hero__logo");
    logo.src = LOGO;
    logo.alt = "Logo: Toronto-Skyline mit Dackel";
    logo.width = 120;
    logo.height = 120;
    hero.appendChild(logo);

    hero.appendChild(el("p", "hero__period", D.period));
    hero.appendChild(el("h1", "hero__title", D.title));
    hero.appendChild(el("p", "hero__subtitle", D.subtitle));
  }

  /* -- Kurzfassung (hervorgehobener Kasten) ----------------------------- */
  function renderKurzfassung() {
    var box = document.getElementById("kurzfassung");
    box.appendChild(el("h2", "box__title", "Kurzfassung"));
    var list = el("ul", "item-list");
    D.kurzfassung.forEach(function (html) {
      list.appendChild(el("li", null, html));
    });
    box.appendChild(list);
  }

  /* -- Große Themen-Karten ---------------------------------------------- */
  // Reihenfolge: 14 Themen, danach Empfehlungen & Vorbehalte (Sonderseiten).
  function cardEntries() {
    var entries = D.sections.map(function (s) {
      return { id: s.id, num: String(s.num), icon: s.icon, title: s.title, lead: s.lead };
    });
    ["empfehlungen", "vorbehalte"].forEach(function (key) {
      var x = D.extras[key];
      entries.push({ id: key, num: x.icon, icon: x.icon, title: x.title, lead: x.lead, special: true });
    });
    return entries;
  }

  function renderCards() {
    var grid = document.getElementById("nav-cards");
    cardEntries().forEach(function (e) {
      // Echter Seitenwechsel: Link auf eine eigene HTML-Datei.
      var card = el("a", "card" + (e.special ? " card--special" : ""));
      card.href = e.id + ".html";
      card.setAttribute("data-target", e.id);
      card.setAttribute("data-search", (e.title + " " + (e.lead || "")).toLowerCase());

      card.appendChild(el("span", "card__icon", e.icon || "•"));
      var body = el("span", "card__body");
      body.appendChild(el("span", "card__title", e.title));
      if (e.lead) body.appendChild(el("span", "card__lead", e.lead));
      card.appendChild(body);
      card.appendChild(el("span", "card__go", "→"));

      grid.appendChild(card);
    });
  }

  /* -- Live-Suche / Filter nach Interessensgebiet ----------------------- */
  function setupSearch() {
    var input = document.getElementById("search");
    var counter = document.getElementById("search-count");
    var cards = Array.prototype.slice.call(document.querySelectorAll("#nav-cards .card"));

    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var match = q === "" || card.getAttribute("data-search").indexOf(q) !== -1;
        card.style.display = match ? "" : "none";
        if (match) shown++;
      });
      counter.textContent = q === "" ? "" : shown + " von " + cards.length + " Karten";
    }

    input.addEventListener("input", apply);
  }

  /* -- Zusammenführung -------------------------------------------------- */
  function init() {
    if (!D) {
      console.error("GUIDE_DATA fehlt — wurde data/sections.js geladen?");
      return;
    }
    document.title = D.title;
    renderHero();
    renderKurzfassung();
    renderCards();
    setupSearch();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
