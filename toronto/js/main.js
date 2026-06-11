/* ============================================================================
   main.js — Rendering & Interaktion des Toronto-Leitfadens
   ----------------------------------------------------------------------------
   Liest window.GUIDE_DATA (aus data/sections.js) und baut die Seite auf.
   Vanilla JS, keine Abhängigkeiten. Aufgeteilt in benannte Funktionen, damit
   du gezielt Aufträge geben kannst:

     renderHero()        -> die Eingangs-/Heldensektion (Titel, Zeitraum)
     renderKurzfassung() -> der hervorgehobene Kasten oben
     renderNav()         -> die Kachel-/Karten-Übersicht + Sprungmarken
     renderSections()    -> die 14 Themenblöcke
     renderEmpfehlungen()-> der gestaffelte Empfehlungsblock
     renderVorbehalte()  -> der dezente Hinweis-Kasten unten
     setupSearch()       -> das Live-Suchfeld (Filter nach Interessensgebiet)
     setupScrollSpy()    -> hebt die aktive Sprungmarke beim Scrollen hervor

   Alles wird beim DOMContentLoaded-Event in init() zusammengeführt.
   ========================================================================== */

(function () {
  "use strict";

  var D = window.GUIDE_DATA;

  /* -- kleine Helfer ---------------------------------------------------- */

  // Erzeugt ein Element mit optionaler Klasse und innerHTML.
  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // Rendert eine Liste von Items (jedes { html, sub? }) als <ul>/<ol>.
  function renderItemList(items, ordered) {
    var list = el(ordered ? "ol" : "ul", "item-list");
    items.forEach(function (item) {
      var li = el("li", null, item.html);
      if (item.sub && item.sub.length) {
        var subList = el("ul", "sub-list");
        item.sub.forEach(function (subHtml) {
          subList.appendChild(el("li", null, subHtml));
        });
        li.appendChild(subList);
      }
      list.appendChild(li);
    });
    return list;
  }

  /* -- Eingangs-/Heldensektion ------------------------------------------ */
  function renderHero() {
    var hero = document.getElementById("hero");
    hero.appendChild(el("p", "hero__period", D.period));
    hero.appendChild(el("h1", "hero__title", D.title));
    hero.appendChild(el("p", "hero__subtitle", D.subtitle));
  }

  /* -- Kurzfassung (hervorgehobener Kasten) ----------------------------- */
  function renderKurzfassung() {
    var box = document.getElementById("kurzfassung");
    box.appendChild(el("h2", "box__title", "Kurzfassung"));
    box.appendChild(renderItemList(D.kurzfassung.map(function (h) {
      return { html: h };
    })));
  }

  /* -- Navigation: Karten-Übersicht + Sprungmarken ---------------------- */
  // Baut für jeden Abschnitt plus Empfehlungen/Vorbehalte eine Karte.
  function renderNav() {
    var nav = document.getElementById("nav-cards");
    var entries = D.sections.map(function (s) {
      return { id: s.id, num: s.num, title: s.title };
    });
    entries.push({ id: "empfehlungen", num: "★", title: "Empfehlungen" });
    entries.push({ id: "vorbehalte", num: "!", title: "Vorbehalte" });

    entries.forEach(function (e) {
      var card = el("a", "nav-card");
      card.href = "#" + e.id;
      card.setAttribute("data-target", e.id);
      card.appendChild(el("span", "nav-card__num", String(e.num)));
      card.appendChild(el("span", "nav-card__title", e.title));
      nav.appendChild(card);
    });
  }

  /* -- Die 14 Themenblöcke ---------------------------------------------- */
  function renderSections() {
    var main = document.getElementById("sections");

    D.sections.forEach(function (s) {
      var section = el("section", "topic");
      section.id = s.id;

      // Überschrift mit Nummer
      var head = el("h2", "topic__title");
      head.innerHTML =
        '<span class="topic__num">' + s.num + "</span> " + s.title;
      section.appendChild(head);

      if (s.intro) section.appendChild(el("p", "topic__intro", s.intro));

      // Entweder flache items ODER gegliederte groups
      if (s.groups) {
        s.groups.forEach(function (g) {
          var gh = el("h3", "group__heading", g.heading);
          if (g.sub) gh.innerHTML += ' <span class="group__sub">' + g.sub + "</span>";
          section.appendChild(gh);
          section.appendChild(renderItemList(g.items, g.ordered));
        });
      } else if (s.items) {
        section.appendChild(renderItemList(s.items, false));
      }

      // Saisonaler Hinweis (dezenter Kasten)
      if (s.seasonal) {
        var note = el("div", "seasonal");
        note.innerHTML =
          '<strong>Saisonaler Hinweis:</strong> ' + s.seasonal;
        section.appendChild(note);
      }

      main.appendChild(section);
    });
  }

  /* -- Empfehlungen (gestaffelt) ---------------------------------------- */
  function renderEmpfehlungen() {
    var section = document.getElementById("empfehlungen");
    section.appendChild(el("h2", "topic__title", "Empfehlungen (gestaffelt & praktisch)"));
    D.empfehlungen.forEach(function (group) {
      section.appendChild(el("h3", "group__heading", group.phase));
      section.appendChild(renderItemList(group.items.map(function (h) {
        return { html: h };
      })));
    });
  }

  /* -- Vorbehalte (dezenter Hinweis-Kasten) ----------------------------- */
  function renderVorbehalte() {
    var section = document.getElementById("vorbehalte");
    section.appendChild(el("h2", "box__title", "Vorbehalte"));
    section.appendChild(renderItemList(D.vorbehalte.map(function (h) {
      return { html: h };
    })));
  }

  /* -- Live-Suche / Filter nach Interessensgebiet ----------------------- */
  // Durchsucht Titel + sichtbaren Text jedes Themenblocks. Nicht passende
  // Blöcke (und ihre Navigationskarten) werden ausgeblendet.
  function setupSearch() {
    var input = document.getElementById("search");
    var counter = document.getElementById("search-count");
    var topics = Array.prototype.slice.call(
      document.querySelectorAll("#sections .topic")
    );

    // Suchtext je Block einmal vorberechnen (Titel + Inhalt, kleingeschrieben).
    var index = topics.map(function (t) {
      return { node: t, text: t.textContent.toLowerCase() };
    });

    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      index.forEach(function (entry) {
        var match = q === "" || entry.text.indexOf(q) !== -1;
        entry.node.style.display = match ? "" : "none";
        var card = document.querySelector('.nav-card[data-target="' + entry.node.id + '"]');
        if (card) card.style.display = match ? "" : "none";
        if (match) shown++;
      });
      counter.textContent =
        q === "" ? "" : shown + " von " + index.length + " Themen";
    }

    input.addEventListener("input", apply);
  }

  /* -- Scroll-Spy: aktive Navigationskarte hervorheben ------------------ */
  function setupScrollSpy() {
    var cards = document.querySelectorAll(".nav-card");
    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          cards.forEach(function (c) {
            c.classList.toggle(
              "is-active",
              c.getAttribute("data-target") === entry.target.id
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    document
      .querySelectorAll("#sections .topic, #empfehlungen, #vorbehalte")
      .forEach(function (s) {
        observer.observe(s);
      });
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
    renderNav();
    renderSections();
    renderEmpfehlungen();
    renderVorbehalte();
    setupSearch();
    setupScrollSpy();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
