# Toronto-Leitfaden 2026–2027 (statische Webseite)

Eine einladende, klickbare statische Webseite, die den Leitfaden
*„Aktivitäten, Communitys & berufliche Netzwerke in Toronto (September 2026 –
März 2027)"* aufbereitet: 14 thematische Abschnitte, eine Kurzfassung,
gestaffelte Empfehlungen und ein Vorbehalte-Kasten. Alle Organisationen mit
Domain sind anklickbare Links, E-Mail-Adressen sind `mailto:`-Links.

Reine Vanilla-Technik — **kein Build-Tool, kein Framework, kein npm**. GitHub
Pages liefert die Dateien direkt aus.

## Aufbau (Mehrseiten-Website)

Die Seite besteht aus einer **Startseite** mit großen Themen-Karten und je
einer **eigenen Unterseite pro Thema**. Ein Klick auf eine Karte verlässt die
Startseite und lädt z. B. `klimapolitik.html` — dort stehen Logo, einführende
Worte und der Abschnittsinhalt.

```
toronto/
├── index.html               # Startseite: Logo-Hero, Kurzfassung, große Karten
├── sections/                # die Einzelseiten liegen im Unterordner (nicht im Hauptordner)
│   ├── klimapolitik.html    #   16 schlanke Gerüste mit <body data-section="…">,
│   ├── natur.html           #   Assets über ../  (z. B. ../css/styles.css)
│   └── … (16 Stück)
├── css/
│   └── styles.css           # Styling, in nummerierte Abschnitte gegliedert
├── js/
│   ├── main.js              # rendert die STARTSEITE (Hero, Karten, Suche)
│   └── section.js           # rendert eine EINZELSEITE (liest data-section)
├── data/
│   └── sections.js          # >>> HIER die Inhalte pflegen <<<
├── img/
│   ├── logo.svg             # allgemeines Logo (Toronto-Skyline + Dackel)
│   └── sections/            # ein Logo je Abschnitt (klimapolitik.svg, …) — austauschbar
└── README.md
```

### Inhalte ändern

Den gesamten Text pflegst du in **`data/sections.js`** — die HTML- und
JS-Dateien musst du dafür nicht anfassen. Jeder Abschnitt ist ein Objekt mit
`id`, `num`, `title`, `icon` (Emoji für die Karte), `lead` (einführende Worte),
`intro`, `items` (bzw. `groups`) und optionalem `seasonal`-Hinweis; das Schema
ist oben in der Datei kommentiert.

**Einen neuen Abschnitt hinzufügen:** ein Objekt in `sections` ergänzen, eine
gleichnamige `sections/<id>.html` anlegen (am einfachsten eine vorhandene
Themenseite kopieren und nur `data-section="<id>"` anpassen) und ein Logo
`img/sections/<id>.svg` hinterlegen. Karte und Section-Logo erscheinen dann
automatisch (der Logo-Pfad wird aus der `id` abgeleitet).

### Logos tauschen

Alle Logos sind eigenständige SVG-Dateien und als schlichte Platzhalter gedacht:

- `img/logo.svg` — allgemeines Logo (Hero + Kopf jeder Unterseite)
- `img/sections/<id>.svg` — ein Logo pro Abschnitt (Karte + Section-Kopf)

Du kannst jede Datei durch ein anderes Bild ersetzen (gleichen Dateinamen
behalten, z. B. ein mit einem Bildgenerator erzeugtes Motiv) — Code-Änderungen
sind nicht nötig.

**Warum `sections.js` und nicht `sections.json`?** Browser blockieren
`fetch()` auf lokale Dateien über das `file://`-Protokoll (CORS). Läge der
Inhalt in einer `.json` und würde per `fetch` geladen, ginge das einfache
„Datei im Browser öffnen" nicht mehr. Als `<script>` eingebundenes
JS-Datenobjekt (`window.GUIDE_DATA = { … }`) funktioniert in **beiden** Fällen
— direkt geöffnet und über einen lokalen Server — und trennt die Inhalte
trotzdem sauber vom Markup.

## Lokal ansehen

Zwei Wege:

1. **Einfach `index.html` im Browser öffnen** (Doppelklick). Funktioniert hier,
   weil die Daten als `<script>` geladen werden, nicht per `fetch`.
2. **Über einen kleinen lokalen Server** (näher am echten GitHub-Pages-Verhalten):

   ```bash
   cd toronto
   python3 -m http.server
   # dann im Browser: http://localhost:8000
   ```

## Auf GitHub Pages veröffentlichen

Diese Seite liegt im Repository **`tschnake.github.io`** (deinem User-Pages-Repo)
im Unterordner `toronto/`. Sobald sie auf `main` gepusht ist, ist sie erreichbar
unter:

```
https://tschnake.github.io/toronto/
```

Da es sich um ein `username.github.io`-Repo handelt, ist GitHub Pages in der
Regel bereits aktiv. Zum Prüfen/Einschalten:

1. **Settings → Pages** öffnen.
2. Unter **Build and deployment → Source**: *Deploy from a branch*.
3. **Branch**: `main`, Ordner `/ (root)` → **Save**.

Nach dem nächsten Push erscheint die Seite unter obiger URL (der erste Build
kann ein, zwei Minuten dauern).

> Hinweis: Läge diese Seite stattdessen in einem **eigenen** Repository (z. B.
> `toronto-guide`), wäre sie nach Aktivierung von Pages unter
> `https://tschnake.github.io/toronto-guide/` erreichbar — gleiche Schritte,
> nur ein anderer Pfad.

## Inhaltliche Vorbehalte

Termine wiederkehrender Veranstaltungen sind teils prognostiziert; Details
siehe Vorbehalte-Kasten am Ende der Seite und auf den offiziellen Webseiten der
genannten Organisationen.
