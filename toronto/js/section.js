/* ============================================================================
   section.js — eine EINZELNE Themenseite (z. B. klimapolitik.html)
   ----------------------------------------------------------------------------
   Jede Themen-HTML-Datei ist nur ein schlankes Gerüst und sagt über
   <body data-section="..."> NUR, welcher Abschnitt gezeigt werden soll. Dieser
   Renderer holt den passenden Datensatz aus window.GUIDE_DATA und baut:

     1. einen Kopf (page-head) mit Logo, Zurück-Link, Titel + einführenden Worten
     2. den Abschnittsinhalt (items/groups, Saisonhinweis) bzw. die Sonderseiten
        Empfehlungen / Vorbehalte

   So bleibt der gesamte Inhalt an EINER Stelle gepflegt (data/sections.js).
   ========================================================================== */

(function () {
  "use strict";

  var D = window.GUIDE_DATA;
  // Die Section-Seiten liegen in toronto/sections/ — Assets daher über ../
  var BASE = "../";
  var LOGO = BASE + "img/toronto_dackel.png";

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  // Liste von Items ({ html, sub? }) als <ul>/<ol>.
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

  // Kopfbereich: Marke + Zurück-Link, Section-Logo, Eyebrow, Titel, Lead.
  function renderHead(eyebrow, title, lead, logoUrl) {
    var head = document.getElementById("page-head");

    var bar = el("div", "page-head__bar");
    var home = el("a", "page-head__home");
    home.href = BASE + "index.html";
    var logo = el("img", "page-head__logo");
    logo.src = LOGO;
    logo.alt = "Toronto-Leitfaden";
    logo.width = 64; logo.height = 64;
    home.appendChild(logo);
    home.appendChild(el("span", null, "Toronto-Leitfaden"));
    bar.appendChild(home);

    var back = el("a", "page-head__back");
    back.href = BASE + "index.html";
    back.innerHTML = "← Alle Themen";
    bar.appendChild(back);
    head.appendChild(bar);

    // großes Section-Logo (links bündig mit dem Titel)
    if (logoUrl) {
      var wrap = el("div", "page-head__badgewrap");
      var badge = el("img", "page-head__badge");
      badge.src = logoUrl;
      badge.alt = "";
      badge.width = 84; badge.height = 84;
      wrap.appendChild(badge);
      head.appendChild(wrap);
    }

    if (eyebrow) head.appendChild(el("p", "page-head__eyebrow", eyebrow));
    head.appendChild(el("h1", "page-head__title", title));
    if (lead) head.appendChild(el("p", "page-head__lead", lead));
  }

  /* -- Normale Themenseite ---------------------------------------------- */
  function renderTopic(s) {
    document.title = s.title + " · Toronto-Leitfaden";
    renderHead("Abschnitt " + s.num, s.title, s.lead, BASE + "img/sections/" + s.id + ".svg");

    var root = document.getElementById("section-root");
    var article = el("article", "topic-body");

    if (s.intro) article.appendChild(el("p", "topic__intro", s.intro));

    if (s.groups) {
      s.groups.forEach(function (g) {
        var gh = el("h2", "group__heading", g.heading);
        if (g.sub) gh.innerHTML += ' <span class="group__sub">' + g.sub + "</span>";
        article.appendChild(gh);
        article.appendChild(renderItemList(g.items, g.ordered));
      });
    } else if (s.items) {
      article.appendChild(renderItemList(s.items, false));
    }

    if (s.seasonal) {
      var note = el("div", "seasonal");
      note.innerHTML = "<strong>Saisonaler Hinweis:</strong> " + s.seasonal;
      article.appendChild(note);
    }

    root.appendChild(article);
  }

  /* -- Sonderseite: Empfehlungen (gestaffelt) --------------------------- */
  function renderEmpfehlungen() {
    var meta = D.extras.empfehlungen;
    document.title = meta.title + " · Toronto-Leitfaden";
    renderHead("Übersicht", meta.title + " (gestaffelt & praktisch)", meta.lead, BASE + "img/sections/empfehlungen.svg");

    var root = document.getElementById("section-root");
    var article = el("article", "topic-body");
    D.empfehlungen.forEach(function (group) {
      article.appendChild(el("h2", "group__heading", group.phase));
      article.appendChild(renderItemList(group.items.map(function (h) {
        return { html: h };
      })));
    });
    root.appendChild(article);
  }

  /* -- Sonderseite: Vorbehalte ------------------------------------------ */
  function renderVorbehalte() {
    var meta = D.extras.vorbehalte;
    document.title = meta.title + " · Toronto-Leitfaden";
    renderHead("Hinweis", meta.title, meta.lead, BASE + "img/sections/vorbehalte.svg");

    var root = document.getElementById("section-root");
    var article = el("article", "topic-body box--caveat");
    article.appendChild(renderItemList(D.vorbehalte.map(function (h) {
      return { html: h };
    })));
    root.appendChild(article);
  }

  /* -- Routing nach data-section ---------------------------------------- */
  function init() {
    if (!D) {
      console.error("GUIDE_DATA fehlt — wurde data/sections.js geladen?");
      return;
    }
    var id = document.body.getAttribute("data-section");

    if (id === "empfehlungen") return renderEmpfehlungen();
    if (id === "vorbehalte") return renderVorbehalte();

    var s = D.sections.filter(function (x) { return x.id === id; })[0];
    if (!s) {
      document.getElementById("section-root").innerHTML =
        '<p>Abschnitt „' + id + '" nicht gefunden. <a href="' + BASE + 'index.html">Zur Übersicht</a>.</p>';
      return;
    }
    renderTopic(s);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
