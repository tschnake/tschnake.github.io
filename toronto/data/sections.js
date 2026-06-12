/* ============================================================================
   sections.js — Inhaltsdaten des Toronto-Leitfadens
   ----------------------------------------------------------------------------
   WARUM EINE .js-DATEI STATT .json?
   Browser blockieren fetch() auf lokale Dateien über file:// (CORS). Würde der
   Inhalt aus einer .json per fetch geladen, ginge das simple „Datei im Browser
   öffnen" kaputt. Als <script> geladenes Datenobjekt funktioniert immer —
   direkt geöffnet UND über einen lokalen Server. Inhalte änderst du trotzdem
   nur hier; index.html und main.js müssen nicht angefasst werden.

   STRUKTUR EINES ABSCHNITTS:
     {
       id:      "klimapolitik",        // wird zur Sprungmarke #klimapolitik
       num:     1,                      // Nummer im Original-Leitfaden
       title:   "Klimapolitik",
       intro:   "HTML oder null",       // einleitender Satz über der Liste
       items:   [ { html, sub? } ],     // Aufzählungspunkte (sub = Unterpunkte)
       groups:  [ { heading, sub?, ordered?, items } ],  // statt items, wenn der
                                        //   Abschnitt interne Überschriften hat
       seasonal:"HTML oder null"        // dezenter „Saisonaler Hinweis"-Kasten
     }

   Die Werte sind bewusst fertige HTML-Strings: So bleiben Fettung, Kursiv und
   die echten Links 1:1 erhalten. Links werden über new tab geöffnet
   (target="_blank" rel="noopener"). Inhalte stammen vollständig aus
   Toronto-Leitfaden_2026-2027.md — nichts hinzugefügt, nichts weggelassen.
   ========================================================================== */

window.GUIDE_DATA = {
  title: "Toronto-Leitfaden: Aktivitäten, Communitys & berufliche Netzwerke",
  subtitle: "Für Anna",
  period: "September 2026 – März 2027",

  /* --- Kurzfassung: hervorgehobener Kasten oben ------------------------- */
  kurzfassung: [
    'Toronto bietet ein außergewöhnlich dichtes Netz an Möglichkeiten in allen 14 Interessensgebieten — von kostenlosen EarlyON-Eltern-Kind-Zentren und deutschsprachigen Familiengruppen (German Mamas &amp; Papas) bis zu erstklassigen Forschungsinstituten für KI-Governance (Schwartz Reisman Institute, Vector Institute) und Klimapolitik (Environmental Governance Lab, U of T).',
    'Die wirkungsvollsten beruflichen Schritte sind kostenlos und sofort umsetzbar: <strong>POLCAN2</strong> abonnieren (der E-Newsletter der CPSA, der jeden Mittwoch an fast 4.000 Abonnent:innen geht und Mitgliedern wie Nicht-Mitgliedern offensteht; enthält Stellen, Ausschreibungen und Veranstaltungen), dem <strong>CPSA Women\'s Caucus</strong> beitreten und sich für die <strong>kostenlose, öffentliche SRI-Seminarreihe</strong> zu KI &amp; Gesellschaft anmelden — das bindet sie direkt in das akademische Netzwerk ein.',
    'Saisonaler Hinweis: Der Zeitraum Sept–März ist der Toronto-Winter; viele Outdoor-/Natur- und Familienangebote verlagern sich nach drinnen, aber Schlittschuhlaufen (Evergreen Brick Works), Langlauf (TRCA-Gebiete) und hundefreundliche Wintertrails (High Park, Cherry Beach) sind verfügbar. Die großen akademischen Konferenzen (CPSA) finden im Frühsommer statt; daher liegt der Netzwerk-Fokus im Winter auf Seminarreihen, Vorträgen und direkter Kontaktaufnahme.',
  ],

  /* --- Meta für die Sonderseiten Empfehlungen & Vorbehalte -------------- */
  extras: {
    empfehlungen: {
      title: "Empfehlungen",
      icon: "⭐",
      lead: "Gestaffelte, praktische Schritte für Ankommen, Aufbauen und Vertiefen (Sept 2026 – März 2027).",
    },
    vorbehalte: {
      title: "Vorbehalte",
      icon: "⚠️",
      lead: "Wichtige Einschränkungen — prognostizierte Termine und einzelne Angaben vor Nutzung prüfen.",
    },
  },

  /* --- Die 14 thematischen Abschnitte ----------------------------------- */
  sections: [
    /* 1 ------------------------------------------------------------------ */
    {
      id: "klimapolitik",
      num: 1,
      title: "Klimapolitik",
      icon: "🌍",
      lead: "Wo du in Toronto klimapolitisch andockst — von der Dachkoalition TCAN über städtische Programme bis zu indigener Klimagerechtigkeit.",
      intro:
        "Toronto hat ein tief verwurzeltes Klima-Aktivismus-Ökosystem (überwiegend auf Englisch).",
      items: [
        { name: "Toronto Climate Action Network (TCAN)", tags: ["klima", "politik", "community", "kostenlos"], intro: "Dachkoalition, die Dutzende Klimagruppen koordiniert; der Veranstaltungskalender ist die beste zentrale Anlaufstelle für Vorträge, Spaziergänge und Aktionen (manche kinderfreundlich).", wann: "Laufend; im Winter v. a. Vorträge & Treffen.", fokus: "Engagement", href: "https://tcan.ca", hrefLabel: "tcan.ca" },
        { name: "Toronto350 (TO350)", tags: ["klima", "politik", "ehrenamt", "community"], intro: "Ehrenamtlich getragene Basisgruppe: Eingaben zum Stadthaushalt, Kampagnen, regelmäßige Treffen. Aktivistin Lyn Adamson ist hier aktiv.", wann: "Regelmäßige Treffen.", fokus: "Engagement", href: "https://www.toronto350.org", hrefLabel: "toronto350.org" },
        { name: "Toronto Environmental Alliance (TEA)", tags: ["klima", "politik"], intro: "Politikorientierte Lobbyarbeit im Rathaus (Klima, Hitze, Abfall); mitgliederbasiert.", wann: "Laufend.", fokus: "Engagement", href: "https://www.torontoenvironment.org", hrefLabel: "torontoenvironment.org" },
        { name: "Climate Justice Toronto (CJTO)", tags: ["klima", "politik", "community"], intro: "Mitgliedergeführtes, klassenbewusst ausgerichtetes Klima-Organizing; jüngeres Basis-Publikum (info@climatejusticeto.com).", wann: "Laufend.", fokus: "Engagement", href: "https://climatejusticeto.com", hrefLabel: "climatejusticeto.com" },
        { name: "Neighbourhood Climate Action Champions", tags: ["klima", "politik", "ehrenamt", "kostenlos"], intro: "Städtisches Programm (~4–5 Std./Monat), schult Anwohner:innen im kommunalen Klima-Engagement; priorisiert Frauen, Neuzugewanderte und Indigene.", wann: "Jährlicher Jahrgang.", fokus: "Engagement", href: "https://toronto.ca", hrefLabel: "toronto.ca (Live Green)" },
        { name: "Live Green Toronto / Climate Action Map", tags: ["klima", "online"], intro: "Verzeichnis und Karte hunderter lokaler Klimaorganisationen.", wann: "Laufend.", fokus: "Info", href: "https://letstransformto.ca", hrefLabel: "letstransformto.ca" },
        { name: "Indigenous Climate Action", tags: ["klima", "indigen", "politik"], intro: "Von Indigenen geführte Organisation für Klimagerechtigkeit.", wann: "Laufend.", fokus: "Engagement", href: "https://indigenousclimateaction.com", hrefLabel: "indigenousclimateaction.com" },
        { name: "Environmental Governance Lab (Querverweis)", tags: ["klima", "wissenschaft"], intro: "Für den akademischen Blickwinkel siehe das Environmental Governance Lab in der Rubrik „Lehrstühle & Kontakte\".", wann: "—", fokus: "Wissenschaft", href: "lehrstuehle-kontakte.html", hrefLabel: "Zur Rubrik Lehrstühle" },
      ],
      seasonal:
        'Die großen Mobilisierungen (Demos) konzentrieren sich auf Frühjahr/Herbst; der Winter ist die Zeit für Vorträge und Treffen. Die <strong>Toronto Climate Week</strong> findet im Juni statt (außerhalb des Zeitraums).',
    },

    /* 2 ------------------------------------------------------------------ */
    {
      id: "kontakte",
      num: 2,
      title: "Leute kennenlernen / Kontakte knüpfen",
      icon: "🤝",
      lead: "Deutschsprachige und internationale Netzwerke, um in Toronto schnell sozialen Anschluss zu finden.",
      intro: null,
      items: [
        { name: "German Meetup Toronto", tags: ["deutsch", "community", "fun"], intro: "Das größte deutsche Meetup Nordamerikas (3.700+ Mitglieder); typischer Pub-Abend am ersten Donnerstag im Sin & Redemption Pub (gegenüber der AGO), plus gemeinsame Events mit Generalkonsulat, Goethe-Institut und deutschen Schulen. (Deutsch + Englisch.)", wann: "Erster Donnerstag im Monat.", fokus: "Community & Fun", href: "https://meetup.com/germans", hrefLabel: "meetup.com/germans", map: { q: "Sin and Redemption Pub, Toronto", addr: "136 McCaul St" } },
        { name: "Greater Toronto German Club", tags: ["deutsch", "community"], intro: "Deutscher Stammtisch (3. Mittwoch, Madison Pub, Annex), Samstags-Brunch, Pub-Abende in Oakville/Mississauga und „German Conversations\" für Lernende. (Deutsch.)", wann: "Mehrere feste Termine pro Monat.", fokus: "Community & Deutsch", href: "https://meetup.com/gtagerman", hrefLabel: "meetup.com/gtagerman", map: { q: "Madison Avenue Pub, Toronto", addr: "Annex" } },
        { name: "GermansinToronto / „So German!\"", tags: ["deutsch", "community", "online"], intro: "Community-Netzwerk und Blog, das mit den obigen Gruppen verknüpft ist.", wann: "Laufend.", fokus: "Community", href: "https://sogerman.ca", hrefLabel: "sogerman.ca" },
        { name: "InterNations & Meetup.com", tags: ["community", "online"], intro: "Breite Expat- und Neuzuzügler-Netzwerke auf Englisch.", wann: "Laufend.", fokus: "Community" },
        { name: "FemCity Toronto", tags: ["community", "feminismus", "fun"], intro: "Frauen-Netzwerk- und Sozialclub (monatliche Treffen, AGO-Galerie-Meetups); geleitet von Judith George.", wann: "Monatlich.", fokus: "Community & Fun", href: "https://femcity.com/toronto", hrefLabel: "femcity.com/toronto" },
        { name: "Volunteer Toronto (Querverweis)", tags: ["community", "ehrenamt"], intro: "Ehrenamt ist ebenfalls eine gute Art, Leute kennenzulernen — Anlaufstellen in der Rubrik „Sozialpolitik im Ehrenamt\".", wann: "—", fokus: "Community", href: "sozialpolitik-ehrenamt.html", hrefLabel: "Zur Rubrik Sozialpolitik" },
      ],
      seasonal: null,
    },

    /* 3 ------------------------------------------------------------------ */
    {
      id: "kindergruppen",
      num: 3,
      title: "Kindergruppen mit Eltern",
      icon: "👶",
      lead: "Kostenlose Eltern-Kind-Angebote und deutschsprachige Familiengruppen für das Neugeborene.",
      intro:
        "Familienfreundlich für das Neugeborene; die meisten sind kostenlos.",
      items: [
        { name: "EarlyON Child and Family Centres", tags: ["kinder", "baby", "kostenlos", "familie"], intro: "Kostenlose Drop-in-Programme für Bezugspersonen + Kinder von 0–6; über 750 Zentren in Ontario, in Toronto 75+ Standorte. Mit der offiziellen Karte das nächstgelegene finden.", wann: "Laufend, kostenlos, ohne Anmeldung.", fokus: "Familie & Baby", href: "https://www.ontario.ca/page/find-earlyon-child-and-family-centre", hrefLabel: "EarlyON-Karte (ontario.ca)" },
        { name: "Kimbourne Park EarlyON", tags: ["kinder", "baby", "kostenlos"], intro: "Gemütliches, beliebtes EarlyON-Zentrum in East York (nahe Danforth/Coxwell).", wann: "Laufend.", fokus: "Familie & Baby", map: { q: "200 Wolverleigh Blvd, Toronto", addr: "200 Wolverleigh Blvd" } },
        { name: "The 519 EarlyON", tags: ["kinder", "baby", "kostenlos", "community"], intro: "2SLGBTQ+-bejahendes EarlyON im Church-Wellesley Village (Di–Fr 10–13:30); plus das mobile Glitterbug-Programm.", wann: "Di–Fr 10–13:30 Uhr.", fokus: "Familie & Baby", map: { q: "The 519, Toronto", addr: "519 Church St" } },
        { name: "TMU EarlyON — Gerrard Resource Centre", tags: ["kinder", "baby", "kostenlos"], intro: "Musik- und Bewegungsprogramm für Babys & Bezugspersonen (donnerstags 9–12) sowie Back-Club.", wann: "Do 9–12 Uhr.", fokus: "Familie & Baby", href: "https://torontomu.ca/gerrard-resource-centre", hrefLabel: "torontomu.ca", map: { q: "Gerrard Resource Centre, Toronto" } },
        { name: "German Mamas & Papas in Toronto", tags: ["deutsch", "kinder", "baby", "community"], intro: "Deutschsprachige Eltern-Community (seit 2012): Kaffee- und Spielvormittage, Fitness, Malen und deutsche Kinderkurse.", wann: "Laufend.", fokus: "Familie & Deutsch", href: "https://facebook.com/GermanMamasPapasInToronto", hrefLabel: "facebook.com/GermanMamasPapas…" },
        { name: "Greater Toronto German Club — Eltern- & Kindergruppe", tags: ["deutsch", "kinder", "familie"], intro: "Deutsche Eltern- und Kindergruppe, 2. Freitag im Monat 13–14:30 Uhr (Schuljahr Sept–Juni), Oak Park Neighbourhood Centre, Oakville.", wann: "2. Freitag/Monat (Sept–Juni).", fokus: "Familie & Deutsch", map: { q: "Oak Park Neighbourhood Centre, Oakville", addr: "Oakville" } },
        { name: "Toronto Public Library — Babyprogramme", tags: ["kinder", "baby", "kostenlos"], intro: "Kostenlose Baby- und Familienprogramme (Vorlesen, Baby Rhyme Time) in Filialen stadtweit.", wann: "Laufend.", fokus: "Familie & Baby", href: "https://torontopubliclibrary.ca", hrefLabel: "torontopubliclibrary.ca" },
        { name: "Mutter-Kind-Angebote (Querverweis)", tags: ["kinder", "sport", "baby"], intro: "Kommerzielle Mutter-Kind-Communitys (Toronto Yoga Mamas, The Womb, Mighty Mom) findest du in der Rubrik „Sport & Yoga\".", wann: "—", fokus: "Familie", href: "sport-yoga.html", hrefLabel: "Zur Rubrik Sport & Yoga" },
      ],
      seasonal: null,
    },

    /* 4 ------------------------------------------------------------------ */
    {
      id: "sozialpolitik-ehrenamt",
      num: 4,
      title: "Sozialpolitik im Ehrenamt",
      icon: "🫶",
      lead: "Freiwilligenzentren, Think Tanks und Stiftungen an der Schnittstelle von Sozial- und Public Policy.",
      intro: null,
      items: [
        { name: "Volunteer Toronto", tags: ["ehrenamt", "community", "kostenlos"], intro: "Kanadas größtes Freiwilligenzentrum; durchsuchbare Angebote + Infoveranstaltungen „How to Become a Volunteer\". Beste Anlaufstelle für den Einstieg.", wann: "Laufend.", fokus: "Ehrenamt", href: "https://volunteertoronto.ca", hrefLabel: "volunteertoronto.ca" },
        { name: "West Neighbourhood House", tags: ["ehrenamt", "politik"], intro: "Gemeinwesenarbeit und Public-Policy-/Advocacy; Heimat des CUSP-Fellowships (Einkommenssicherungspolitik). E-Mail community@westnh.org, Tel. 416-532-4828.", wann: "Laufend.", fokus: "Ehrenamt & Policy", href: "https://westnh.org", hrefLabel: "westnh.org" },
        { name: "Social Planning Toronto", tags: ["politik", "ehrenamt", "wissenschaft"], intro: "Forschung, Bürgerbeteiligung und Lobbyarbeit zu Ungleichheit (Wohnen, Armut, Stadthaushalt); Mitgliedschaft, Ehrenamt und Schulungen.", wann: "Laufend.", fokus: "Engagement", href: "https://www.socialplanningtoronto.org", hrefLabel: "socialplanningtoronto.org" },
        { name: "Maytree Foundation", tags: ["politik", "karriere"], intro: "Armuts- und Menschenrechtsansatz; „Five Good Ideas\"-Webinare und DiverseCity onBoard (vermittelt unterrepräsentierte Kandidat:innen in Vorstände — ideal für eine Politikwissenschaftlerin).", wann: "Laufend.", fokus: "Engagement & Karriere", href: "https://maytree.com", hrefLabel: "maytree.com" },
        { name: "Canadian Centre for Policy Alternatives (CCPA) – Ontario", tags: ["politik", "wissenschaft"], intro: "Progressiver Think Tank; Magazin The Monitor, Bericht-Launches.", wann: "Laufend.", fokus: "Policy", href: "https://policyalternatives.ca", hrefLabel: "policyalternatives.ca" },
        { name: "Wellesley Institute", tags: ["politik", "gesundheit", "wissenschaft"], intro: "Politikforschung zu Gesundheitsgerechtigkeit und sozialen Determinanten (Großraum Toronto).", wann: "Laufend.", fokus: "Policy", href: "https://wellesleyinstitute.com", hrefLabel: "wellesleyinstitute.com" },
        { name: "Atkinson Foundation", tags: ["politik"], intro: "„Decent Work\" & wirtschaftliche Gerechtigkeit (Förderstiftung; Kampagnen/Fellowships verfolgen).", wann: "Laufend.", fokus: "Policy", href: "https://atkinsonfoundation.ca", hrefLabel: "atkinsonfoundation.ca" },
        { name: "Income Security Advocacy Centre (ISAC)", tags: ["politik", "ehrenamt"], intro: "Juristische/politische Beratungsstelle gegen Armut; Newsletter, Koalitionen (ODSP Action Coalition, Campaign 2000).", wann: "Laufend.", fokus: "Policy", href: "https://incomesecurity.org", hrefLabel: "incomesecurity.org", map: { q: "55 University Ave, Toronto", addr: "55 University Ave" } },
        { name: "City of Toronto — Volunteer with the City", tags: ["ehrenamt"], intro: "Beratungsgremien und städtische Programme.", wann: "Laufend.", fokus: "Ehrenamt", href: "https://toronto.ca", hrefLabel: "toronto.ca" },
      ],
      seasonal: null,
    },

    /* 5 ------------------------------------------------------------------ */
    {
      id: "feminismus",
      num: 5,
      title: "Feminismus",
      icon: "♀️",
      lead: "Feministische Rechtsarbeit, Stiftungen und Stadtpolitik — bis zur Kundgebung am Internationalen Frauentag.",
      intro: null,
      items: [
        { name: "LEAF — Branch Toronto", tags: ["feminismus", "politik", "ehrenamt"], intro: "Feministische Rechtsarbeit (Gleichheitsklagen nach der Charta, Gesetzesreform, Öffentlichkeitsarbeit); Ehrenamt in Unterausschüssen.", wann: "Laufend.", fokus: "Engagement", href: "https://leaf.ca/branch/leaf-toronto", hrefLabel: "leaf.ca" },
        { name: "Canadian Women's Foundation", tags: ["feminismus", "politik"], intro: "Landesweite Förderstiftung für Geschlechtergerechtigkeit; Ehrenamts-Ausschüsse, IWD-Kampagnen.", wann: "Laufend; IWD im März.", fokus: "Engagement", href: "https://canadianwomen.org", hrefLabel: "canadianwomen.org" },
        { name: "YWCA Toronto", tags: ["feminismus", "ehrenamt"], intro: "Wohnen, Beschäftigung und Advocacy für Frauen & Mädchen; Ehrenamt in Advocacy/Programmen.", wann: "Laufend.", fokus: "Engagement", href: "https://ywcatoronto.org", hrefLabel: "ywcatoronto.org" },
        { name: "WomanACT", tags: ["feminismus", "wissenschaft"], intro: "Planungs- und Politikorganisation zu geschlechtsspezifischer Gewalt & Geschlechtergerechtigkeit; Forschungsteilnahme, Advocacy.", wann: "Laufend.", fokus: "Engagement", href: "https://womanact.ca", hrefLabel: "womanact.ca" },
        { name: "Toronto Women's City Alliance (TWCA)", tags: ["feminismus", "politik"], intro: "Fördert die Stimmen von Frauen in städtischen Angelegenheiten.", wann: "Laufend.", fokus: "Engagement", href: "http://www.twca.ca", hrefLabel: "twca.ca" },
        { name: "Nellie's & Ernestine's Women's Shelter", tags: ["feminismus", "ehrenamt"], intro: "Frauenhäuser — Ehrenamt und Fundraising.", wann: "Laufend.", fokus: "Ehrenamt" },
        { name: "Native Women's Resource Centre of Toronto", tags: ["feminismus", "indigen"], intro: "Dienste für indigene Frauen.", wann: "Laufend.", fokus: "Community" },
        { name: "Toronto Feminist Collective (TOFemCo)", tags: ["feminismus", "online"], intro: "Blog- und Podcast-Kollektiv.", wann: "Laufend.", fokus: "Community" },
        { name: "International Women's Day March & Rally", tags: ["feminismus", "community", "kostenlos", "winter"], intro: "Toronto hält seit 1978 jährlich eine IWD-Kundgebung ab; 2026 am 7. März am OISE; Anfang März 2027 vergleichbar. Plus 16 Days of Activism (25. Nov.–10. Dez.) und Gedenktag 6. Dezember.", wann: "Anfang März (Kundgebung).", fokus: "Engagement & Community", href: "https://iwdtoronto.ca", hrefLabel: "iwdtoronto.ca", map: { q: "OISE, 252 Bloor St W, Toronto", addr: "OISE, 252 Bloor St W" } },
      ],
      seasonal: null,
    },

    /* 6 ------------------------------------------------------------------ */
    {
      id: "kultur-kunst",
      num: 6,
      title: "Kultur und Kunst (Sept 2026 – März 2027)",
      icon: "🎨",
      lead: "Museen, Galerien und das Goethe-Institut — Kulturprogramm für den Toronto-Winter.",
      intro: null,
      items: [
        { name: "Art Gallery of Ontario (AGO)", tags: ["kunst", "indoor", "winter", "fun", "kostenlos"], intro: "Wechselnde Ausstellungen, AGO Friday Nights und die weltweit größte öffentliche Henry-Moore-Sammlung; kostenlos für alle unter 25. Mehrere Ausstellungen im Zeitraum.", wann: "Ganzjährig; Friday Nights.", fokus: "Kultur & Fun", href: "https://ago.ca", hrefLabel: "ago.ca", map: { q: "Art Gallery of Ontario, Toronto", addr: "317 Dundas St W" } },
        { name: "Royal Ontario Museum (ROM)", tags: ["kunst", "indoor", "winter", "familie", "fun"], intro: "Großes Museum nahe U of T; jeden 3. Dienstagabend kostenlos (16–20:30), ROM After Dark (ab 19 J.). Ausstellungen u. a. Wildlife Photographer of the Year (bis 4. April 2027) und Raptors (ab 19. Dez. 2026).", wann: "Ganzjährig; 3. Di-Abend gratis.", fokus: "Kultur & Familie", href: "https://rom.on.ca", hrefLabel: "rom.on.ca", map: { q: "Royal Ontario Museum, Toronto", addr: "100 Queen's Park" } },
        { name: "Museum of Contemporary Art (MOCA)", tags: ["kunst", "indoor"], intro: "Experimentelle zeitgenössische Kunst im West End.", wann: "Ganzjährig.", fokus: "Kultur", map: { q: "Museum of Contemporary Art Toronto", addr: "West End" } },
        { name: "Aga Khan Museum", tags: ["kunst", "indoor", "familie"], intro: "Islamische Kunst & Kultur in Don Mills — ruhig und besonders.", wann: "Ganzjährig.", fokus: "Kultur", map: { q: "Aga Khan Museum, Toronto", addr: "Don Mills" } },
        { name: "Gardiner / Bata Shoe / Textile Museum", tags: ["kunst", "indoor"], intro: "Drei kleinere Museen: Gardiner (Keramik), Bata Shoe Museum (Yorkville) und Textile Museum.", wann: "Ganzjährig.", fokus: "Kultur", map: { q: "Gardiner Museum, Toronto" } },
        { name: "Goethe-Institut Toronto", tags: ["kunst", "deutsch", "kostenlos", "indoor"], intro: "Goethe Space mit Ausstellungen (CONTACT-Fotofestival), Filmen, Lesungen und Workshops; kostenlose Media Lounge/Bibliothek. Programm überwiegend Englisch; deutsches Kino oft im TIFF Bell Lightbox gefördert.", wann: "Ganzjährig.", fokus: "Kultur & Deutsch", href: "https://goethe.de/toronto", hrefLabel: "goethe.de/toronto", map: { q: "Goethe-Institut Toronto", addr: "100 University Ave" } },
        { name: "Bloor St. Culture Corridor", tags: ["kunst", "online"], intro: "Cluster von Institutionen entlang der Bloor St (u. a. Goethe-Institut, ROM, NCCT) mit gemeinsamem Veranstaltungskalender.", wann: "Ganzjährig.", fokus: "Kultur", href: "https://bloorstculturecorridor.com", hrefLabel: "bloorstculturecorridor.com" },
        { name: "McMichael Canadian Art Collection", tags: ["kunst", "natur", "ausflug", "familie"], intro: "Kanadische und indigene Kunst auf 40 ha Waldgelände in Kleinburg (~1 Std.).", wann: "Ganzjährig (kleiner Ausflug).", fokus: "Kultur & Natur", map: { q: "McMichael Canadian Art Collection, Kleinburg", addr: "Kleinburg" } },
      ],
      seasonal: null,
    },

    /* 7 ------------------------------------------------------------------ */
    {
      id: "indigene-geschichte",
      num: 7,
      title: "First Nations / Indigene Geschichte (historisch und kulturell)",
      icon: "🪶",
      lead: "Von Indigenen geführte Zentren, Touren und Gedenktage zur Geschichte vor Ort.",
      intro:
        "Respektvoll engagieren; viele dieser Einrichtungen werden von Indigenen geführt und heißen alle willkommen.",
      items: [
        { name: "Native Canadian Centre of Toronto (NCCT)", tags: ["indigen", "community", "kostenlos", "kinder"], intro: "Mitgliederbasiertes Gemeindezentrum (denkmalgeschütztes Gebäude von 1928): kulturelle Lehren, Trommeln/Gesang, Sprachkurse (Ojibwe/Mohawk/Cree), Kinderprogramme, Vollmondzeremonien u. v. m. Kostenlose Führungen, Ehrenamt möglich — alle willkommen.", wann: "Laufend.", fokus: "Kultur & Community", href: "https://ncct.on.ca", hrefLabel: "ncct.on.ca", map: { q: "Native Canadian Centre of Toronto", addr: "16 Spadina Rd" } },
        { name: "First Story Toronto", tags: ["indigen", "fun", "online"], intro: "Von Indigenen geleitetes Geschichtsprojekt (über das NCCT): die First Story App (selbstgeführte Karte indigener Geschichte) und kostenlose geführte Stadtrundgänge.", wann: "Laufend; Touren saisonal.", fokus: "Kultur & Fun" },
        { name: "Dodem Kanonhsa' Elders' Cultural Facility", tags: ["indigen", "kostenlos"], intro: "Offene Lehren mit Gast-Ältesten; Indigene und Nicht-Indigene willkommen.", wann: "Laufend.", fokus: "Kultur", map: { q: "55 St. Clair Ave E, Toronto", addr: "55 St. Clair Ave E" } },
        { name: "Woodland Cultural Centre", tags: ["indigen", "ausflug", "kunst"], intro: "Hodinǫhsǫ́:ni (Six Nations)-Kultur auf dem Gelände der ehemaligen Mohawk-Institute-Residential-School (Brantford, ~1,5 Std.); Ausstellungen und Führungen — stark zum Lernen über Versöhnung.", wann: "Ganzjährig (Ausflug).", fokus: "Kultur & Geschichte", href: "https://woodlandculturalcentre.ca", hrefLabel: "woodlandculturalcentre.ca", map: { q: "Woodland Cultural Centre, Brantford", addr: "184 Mohawk St, Brantford" } },
        { name: "Day for Truth and Reconciliation / Orange Shirt Day", tags: ["indigen", "kostenlos"], intro: "Stadtweites Programm am 30. September (zu Beginn des Zeitraums).", wann: "30. September.", fokus: "Gedenken" },
        { name: "Indigenous Legacy Gathering", tags: ["indigen", "community", "kostenlos"], intro: "Jährliche Veranstaltung von Toronto Council Fire + City of Toronto am Nathan Phillips Square (etwa Ende September).", wann: "Ende September.", fokus: "Kultur & Community", map: { q: "Nathan Phillips Square, Toronto" } },
        { name: "Indigener Community-Kalender Toronto", tags: ["indigen", "online"], intro: "Zentraler Veranstaltungskalender der indigenen Community Torontos.", wann: "Laufend.", fokus: "Info", href: "https://live.indigenousto.ca", hrefLabel: "live.indigenousto.ca" },
        { name: "imagineNATIVE Film + Media Arts Festival", tags: ["indigen", "kunst"], intro: "Hinweis: dauerhaft in den Juni verlegt (2026: 2.–7. Juni) — außerhalb Sept–März; ganzjährige Talks/Screenings können aber in den Zeitraum fallen.", wann: "Juni (außerhalb Zeitraum).", fokus: "Kultur (Hinweis)" },
      ],
      seasonal: null,
    },

    /* 8 ------------------------------------------------------------------ */
    {
      id: "literatur-schreiben",
      num: 8,
      title: "Literatur und Schreiben",
      icon: "✍️",
      lead: "Schreibworkshops, Lesereihen und Festivals — auf Englisch und Deutsch.",
      intro: null,
      items: [
        { name: "Toronto International Festival of Authors (TIFA)", tags: ["literatur", "kunst", "fun"], intro: "Kanadas am längsten laufendes Literaturfestival (seit 1974, 22 Nobelpreisträger:innen); jährlich Ende Okt.–Anf. Nov., plus ganzjähriges Programm und virtueller Buchclub. Nicht mehr am Harbourfront; „Toronto Lit Up\" beendet — aktuelles Programm prüfen.", wann: "Ende Okt.–Anfang Nov.", fokus: "Literatur & Fun", href: "https://festivalofauthors.ca", hrefLabel: "festivalofauthors.ca" },
        { name: "Firefly Creative Writing", tags: ["literatur", "community"], intro: "Schreibworkshops in Kleingruppen + Fireside Community; in Präsenz (St. Matthew's Clubhouse, Riverdale Park) und online — einladend für wiedereinsteigende Schreibende.", wann: "Laufend.", fokus: "Schreiben", href: "https://fireflycreativewriting.com", hrefLabel: "fireflycreativewriting.com", map: { q: "St. Matthew's Clubhouse, Toronto", addr: "Riverdale Park" } },
        { name: "Centauri Arts (Julie Hartley)", tags: ["literatur"], intro: "Kurse und Wochenend-Workshops für erwachsene Schreibende (Studio in Bloor West Village + virtuell).", wann: "Termine 2026 (z. B. Flash Fiction 12. Dez.).", fokus: "Schreiben", href: "https://centauriarts.com", hrefLabel: "centauriarts.com", map: { q: "Bloor West Village, Toronto" } },
        { name: "Toronto Writers Collective", tags: ["literatur", "kostenlos", "community"], intro: "Kostenlose 10-wöchige Schreibworkshops (gemeinwesenorientiert, über The 519 und Bibliotheken).", wann: "Laufend (Kurse).", fokus: "Schreiben", href: "https://wcc-cec.org", hrefLabel: "wcc-cec.org" },
        { name: "Sister Writes", tags: ["literatur", "kostenlos", "feminismus"], intro: "Kostenlose Schreibworkshops für Frauen, plus Mentoring in der Workshop-Leitung; Aufnahme im Sept./Jan./Mai.", wann: "Sept./Jan./Mai.", fokus: "Schreiben", href: "https://sisterwrites.com", hrefLabel: "sisterwrites.com" },
        { name: "Shut Up & Write! Toronto", tags: ["literatur", "kostenlos", "community"], intro: "Kostenlose strukturierte Schweige-Schreib-Treffen in Cafés stadtweit (wöchentlich).", wann: "Wöchentlich.", fokus: "Schreiben", href: "https://meetup.com/shutupandwritetoronto", hrefLabel: "meetup.com/shutupandwritetoronto" },
        { name: "Hart House Writers' Co-op (U of T)", tags: ["literatur", "kostenlos"], intro: "Kostenlose öffentliche Schreibworkshops im Studienjahr; mit der Toronto-Lyrikerin Ronna Bloom.", wann: "Während des Studienjahres.", fokus: "Schreiben", map: { q: "Hart House, Toronto", addr: "U of T" } },
        { name: "The 2026/2027 Toronto Writing Workshop", tags: ["literatur", "karriere"], intro: "Eintägiger Workshop „How to get published\" mit Pitching vor Literaturagent:innen (2026 im Sheraton Centre; Frühjahr-2027-Ausgabe wahrscheinlich).", wann: "Frühjahr (jährlich).", fokus: "Schreiben (Karriere)", href: "https://torontowritingworkshop.com", hrefLabel: "torontowritingworkshop.com" },
        { name: "Brockton Writers Series", tags: ["literatur", "fun", "kostenlos"], intro: "Vierteljährliche, vielfältige Lesungen im Glad Day Lit; „Pay What You Can\" + Livestream (Ausgaben im Jan. & März).", wann: "Vierteljährlich (Jan./März).", fokus: "Literatur & Fun", href: "https://brocktonwriters.com", hrefLabel: "brocktonwriters.com", map: { q: "Glad Day Bookshop, Toronto", addr: "32 Lisgar St" } },
        { name: "Diaspora Dialogues", tags: ["literatur", "community"], intro: "Mentoring und Veranstaltungen für aufstrebende Autor:innen.", wann: "Laufend.", fokus: "Schreiben" },
      ],
      seasonal: null,
    },

    /* 9 ------------------------------------------------------------------ */
    {
      id: "lesegruppen",
      num: 9,
      title: "Lesen und Lesegruppen",
      icon: "📚",
      lead: "Buchclubs der Stadtbibliothek und deutschsprachiges Lesen über das Goethe-Institut.",
      intro: null,
      items: [
        { name: "Toronto Public Library (TPL) – Buchclubs", tags: ["literatur", "kostenlos", "community"], intro: "Dutzende kostenloser monatlicher Buchclubs in den Filialen (Sept–Juni; SF/Fantasy, 2SLGBTQ+, Sachbuch u. a.); verleiht auch „Book Club To Go\"-Sets für eigene Gruppen.", wann: "Monatlich (Sept–Juni).", fokus: "Lesen", href: "https://torontopubliclibrary.ca", hrefLabel: "torontopubliclibrary.ca" },
        { name: "Goethe-Institut „Easy Reader Book Club\"", tags: ["deutsch", "literatur"], intro: "Monatliche deutschsprachige Buchbesprechung für Lernende, plus eine breitere Buchclub-Reihe.", wann: "Monatlich.", fokus: "Lesen & Deutsch", href: "mailto:buchklub-toronto@goethe.de", hrefLabel: "buchklub-toronto@goethe.de", map: { q: "Goethe-Institut Toronto", addr: "100 University Ave" } },
        { name: "Goethe-Institut Onleihe (eLibrary)", tags: ["deutsch", "online", "kostenlos"], intro: "Kostenlose Mitgliedschaft (auch für Nicht-Einwohner:innen), über 20.000 deutsche eBooks/Hörbücher/Filme; plus die kostenlose Media Lounge vor Ort.", wann: "Laufend.", fokus: "Lesen & Deutsch", href: "https://goethe.de/toronto", hrefLabel: "goethe.de/toronto" },
        { name: "Deutsche Gesprächskreise", tags: ["deutsch", "community"], intro: "German Meetup Toronto und Greater Toronto German Club bieten deutsche Gesprächskreise (ab A2) — informelles Lesen und Diskutieren.", wann: "Laufend.", fokus: "Lesen & Deutsch" },
        { name: "TIFA Virtual Book Club", tags: ["literatur", "online"], intro: "Virtueller Buchclub (~65 $/Saison, moderiert von der Autorin Catherine Graham).", wann: "Saisonal.", fokus: "Lesen" },
        { name: "Meetup-Buchclubs", tags: ["literatur", "community", "online"], intro: "Downtown Toronto Book Club, Classic Book Club (2.000+ Mitglieder) und Queer Book Club.", wann: "Laufend.", fokus: "Lesen" },
      ],
      seasonal: null,
    },

    /* 10 ----------------------------------------------------------------- */
    {
      id: "natur",
      num: 10,
      title: "Natur (inkl. hundefreundlich & Winter)",
      icon: "🐾",
      lead: "Hundefreundliche Parks und Wintertrails für den Dackel — plus Familien-Naturprogramme.",
      intro:
        "Relevant für den Dackel — Hinweis: kleine/kurzhaarige Hunde brauchen im Winter einen Mantel &amp; Pfotenschutz.",
      // STRUKTURIERTES FORMAT (Muster): jedes Item ist ein Objekt mit
      // name, tags[], intro (Was), wann, fokus, optional href/hrefLabel und
      // map { q (Google-Maps-Suchbegriff), addr? }. Ohne Ort: kein map-Feld.
      items: [
        {
          name: "High Park",
          tags: ["natur", "dackel", "fun", "winter", "kostenlos"],
          intro: 'Torontos größter Park mit dem 3,4 ha großen Freilauf-„Dog Hill" sowie Natur- und Asphaltwegen.',
          wann: "Ganzjährig; im Winter zauberhafte Spaziergänge.",
          fokus: "Fun & Dackel",
          map: { q: "High Park, Toronto", addr: "1873 Bloor St W" },
        },
        {
          name: "Cherry Beach (Clarke Beach)",
          tags: ["natur", "dackel", "fun"],
          intro: "Doppelt umzäunter Freilaufbereich plus Uferzone am Lake Ontario — beliebt.",
          wann: "Ganzjährig.",
          fokus: "Fun & Dackel",
          map: { q: "Cherry Beach, Toronto", addr: "Clarke Beach" },
        },
        {
          name: "Evergreen Brick Works",
          tags: ["natur", "dackel", "winter", "familie", "fun"],
          intro: "Schluchtenwege und zwei eingezäunte Freilaufbereiche; im Winter eine kostenlose Freilauf-Eislaufbahn durch die Gärten (Schlittschuhverleih ~5 $); ganzjähriger Samstags-Bauernmarkt und Familienprogramme.",
          wann: "Ganzjährig; Eisbahn ~Dez.–Anfang März (wetterabhängig).",
          fokus: "Fun, Familie & Dackel",
          href: "https://evergreen.ca", hrefLabel: "evergreen.ca",
          map: { q: "Evergreen Brick Works, Toronto", addr: "550 Bayview Ave" },
        },
        {
          name: "Don-Valley-Schluchtenwege",
          tags: ["natur", "dackel", "winter"],
          intro: "Schluchtenwege (Crothers Woods, Lower Don) mit Leinenpflicht — gut für Winterspaziergänge und Schneeschuhwandern.",
          wann: "Ganzjährig; besonders im Winter.",
          fokus: "Fun & Dackel (angeleint)",
          map: { q: "Crothers Woods, Toronto", addr: "Don Valley" },
        },
        {
          name: "Sunnybrook Park",
          tags: ["natur", "dackel", "fun"],
          intro: "Eingezäunter Freilaufbereich mit getrennten Zonen für kleine und große Hunde, plus Wege.",
          wann: "Ganzjährig.",
          fokus: "Fun & Dackel",
          map: { q: "Sunnybrook Park, Toronto" },
        },
        {
          name: "Trinity Bellwoods Park",
          tags: ["natur", "dackel", "fun", "community"],
          intro: "Der beliebte „Dog Bowl\" (nicht eingezäunt) im West Queen West — sehr sozial, am Wochenende voll.",
          wann: "Ganzjährig.",
          fokus: "Fun & Dackel",
          map: { q: "Trinity Bellwoods Park, Toronto", addr: "West Queen West" },
        },
        {
          name: "Beltline / Kay Gardner Beltline Trail",
          tags: ["natur", "dackel"],
          intro: "~9–13 km Mehrzweckweg aus feinem Kies (Leinenpflicht) — vom Mount Pleasant Cemetery über die Moore Park Ravine bis zu den Brick Works.",
          wann: "Ganzjährig.",
          fokus: "Fun & Dackel (angeleint)",
          map: { q: "Kay Gardner Beltline Trail, Toronto" },
        },
        {
          name: "Tommy Thompson Park (Leslie Spit)",
          tags: ["natur", "fun", "winter"],
          intro: "Autofreie Halbinsel — gut für Winterspaziergänge und Vogelbeobachtung.",
          wann: "Ganzjährig; ruhig im Winter.",
          fokus: "Fun",
          map: { q: "Tommy Thompson Park, Toronto", addr: "Leslie Spit" },
        },
        {
          name: "Toronto Botanical Garden",
          tags: ["natur", "familie", "winter", "fun"],
          intro: "Gartenanlage mit den Edwards Gardens — Winterspaziergänge und Familien-Naturprogramme.",
          wann: "Ganzjährig.",
          fokus: "Familie & Fun",
          href: "https://torontobotanicalgarden.ca", hrefLabel: "torontobotanicalgarden.ca",
          map: { q: "Toronto Botanical Garden, Toronto", addr: "777 Lawrence Ave E" },
        },
        {
          name: "High Park Nature Centre",
          tags: ["natur", "familie", "kinder", "winter"],
          intro: "Familien-Naturprogramme im Winter, mitten im High Park.",
          wann: "Winter (Programme).",
          fokus: "Familie",
          map: { q: "High Park Nature Centre, Toronto" },
        },
        {
          name: "Langlauf (TRCA)",
          tags: ["natur", "winter", "sport"],
          intro: "Gespurte Langlaufloipen mit Verleih (kostenpflichtig) — Flaggschiff Albion Hills (Caledon), außerdem Bond Lake, Palgrave und Nashville Conservation Reserve. Hinweis: Hunde sind auf Loipen i. d. R. nicht erlaubt (Albion Hills hat eine angeleinte Hunderunde).",
          wann: "Winter (schneeabhängig).",
          fokus: "Fun & Sport",
          href: "https://trca.ca", hrefLabel: "trca.ca",
          map: { q: "Albion Hills Conservation Park, Caledon", addr: "Caledon" },
        },
        {
          name: "Städtische Freilaufflächen (Verzeichnis)",
          tags: ["natur", "dackel", "online"],
          intro: "Verzeichnis aller offiziellen Freilaufflächen der Stadt. Saisonale Freilaufzeiten und Beschilderung stets prüfen.",
          wann: "Bei Bedarf.",
          fokus: "Dackel",
          href: "https://toronto.ca", hrefLabel: "toronto.ca",
        },
      ],
      seasonal: null,
    },

    /* 11 ----------------------------------------------------------------- */
    {
      id: "sport-yoga",
      num: 11,
      title: "Sport, Yoga und Gymnastik",
      icon: "🧘",
      lead: "Postnatale und Mutter-Kind-Angebote für Yoga, Pilates und Fitness.",
      intro: "Fokus auf postnatale/Mutter-Kind-Angebote (familienfreundlich):",
      items: [
        { name: "Toronto Yoga Mamas / kāer", tags: ["sport", "baby", "familie", "wellness"], intro: "Yoga von der Schwangerschaft bis zur Familie, Barre, Doula- & Wellness-Dienste („One-Stop-Shop\", jetzt unter der Marke kāer).", wann: "Laufend.", fokus: "Familie & Sport", href: "https://torontoyogamamas.com", hrefLabel: "torontoyogamamas.com" },
        { name: "The Womb", tags: ["sport", "baby", "familie"], intro: "Mom & Baby Yoga, Family Yoga, Mommy Bootcamp, Mom & Baby Dance/Core.", wann: "Laufend.", fokus: "Familie & Sport" },
        { name: "Mighty Mom", tags: ["sport", "baby", "familie", "online"], intro: "Pre-/Postnatal-Bootcamp & Stroller-Fitness; Präsenz + online; starkes Mütter-Community-Gefühl.", wann: "Laufend.", fokus: "Familie & Sport", href: "https://mightymom.ca", hrefLabel: "mightymom.ca" },
        { name: "Liberty Movement — „Me & Babe\"", tags: ["sport", "baby", "familie"], intro: "Postpartum-Yoga/Pilates/Kraft mit Baby (Ab Rehab, Lift + Flow, Barre); monatliches Unlimited-Abo.", wann: "Laufend.", fokus: "Familie & Sport", href: "https://libertymovement.ca", hrefLabel: "libertymovement.ca" },
        { name: "Body Co", tags: ["sport", "baby", "familie"], intro: "6-wöchige Postnatal-Kurse mit Beckenboden-Physiotherapie + zertifizierter Trainerin; Kleingruppen.", wann: "Kursweise.", fokus: "Familie & Sport", href: "https://bodycotoronto.com", hrefLabel: "bodycotoronto.com", map: { q: "3093 Dundas St W, Toronto", addr: "3093 Dundas St W" } },
        { name: "Oona (Care)", tags: ["sport", "baby", "familie"], intro: "Eltern-und-Baby-Yoga (Toronto + Newmarket), stillfreundlich, max. 8 Teilnehmende.", wann: "Laufend.", fokus: "Familie & Sport", href: "https://oonacares.com", hrefLabel: "oonacares.com" },
        { name: "Weitere Studios", tags: ["sport", "familie"], intro: "889 Yoga, Octopus Garden (College/Ossington) und Yogaspace bieten Familien-/Mutter-Kind-Optionen.", wann: "Laufend.", fokus: "Familie & Sport" },
        { name: "Städtische Angebote & ClassPass", tags: ["sport", "kostenlos", "praktisch"], intro: "Städtische Freizeitangebote von Toronto (Drop-in-Fitness, Schwimmen) und ClassPass für breiten Studio-Zugang.", wann: "Laufend.", fokus: "Sport", href: "https://toronto.ca", hrefLabel: "toronto.ca" },
      ],
      seasonal: null,
    },

    /* 12 ----------------------------------------------------------------- */
    {
      id: "konferenzen",
      num: 12,
      title: "Konferenzen Politikwissenschaft",
      icon: "🎤",
      lead: "Die wichtigsten politikwissenschaftlichen Konferenzen — und wie du dort andockst.",
      intro: null,
      items: [
        { name: "CPSA – Jahreskonferenz", tags: ["wissenschaft", "karriere", "politik"], intro: "Jährlich im Rahmen des Congress of the Humanities and Social Sciences. 2026: Ottawa (2.–4. Juni); 2027: UBC, 26.–28. Mai. Zentrale Präsenz-Netzwerkveranstaltung; Child & Dependent Care Subsidy für Vortragende (hilfreich mit Baby).", wann: "Frühsommer; im Winter planen/einreichen.", fokus: "Wissenschaft & Karriere", href: "https://cpsa-acsp.ca", hrefLabel: "cpsa-acsp.ca" },
        { name: "CPSA Women's Caucus", tags: ["wissenschaft", "feminismus", "karriere", "community"], intro: "Jährlicher Empfang + Mitgliederversammlung auf der Konferenz; ganzjährige Facebook-Gruppe; Mentoring/Networking. Jill Vickers Prize für das beste Paper zu Geschlecht und Politik.", wann: "Ganzjährig (online); Empfang auf der Konferenz.", fokus: "Wissenschaft & Community" },
        { name: "Absolutely Interdisciplinary (SRI)", tags: ["wissenschaft", "ki", "karriere"], intro: "Jährliche akademische Konferenz zu KI & Gesellschaft an der U of T (Mitte Mai). Offene Anmeldung — stark für KI-Governance + Politikwissenschaft.", wann: "Mitte Mai.", fokus: "Wissenschaft", href: "https://absolutelyinterdisciplinary.com", hrefLabel: "absolutelyinterdisciplinary.com" },
        { name: "DemocracyXChange (DXC)", tags: ["ki", "politik", "community"], intro: "Civic-Tech-/Demokratie-Gipfel (Dais/OCAD/Open Democracy Project).", wann: "Jährlich.", fokus: "Engagement", href: "https://democracyxchange.org", hrefLabel: "democracyxchange.org" },
        { name: "POLCAN2 (Querverweis)", tags: ["wissenschaft", "online", "karriere"], intro: "Calls-for-Papers und Ankündigungen über POLCAN2 verfolgen — siehe Rubrik „Lehrstühle & Kontakte\".", wann: "Laufend.", fokus: "Karriere", href: "lehrstuehle-kontakte.html", hrefLabel: "Zur Rubrik Lehrstühle" },
      ],
      seasonal: null,
    },

    /* 13 ----------------------------------------------------------------- */
    {
      id: "ki-gesellschaft",
      num: 13,
      title: "KI und gesellschaftliche/politische Implikationen",
      icon: "🤖",
      lead: "Institute, Think Tanks und Kontakte rund um KI-Governance und Gesellschaft.",
      intro: null,
      items: [
        { name: "Schwartz Reisman Institute (SRI)", tags: ["ki", "wissenschaft", "kostenlos", "online"], intro: "Führendes Institut für KI & Gesellschaft (150+ Forschende). Die SRI-Seminarreihe ist kostenlos und für alle offen (Präsenz/online, Aufzeichnungen auf YouTube). Wege als Gast: SRI Global Fellow und Scholar-in-Residence (akademische Anstellung andernorts nötig).", wann: "Seminarreihe laufend (kostenlos).", fokus: "Wissenschaft (online = babyfreundlich)", href: "https://srinstitute.utoronto.ca", hrefLabel: "srinstitute.utoronto.ca", map: { q: "Schwartz Reisman Innovation Campus, Toronto", addr: "108 College St" } },
        { name: "Vector Institute for Artificial Intelligence", tags: ["ki", "wissenschaft", "karriere"], intro: "Öffentliche Veranstaltungen u. a. Frontiers of AI (Toronto Tech Week), AI Summit & Career Fair; eher technisch/kommerziell. Früh anmelden (oft ausgebucht). Mitbegründet von Geoffrey Hinton.", wann: "Veranstaltungsweise.", fokus: "Wissenschaft & Karriere", href: "https://vectorinstitute.ai", hrefLabel: "vectorinstitute.ai", map: { q: "Schwartz Reisman Innovation Campus, Toronto", addr: "108 College St" } },
        { name: "The Dais (TMU)", tags: ["ki", "politik", "wissenschaft"], intro: "Think Tank an der Schnittstelle von Technologie, Bildung & Demokratie; u. a. Survey of Online Harms in Canada; öffentliche Veranstaltungen & Berichte.", wann: "Laufend.", fokus: "Policy", href: "https://dais.ca", hrefLabel: "dais.ca" },
        { name: "Politikwissenschaftler:innen zu KI-Governance", tags: ["ki", "wissenschaft", "karriere"], intro: "Peter Loewen (U of T; Politik, Technologie & KI). Gillian Hadfield (KI-Governance, SRI-Gründungsdirektorin — Vorbehalt: 2024 an Johns Hopkins gewechselt, aktuelle Anbindung prüfen). Shion Guha (U of T; algorithmische Entscheidungsfindung).", wann: "Kaltakquise.", fokus: "Kontakte & Wissenschaft" },
      ],
      seasonal: null,
    },

    /* 14 ----------------------------------------------------------------- */
    {
      id: "lehrstuehle-kontakte",
      num: 14,
      title: "Lehrstühle und Kontakte (Netzwerk & Karriere)",
      icon: "🎓",
      lead: "Konkrete akademische Kontakte und erste Schritte für das berufliche Netzwerk.",
      intro: null,
      groups: [
        {
          heading: "University of Toronto — Department of Political Science",
          sub: '<a href="https://politics.utoronto.ca" target="_blank" rel="noopener">politics.utoronto.ca</a>',
          items: [
            { name: "Steven Bernstein", tags: ["wissenschaft", "klima"], intro: "Distinguished Professor für Global Environmental & Sustainability Governance; Co-Direktor des EGL; Mitherausgeber von Global Environmental Politics. Top-Kontakt für Klima-Governance.", wann: "Kaltakquise.", fokus: "Kontakt (Klima)", href: "mailto:steven.bernstein@utoronto.ca", hrefLabel: "steven.bernstein@utoronto.ca" },
            { name: "Matthew Hoffmann (UTSC)", tags: ["wissenschaft", "klima"], intro: "Co-Direktor des Environmental Governance Lab; Klima-Governance und Dekarbonisierung.", wann: "Kaltakquise.", fokus: "Kontakt (Klima)" },
            { name: "Teresa Kramarz", tags: ["wissenschaft", "klima"], intro: "Co-Direktorin EGL; Direktorin von Munk One; Rechenschaftspflicht in der Umwelt-Governance.", wann: "Kaltakquise.", fokus: "Kontakt (Klima)", href: "https://teresakramarz.com", hrefLabel: "teresakramarz.com" },
            { name: "Linda A. White", tags: ["wissenschaft", "politik", "feminismus"], intro: "Vergleichende Wohlfahrtsstaaten, frühkindliche Bildung & Betreuung, Elternzeit, Geschlecht & Public Policy; Sidney Smith Hall 3061; Projekt Reimagining Care/Work (rcwproject.ca). Top-Kontakt für Sozial-/Familienpolitik.", wann: "Kaltakquise.", fokus: "Kontakt (Sozial/Familie)", href: "mailto:linda.white@utoronto.ca", hrefLabel: "linda.white@utoronto.ca" },
            { name: "Sylvia Bashevkin", tags: ["wissenschaft", "feminismus"], intro: "Professorin Emerita; Frauen & politische Führung; ehemalige CPSA-Präsidentin; Order of Canada; aktiv bei Equal Voice. Hervorragende, gut vernetzte Senior-Kontaktperson zum Thema Frauen und Politik.", wann: "Kaltakquise.", fokus: "Kontakt (Frauen & Politik)", href: "https://sylviabashevkin.com", hrefLabel: "sylviabashevkin.com" },
            { name: "Elizabeth McCallion", tags: ["wissenschaft", "feminismus"], intro: "Kanadische Regierung, Föderalismus, Geschlecht & Politik.", wann: "Kaltakquise.", fokus: "Kontakt", href: "mailto:elizabeth.mccallion@utoronto.ca", hrefLabel: "elizabeth.mccallion@utoronto.ca" },
            { name: "Melissa S. Williams", tags: ["wissenschaft", "indigen"], intro: "Politische Theorie; Repräsentation und indigene politische Innovationen.", wann: "Kaltakquise.", fokus: "Kontakt" },
            { name: "Environmental Governance Lab (EGL)", tags: ["wissenschaft", "klima"], intro: "An der Munk School; Toronto-Forschungszentrum der Earth-System-Governance-Allianz; Workshops, Working Papers, öffentliche Veranstaltungen. Starker Einstiegspunkt für Klimapolitik.", wann: "Veranstaltungen laufend.", fokus: "Institut (Klima)", href: "https://politics.utoronto.ca/research-labs", hrefLabel: "politics.utoronto.ca", map: { q: "Munk School of Global Affairs, Toronto", addr: "U of T" } },
            { name: "Munk School of Global Affairs & Public Policy", tags: ["wissenschaft", "community"], intro: "Viele öffentliche Vorträge — gut zum Netzwerken.", wann: "Veranstaltungen laufend.", fokus: "Institut", href: "https://munkschool.utoronto.ca", hrefLabel: "munkschool.utoronto.ca", map: { q: "Munk School of Global Affairs, Toronto" } },
            { name: "Women & Gender Studies Institute (WGSI)", tags: ["wissenschaft", "feminismus"], intro: "Transnationaler/postkolonialer Feminismus; kollaborative Spezialisierung, kombinierbar mit Politikwissenschaft.", wann: "Laufend.", fokus: "Institut", href: "https://wgsi.utoronto.ca", hrefLabel: "wgsi.utoronto.ca", map: { q: "Women and Gender Studies Institute, Toronto" } },
            { name: "Women in Political Science (WiPS)", tags: ["wissenschaft", "feminismus", "community"], intro: "Studentischer Club; Podiumsdiskussionen und „Coffee & Politics\".", wann: "Studienjahr.", fokus: "Community" },
          ],
        },
        {
          heading: "York University",
          items: [
            { name: "Isabella Bakker", tags: ["wissenschaft", "feminismus"], intro: "Distinguished Research Professor; feministische politische Ökonomie & soziale Reproduktion; FRSC; Trudeau Fellow. Der wichtigste kanadische Kontakt für feministische politische Ökonomie.", wann: "Kaltakquise.", fokus: "Kontakt (fem. pol. Ökonomie)", href: "https://profiles.laps.yorku.ca/profiles/icbakker", hrefLabel: "Profil (yorku.ca)" },
            { name: "Stephen Gill", tags: ["wissenschaft"], intro: "Distinguished Research Professor; kritische Internationale Politische Ökonomie.", wann: "Kaltakquise.", fokus: "Kontakt" },
            { name: "Anna M. Agathangelou", tags: ["wissenschaft", "feminismus"], intro: "Internationale Beziehungen; feministische/postkoloniale politische Ökonomie.", wann: "Kaltakquise.", fokus: "Kontakt" },
            { name: "Centre for Feminist Research (CFR)", tags: ["wissenschaft", "feminismus", "karriere"], intro: "Bietet Gastwissenschaftler:innen / Visiting Students / Associates „innerhalb Yorks und darüber hinaus\" — ein expliziter Weg als Gastwissenschaftlerin; Newsletter, Reihe Feminists in Focus. Allgemein cfr@yorku.ca.", wann: "Bewerbung laufend.", fokus: "Institut (Gastoption!)", href: "mailto:cfr@yorku.ca", hrefLabel: "cfr@yorku.ca", map: { q: "York University, Toronto", addr: "York University" } },
            { name: "City Institute (CITY)", tags: ["wissenschaft"], intro: "Direktorin Linda Peake (feministische Stadtgeographie; GenUrb-Netzwerk).", wann: "Laufend.", fokus: "Institut", href: "https://yorku.ca/city", hrefLabel: "yorku.ca/city" },
            { name: "School of Public Policy & Administration (SPPA)", tags: ["wissenschaft", "politik"], intro: "Umwelt-/Sozialpolitik, demokratische Verwaltung; MPPAL für Berufstätige.", wann: "Laufend.", fokus: "Institut", href: "https://yorku.ca/laps/sppa", hrefLabel: "yorku.ca/laps/sppa" },
            { name: "School of Gender, Sexuality & Women's Studies (GSWS)", tags: ["wissenschaft", "feminismus"], intro: "Die erste ihrer Art in Kanada; Leitung Frances Latchford.", wann: "Laufend.", fokus: "Institut" },
          ],
        },
        {
          heading: "Toronto Metropolitan University (TMU, ehemals Ryerson)",
          items: [
            { name: "Tracey Raney", tags: ["wissenschaft", "feminismus", "karriere"], intro: "Politische Repräsentation von Frauen; Editorial Board Politics & Gender; CPSA Jill Vickers Prize; Mitbegründerin „Women in the House\"; Co-Vorsitzende der CPSA 2027. Sehr gut vernetzter Knotenpunkt für Geschlecht und kanadische Politik.", wann: "Kaltakquise.", fokus: "Kontakt (Geschlecht & Politik)", href: "https://traney.org", hrefLabel: "traney.org" },
            { name: "Peggy Nash", tags: ["wissenschaft", "community"], intro: "Distinguished Visiting Professor; lehrt „Women in the House\" (ehemalige Abgeordnete — Praktiker:innen-Netzwerk).", wann: "Studienjahr.", fokus: "Kontakt" },
            { name: "The Dais (Querverweis)", tags: ["ki", "politik"], intro: "Think Tank zu Technologie/Demokratie/Bildung — Details in der Rubrik „KI & Gesellschaft\".", wann: "—", fokus: "Policy", href: "ki-gesellschaft.html", hrefLabel: "Zur Rubrik KI & Gesellschaft" },
          ],
        },
        {
          heading: "Berufliches Netzwerken — konkrete erste Schritte",
          ordered: true,
          items: [
            { html: '<strong>POLCAN2 abonnieren</strong> (kostenlos, sofort) — <a href="https://polcan2.ca/sign-up" target="_blank" rel="noopener">polcan2.ca/sign-up</a> — laut CPSA hat „POLCAN2 fast 4.000 Abonnent:innen; es wird jeden Mittwoch verschickt und steht CPSA-Mitgliedern wie Nicht-Mitgliedern offen. Es bringt Ausschreibungen, Stellenangebote und Nachrichten aus der kanadischen politikwissenschaftlichen Community." Zum Posten: <a href="mailto:contact@polcan2.ca">contact@polcan2.ca</a>. <em>Der einfachste erste Schritt.</em>' },
            { html: '<strong>CPSA beitreten</strong> (<a href="https://cpsa-acsp.ca" target="_blank" rel="noopener">cpsa-acsp.ca</a>) + der <strong>Women\'s-Caucus-Facebook-Gruppe</strong>; Teilnahme an der Konferenz planen (UBC, 26.–28. Mai 2027).' },
            { html: '<strong>Für SRI-Seminarreihe-Sitzungen anmelden</strong> (kostenlos); SRI-Mailingliste abonnieren; Wege als <strong>Scholar-in-Residence / Global Fellow</strong> prüfen.' },
            { html: '<strong>Gezielt Wissenschaftler:innen anschreiben</strong> nach Teilgebiet: Linda White (Sozial-/Familienpolitik); EGL (Bernstein/Hoffmann/Kramarz) für Klima; Isabella Bakker + <strong>CFR (<a href="mailto:cfr@yorku.ca">cfr@yorku.ca</a>)</strong> für feministische politische Ökonomie + eine mögliche <strong>Gastwissenschaftlerin-/Associate</strong>-Anbindung; Tracey Raney für Geschlecht &amp; kanadische Politik.' },
            { html: '<strong>Öffentliche Veranstaltungen besuchen</strong> an der Munk School, beim Dais, bei Vector (Frontiers of AI / Toronto Tech Week) und bei DemocracyXChange.' },
            { html: '<strong>Equal Voice</strong> (überparteilich, Frauen in der Politik) und das Projekt <strong>Reimagining Care/Work Policies</strong> — anwendungsnahe Netzwerke.' },
          ],
        },
      ],
      seasonal: null,
    },

    /* A — Stadt & Sehenswürdigkeiten ----------------------------------- */
    {
      id: "stadt",
      num: "A",
      title: "Stadt & Sehenswürdigkeiten",
      icon: "🏙️",
      lead: "Sehenswürdigkeiten, Shopping und Wellness in Toronto — viele Indoor-Tipps für den Winter.",
      intro: "Schwerpunkt Indoor sowie winter- und babytauglich; Hundefreundlichkeit ist je Eintrag angegeben.",
      groups: [
        {
          heading: "Historische Viertel & Ikonen",
          items: [
            { name: "Distillery District", tags: ["kunst", "shopping", "fun", "outdoor", "winter", "dackel"], intro: "Autofreies viktorianisches Backstein-Viertel mit Galerien, Boutiquen, Restaurants und Cafés; Kopfsteinpflaster (mit Kinderwagen etwas holprig), im Freien hundefreundlich.", wann: "Ganzjährig; Christmas Market Nov.–Dez.", fokus: "Fun & Bummeln", href: "https://distillerydistrict.com", hrefLabel: "distillerydistrict.com", map: { q: "Distillery District, Toronto", addr: "Old Town / Corktown" } },
            { name: "Sankofa Square (früher Yonge-Dundas Square)", tags: ["outdoor", "kostenlos", "fun"], intro: "Times-Square-ähnlicher Platz mit großen Videoleinwänden. Umbenennung erst seit 2024 sichtbar — viele Karten/Schilder nennen noch den alten Namen.", wann: "Ganzjährig; „Winter Glow\"-Event.", fokus: "Fun (kurzer Stopp)", href: "https://sankofasquare.ca", hrefLabel: "sankofasquare.ca", map: { q: "Sankofa Square, Toronto", addr: "Yonge/Dundas" } },
            { name: "Toronto Islands", tags: ["natur", "outdoor", "fun", "dackel"], intro: "Inselgruppe mit Stränden, Radwegen und Skyline-Blick; Hunde an der Leine.", wann: "Eher Frühling/Herbst — im Winter reduzierter Fährbetrieb, kalt und windig.", fokus: "Fun & Natur", href: "https://toronto.ca", hrefLabel: "Fähr-Infos (toronto.ca)", map: { q: "Toronto Islands, Toronto" } },
            { name: "CN Tower", tags: ["indoor", "fun", "winter"], intro: "Aussichtsplattform, Glasboden und Drehrestaurant — sehr gut bei Schnee und Kälte.", wann: "Ganzjährig (Indoor).", fokus: "Fun", href: "https://cntower.ca", hrefLabel: "cntower.ca", map: { q: "CN Tower, Toronto", addr: "Entertainment District" } },
            { name: "Casa Loma", tags: ["indoor", "kunst", "winter", "familie"], intro: "Gothic-Revival-Schloss von 1914 mit Gärten und Tunneln (Gärten outdoor).", wann: "Ganzjährig; gut im Winter.", fokus: "Fun & Kultur", href: "https://casaloma.ca", hrefLabel: "casaloma.ca", map: { q: "Casa Loma, Toronto", addr: "Midtown / Davenport" } },
            { name: "St. Lawrence Market", tags: ["indoor", "fun"], intro: "Historische Markthalle (seit 1850) mit Essständen; montags geschlossen, früh kommen.", wann: "Ganzjährig (Indoor).", fokus: "Fun & Essen", href: "https://stlawrencemarket.com", hrefLabel: "stlawrencemarket.com", map: { q: "St. Lawrence Market, Toronto", addr: "Old Town" } },
            { name: "Kensington Market", tags: ["outdoor", "shopping", "fun"], intro: "Buntes Multikulti-Viertel mit Vintage-Läden und internationaler Küche; Mix aus Straßen und kleinen Indoor-Läden.", wann: "Ganzjährig.", fokus: "Fun & Bummeln", map: { q: "Kensington Market, Toronto", addr: "nahe Chinatown" } },
            { name: "Graffiti Alley", tags: ["outdoor", "kunst", "kostenlos"], intro: "Street-Art-Gasse südlich der Queen St West — beliebt für Fotos.", wann: "Ganzjährig (Outdoor).", fokus: "Fun (kurzer Stopp)", map: { q: "Graffiti Alley, Toronto", addr: "Rush Lane" } },
            { name: "Ripley's Aquarium of Canada", tags: ["indoor", "familie", "baby", "winter", "fun"], intro: "Über 20.000 Tiere, Hai-Tunnel und Touch-Tanks — top für Winter und mit Baby/Kinderwagen; Tickets vorab online buchen.", wann: "Ganzjährig (Indoor).", fokus: "Familie & Fun", href: "https://www.ripleyaquariums.com/canada", hrefLabel: "ripleyaquariums.com", map: { q: "Ripley's Aquarium of Canada, Toronto", addr: "am CN Tower" } },
            { name: "Hockey Hall of Fame", tags: ["indoor", "fun", "winter"], intro: "Eishockey-Museum in Brookfield Place — über die PATH-Unterführung trockenen Fußes erreichbar, gut bei Kälte.", wann: "Ganzjährig (Indoor).", fokus: "Fun", href: "https://www.hhof.com", hrefLabel: "hhof.com", map: { q: "Hockey Hall of Fame, Toronto", addr: "Yonge/Front" } },
            { name: "Nathan Phillips Square & TORONTO-Schild", tags: ["outdoor", "kostenlos", "winter", "familie"], intro: "Berühmtes „TORONTO\"-Leuchtschild vor der City Hall; im Winter öffentliche Eislaufbahn.", wann: "Ganzjährig; Eisbahn im Winter.", fokus: "Fun (kostenlos)", map: { q: "Nathan Phillips Square, Toronto" } },
            { name: "Harbourfront Centre", tags: ["indoor", "outdoor", "kunst", "winter", "familie"], intro: "Kultur und Veranstaltungen an der Uferpromenade; im Winter die Natrel-Eislaufbahn am Wasser.", wann: "Ganzjährig.", fokus: "Fun & Kultur", href: "https://harbourfrontcentre.com", hrefLabel: "harbourfrontcentre.com", map: { q: "Harbourfront Centre, Toronto" } },
            { name: "Allan Gardens Conservatory", tags: ["indoor", "natur", "kostenlos", "baby", "winter", "familie"], intro: "Historisches Gewächshaus mit Tropenpflanzen — ganzjährig warm und kostenlos, ideal im Winter mit Baby. Hunde nur im Off-Leash-Park, nicht im Gewächshaus.", wann: "Ganzjährig (Indoor, warm).", fokus: "Familie & Natur", href: "https://toronto.ca", hrefLabel: "toronto.ca", map: { q: "Allan Gardens, Toronto", addr: "Garden District" } },
          ],
        },
        {
          heading: "Shopping",
          items: [
            { name: "CF Toronto Eaton Centre", tags: ["shopping", "indoor", "baby", "winter"], intro: "Großes überdachtes Einkaufszentrum mit über 230 Läden; sehr gut bei schlechtem Wetter und kinderwagentauglich.", wann: "Ganzjährig (Indoor).", fokus: "Shopping", href: "https://www.cfshops.com", hrefLabel: "cfshops.com", map: { q: "CF Toronto Eaton Centre, Toronto", addr: "Yonge/Dundas" } },
            { name: "Yorkville / Bloor Street („Mink Mile\")", tags: ["shopping", "kunst"], intro: "Luxus- und Designermarken sowie Galerien; Outdoor-Straßenshopping plus Indoor-Boutiquen.", wann: "Ganzjährig.", fokus: "Shopping (Schaufenster)", map: { q: "Bloor-Yorkville, Toronto" } },
            { name: "Queen Street West", tags: ["shopping", "fun"], intro: "Mode, Design, unabhängige Läden und Cafés — trendiges Viertel zum Bummeln.", wann: "Ganzjährig.", fokus: "Shopping & Bummeln", map: { q: "Queen Street West, Toronto" } },
          ],
        },
        {
          heading: "Wellness / Spa",
          items: [
            { name: "Body Blitz Spa", tags: ["wellness", "indoor", "baby"], intro: "Reines Frauen-Spa mit Thermalwasser-Zirkel (Salzpool, Epsom-Pool, Kaltbecken, Dampfbad, Infrarot-Sauna); Wasserzugang ab ~85 CAD (Mi–So). Der West-Standort schloss Anfang 2026 — nur noch King St East.", wann: "Ganzjährig (Auszeit ohne Baby).", fokus: "Wellness / Mütter-Auszeit", href: "https://bodyblitzspa.com", hrefLabel: "bodyblitzspa.com", map: { q: "Body Blitz Spa East, Toronto", addr: "497 King St East" } },
            { name: "Hammam Spa by Céla", tags: ["wellness", "indoor"], intro: "Türkisch/marokkanisch inspirierter Hammam mit Dampfraum und Behandlungen (ab 18 J.); zweiter Standort in Bayview Village.", wann: "Ganzjährig.", fokus: "Wellness", href: "https://www.hammamspa.ca", hrefLabel: "hammamspa.ca", map: { q: "Hammam Spa by Céla, Toronto", addr: "602 King St West" } },
            { name: "Othership", tags: ["wellness", "indoor"], intro: "Geführte Sauna- und Eisbad-Sessions (skandinavische Hot-Cold-Therapie), gemischtgeschlechtlich, Badebekleidung nötig, ab 18 J.; Standorte Adelaide und Yorkville.", wann: "Ganzjährig.", fokus: "Wellness", href: "https://www.othership.us", hrefLabel: "othership.us", map: { q: "Othership Adelaide, Toronto", addr: "425 Adelaide St W" } },
            { name: "Miraj Hammam Spa", tags: ["wellness", "indoor"], intro: "Privater, exklusiver Hammam im Shangri-La Hotel, plus Pool/Sauna/Jacuzzi; gehobenes Preissegment.", wann: "Ganzjährig.", fokus: "Wellness (Luxus)", href: "https://www.mirajhammamtoronto.com", hrefLabel: "mirajhammamtoronto.com", map: { q: "Shangri-La Toronto, 188 University Ave", addr: "188 University Ave" } },
          ],
        },
      ],
      seasonal: "Im Winter Indoor-Ziele priorisieren (Aquarium, Gewächshaus, Casa Loma, CN Tower, Markthalle). Toronto Islands eher Frühling/Herbst.",
    },

    /* B — Tagesausflüge ------------------------------------------------ */
    {
      id: "tagesausfluege",
      num: "B",
      title: "Tagesausflüge",
      icon: "🚆",
      lead: "Ausflugsziele rund um Toronto mit geprüften Fahrzeiten — winterfreundliche und Übernachtungs-Hinweise.",
      intro: "Fahrzeiten sind Richtwerte ohne Verkehr. Für entspannte Tagesausflüge nur Ziele bis ~2,5 Std.; weiter entfernte besser als Übernachtung.",
      groups: [
        {
          heading: "Gut machbar (ca. 1–2 Std.)",
          items: [
            { name: "Niagara Falls", tags: ["ausflug", "natur", "winter", "familie"], intro: "~130 km / 1,5–2 Std. (Auto QEW) oder GO Train + WEGO-Bus. Im Winter das Winter Festival of Lights (Mitte Nov.–Anf. Jan.), Kanadas größtes kostenloses Lichterfest, plus warme Indoor-Attraktionen.", wann: "Ganzjährig; Lichterfest Nov.–Jan.", fokus: "Fun & Natur", href: "https://www.niagaraparks.com", hrefLabel: "niagaraparks.com", map: { q: "Niagara Falls, Ontario" } },
            { name: "Niagara-on-the-Lake", tags: ["ausflug", "fun"], intro: "~1,5 Std. (Auto), sonst GO Train + Anschluss. Malerischer Ortskern, Weinregion, Shaw Festival (Apr.–Dez.); Icewine Festival im Januar.", wann: "Ganzjährig; Icewine-Festival Jan.", fokus: "Fun & Genuss", href: "https://www.niagaraonthelake.com", hrefLabel: "niagaraonthelake.com", map: { q: "Niagara-on-the-Lake, Ontario" } },
            { name: "Niagara-Weingüter", tags: ["ausflug", "fun"], intro: "Entlang der Niagara-Halbinsel (~1,5 Std.); viele ganzjährig, im Winter teils reduziert — vorab reservieren.", wann: "Ganzjährig (Winter eingeschränkt).", fokus: "Genuss", map: { q: "Niagara Wine Region, Ontario" } },
            { name: "Scarborough Bluffs / Bluffer's Park", tags: ["natur", "outdoor", "dackel", "kostenlos"], intro: "Innerhalb der Stadt (~30–40 Min.); eindrucksvolle Klippen am Lake Ontario, Hunde an der Leine.", wann: "Ganzjährig.", fokus: "Natur & Dackel", map: { q: "Bluffer's Park, Scarborough" } },
            { name: "Rouge National Urban Park", tags: ["natur", "outdoor", "dackel", "winter"], intro: "Scarborough (~30–45 Min.); größter städtischer Park Nordamerikas, Winterwandern möglich, Hunde an der Leine, Parken kostenpflichtig — auch per TTC/GO erreichbar.", wann: "Ganzjährig.", fokus: "Natur & Dackel", href: "https://parks.canada.ca/rouge", hrefLabel: "parks.canada.ca", map: { q: "Rouge National Urban Park, Toronto" } },
            { name: "Hamilton-Wasserfälle", tags: ["ausflug", "natur", "winter", "dackel"], intro: "~1 Std. (Auto) oder GO Train nach Hamilton; Tew's/Webster's Falls und Dundas Peak — gefrorene Fälle spektakulär, Trails ggf. vereist (rutschfeste Stiefel), Hunde an der Leine.", wann: "Ganzjährig; Winter spektakulär.", fokus: "Natur & Fun", href: "https://www.tourismhamilton.com", hrefLabel: "tourismhamilton.com", map: { q: "Webster's Falls, Hamilton" } },
            { name: "Royal Botanical Gardens", tags: ["ausflug", "natur", "indoor", "winter", "familie"], intro: "Burlington/Hamilton (~1 Std.); im Winter beheizte Gewächshäuser, Outdoor-Gärten am schönsten Frühling–Herbst.", wann: "Ganzjährig (Winter: Indoor).", fokus: "Natur & Familie", href: "https://www.rbg.ca", hrefLabel: "rbg.ca", map: { q: "Royal Botanical Gardens, Burlington" } },
            { name: "Forks of the Credit / Cheltenham Badlands", tags: ["ausflug", "natur", "outdoor"], intro: "~1 Std.; rote Schiefer-Hügel (Cheltenham Badlands). Badlands saisonal geschlossen (ca. Nov.–Mai), Parkreservierung nötig — eher Frühling/Herbst.", wann: "Frühling/Herbst (Winter geschlossen).", fokus: "Natur", href: "https://heritagetrust.on.ca", hrefLabel: "heritagetrust.on.ca", map: { q: "Cheltenham Badlands, Caledon" } },
            { name: "Albion Hills & Conservation Areas", tags: ["ausflug", "natur", "winter", "sport"], intro: "Caledon (~1 Std.); im Winter Langlauf und Schneeschuhwandern.", wann: "Winter (Langlauf).", fokus: "Sport & Natur", href: "https://trca.ca", hrefLabel: "trca.ca", map: { q: "Albion Hills Conservation Park, Caledon" } },
            { name: "Hockley Valley", tags: ["ausflug", "natur", "winter", "sport"], intro: "~1 Std. (nahe Orangeville); Wandern, Skifahren und Spa-Resort — winterfreundlich.", wann: "Ganzjährig; winterfreundlich.", fokus: "Sport & Wellness", map: { q: "Hockley Valley, Ontario" } },
          ],
        },
        {
          heading: "Etwas weiter (ca. 2–2,5 Std.)",
          items: [
            { name: "Blue Mountain Village", tags: ["ausflug", "winter", "sport", "familie"], intro: "Collingwood (~2 Std.); Fußgängerdorf und Skigebiet — sehr winterfreundlich (Ski, Après-Ski).", wann: "Winter (Hauptsaison).", fokus: "Fun & Sport", href: "https://www.bluemountainvillage.ca", hrefLabel: "bluemountainvillage.ca", map: { q: "Blue Mountain Village, Collingwood" } },
            { name: "Scandinave Spa Blue Mountain", tags: ["ausflug", "wellness", "winter"], intro: "~90 Min.; nordische Outdoor-Thermalbäder (Saunen, Heiß- und Kaltbecken) — besonders magisch im Schnee, werktags besuchen; Altersgrenze (18+) prüfen.", wann: "Winter (besonders schön).", fokus: "Wellness", href: "https://www.scandinave.com/blue-mountain", hrefLabel: "scandinave.com", map: { q: "Scandinave Spa Blue Mountain, Collingwood" } },
            { name: "Prince Edward County & Sandbanks", tags: ["ausflug", "natur"], intro: "~2–2,5 Std.; größtes Süßwasser-Dünensystem der Welt, Weingüter und Strände — im Winter stark eingeschränkt, primär Frühling–Herbst.", wann: "Frühling–Herbst (Winter reduziert).", fokus: "Natur & Genuss", href: "https://www.ontarioparks.ca", hrefLabel: "ontarioparks.ca", map: { q: "Sandbanks Provincial Park, Ontario" } },
            { name: "Stratford", tags: ["ausflug", "kunst", "fun"], intro: "~2 Std. (VIA Rail); Theaterstadt (Stratford Festival ~Apr.–Nov.), hübscher Ortskern — außerhalb der Saison ruhig, aber charmant.", wann: "Ganzjährig (Festival Apr.–Nov.).", fokus: "Kultur & Fun", href: "https://www.visitstratford.ca", hrefLabel: "visitstratford.ca", map: { q: "Stratford, Ontario" } },
            { name: "St. Jacobs / Mennoniten-Land", tags: ["ausflug", "shopping", "winter", "familie"], intro: "~1,5 Std.; St. Jacobs Farmers' Market ist Kanadas größter ganzjähriger Bauernmarkt (Do & Sa 7–15:30 Uhr), plus Mennoniten-Kultur und Outlet-Mall — gutes Winterziel (Auto empfohlen).", wann: "Ganzjährig (Markt Do/Sa).", fokus: "Fun & Shopping", href: "https://www.stjacobs.com", hrefLabel: "stjacobs.com", map: { q: "St. Jacobs Farmers' Market, Ontario" } },
            { name: "Muskoka (Gravenhurst/Bracebridge)", tags: ["ausflug", "natur", "winter"], intro: "~2–2,5 Std.; Seen und Cottage Country — als Tagesausflug machbar, aber lang (früh losfahren). Im Winter Schneeschuhwandern.", wann: "Ganzjährig (lang).", fokus: "Natur", map: { q: "Gravenhurst, Ontario" } },
            { name: "Kawartha Lakes", tags: ["ausflug", "natur"], intro: "~1,5–2 Std.; ruhige Seenlandschaft, im Winter eingeschränkter Betrieb.", wann: "Frühling–Herbst.", fokus: "Natur", map: { q: "Kawartha Lakes, Ontario" } },
          ],
        },
        {
          heading: "Zu weit für einen Tag — lieber Übernachtung ⚠️",
          items: [
            { name: "Bruce Peninsula / Tobermory / Grotto", tags: ["ausflug", "natur"], intro: "~300 km / 3,5–4 Std. einfach — für einen Tagesausflug zu weit, als Übernachtung empfehlen; der Grotto v. a. Juni–Okt. mit Parkreservierung.", wann: "Übernachtung; Grotto Jun.–Okt.", fokus: "Natur (Wochenende)", href: "https://parks.canada.ca/bruce", hrefLabel: "parks.canada.ca", map: { q: "Bruce Peninsula National Park, Tobermory" } },
            { name: "Thousand Islands", tags: ["ausflug", "natur"], intro: "~3+ Std. — zu weit für einen Tag, als Wochenende einplanen; Bootstouren v. a. im Sommer.", wann: "Übernachtung; Sommer.", fokus: "Natur (Wochenende)", map: { q: "Thousand Islands, Gananoque" } },
          ],
        },
      ],
      seasonal: "Reisezeiten sind Richtwerte ohne Verkehr (Wochenenden/Feiertage länger). Viele Naturziele und Weingüter mit Winterschließung — vor dem Ausflug die jeweilige Website prüfen.",
    },

    /* C — Alltag & Praktisches ----------------------------------------- */
    {
      id: "alltag",
      num: "C",
      title: "Alltag & Praktisches",
      icon: "🧭",
      lead: "Nahverkehr, Hunde-Alltag, Lebensmittel und Gesundheit für Neuankömmlinge.",
      intro: "Praktische Infos für den Alltag mit Baby und Dackel. Einige Punkte haben keinen festen Ort und daher keine Karte.",
      groups: [
        {
          heading: "Öffentlicher Nahverkehr",
          items: [
            { name: "TTC", tags: ["praktisch", "online"], intro: "U-Bahn, Straßenbahnen und Busse. Erwachsenentarif 3,35 CAD (2-Std.-Umstieg inkl.), Tagespass 13,50 CAD; Kinder bis 12 Jahre fahren kostenlos.", wann: "Täglich.", fokus: "Praktisch", href: "https://www.ttc.ca", hrefLabel: "ttc.ca" },
            { name: "PRESTO-Karte", tags: ["praktisch", "online"], intro: "Wiederaufladbare Smartcard (physisch 4 CAD; digital in Apple/Google Wallet kostenlos). Erhältlich an U-Bahn-Automaten, bei Shoppers Drug Mart und Loblaws; manche Bibliotheken geben begrenzt kostenlose Karten aus.", wann: "Einmalig einrichten.", fokus: "Praktisch", href: "https://www.prestocard.ca", hrefLabel: "prestocard.ca" },
            { name: "Kontaktlos zahlen", tags: ["praktisch"], intro: "Auf TTC/GO/UP einfach mit Kredit-/Debitkarte oder Handy am PRESTO-Leser zahlen (nur Erwachsenentarif). Wichtig: beim Umsteigen immer dieselbe Karte verwenden, sonst Doppelbelastung.", wann: "Sofort nutzbar.", fokus: "Praktisch" },
            { name: "GO Transit & UP Express", tags: ["praktisch", "ausflug"], intro: "GO: Regionalzüge/-busse ins Umland (Kinder bis 12 frei, One-Fare-Rabatt beim Umstieg TTC↔GO). UP Express: Union Station ↔ Flughafen Pearson in ~25 Min.", wann: "Nach Bedarf.", fokus: "Praktisch", href: "https://www.gotransit.com", hrefLabel: "gotransit.com" },
            { name: "Nützliche Apps", tags: ["praktisch", "online"], intro: "Google Maps, Transit App, Rocketman (Echtzeit-Abfahrten) und die PRESTO-App.", wann: "—", fokus: "Praktisch" },
          ],
        },
        {
          heading: "Hund im Alltag",
          items: [
            { name: "Hundeparks — Übersicht", tags: ["dackel", "natur"], intro: "Die wichtigsten Off-Leash-Parks (High Park, Cherry Beach, Sunnybrook, Trinity Bellwoods u. a.) findest du mit Karten in der Rubrik „Natur\".", wann: "—", fokus: "Dackel", href: "natur.html", hrefLabel: "Zur Rubrik Natur" },
            { name: "Hunde in der TTC", tags: ["dackel", "praktisch"], intro: "In der TTC sind Hunde nur außerhalb der Stoßzeiten erlaubt — angeleint oder in der Transportbox.", wann: "Täglich.", fokus: "Dackel & Praktisch" },
            { name: "Winter-Hundepflege", tags: ["dackel", "winter", "praktisch"], intro: "Pfotenschutz/Booties wegen Streusalz, Pfoten nach dem Spaziergang abwischen, für kleine Rassen (Dackel) ein Hundemantel; Salz nicht ablecken lassen.", wann: "Winter.", fokus: "Dackel" },
          ],
        },
        {
          heading: "Lebensmittel & europäische Produkte",
          items: [
            { name: "Supermärkte", tags: ["praktisch"], intro: "No Frills (günstig), Loblaws, Metro, Costco (Mitgliedschaft nötig). Für den Alltag meist No Frills/Metro am praktischsten.", wann: "Täglich.", fokus: "Praktisch" },
            { name: "Denninger's", tags: ["deutsch", "shopping"], intro: "Traditionsreiche deutsche Delikatessen (Wurst, Käse, Brot, Schnitzel), seit 1954. Standorte nur in Hamilton, Burlington und Oakville — gut mit einem Hamilton-Ausflug zu verbinden.", wann: "Mit einem Ausflug verbinden.", fokus: "Deutsch & Genuss", href: "https://www.denningers.com", hrefLabel: "denningers.com", map: { q: "Denninger's, Hamilton, Ontario" } },
            { name: "Food Depot International", tags: ["deutsch", "shopping"], intro: "Etobicoke; europäische Lebensmittel (deutsch, tschechisch, ungarisch), Käse und Wurst.", wann: "Nach Bedarf.", fokus: "Deutsch & Genuss", href: "https://www.fooddepottoronto.com", hrefLabel: "fooddepottoronto.com", map: { q: "Food Depot International, Etobicoke" } },
            { name: "Apotheken (Shoppers Drug Mart)", tags: ["praktisch"], intro: "Überall, oft lange Öffnungszeiten (teils 24 Std.); verkauft auch PRESTO-Karten und vieles für den Alltag.", wann: "Täglich.", fokus: "Praktisch" },
          ],
        },
        {
          heading: "Gesundheit für Neuankömmlinge",
          items: [
            { name: "Health811", tags: ["gesundheit", "online", "baby"], intro: "Kostenloser, vertraulicher 24/7-Service: Beratung durch Pflegekräfte, Symptom-Checker, Arzt-/Dienstsuche; Telefon-Service in vielen Sprachen, kein Gesundheitsausweis nötig. Tel. 811 (kein Ersatz für 911).", wann: "24/7.", fokus: "Gesundheit", href: "https://health811.ontario.ca", hrefLabel: "health811.ontario.ca" },
            { name: "OHIP / ServiceOntario", tags: ["gesundheit", "praktisch"], intro: "Staatliche Krankenversicherung — Antrag persönlich bei ServiceOntario (3 Original-Dokumente). Seit 2025 keine 3-Monats-Wartezeit mehr (nur ontario.ca als Quelle); Übergangs-Privatversicherung für die ersten Wochen sinnvoll. INFOline 1-866-532-3161.", wann: "Sofort nach Ankunft.", fokus: "Gesundheit", href: "https://www.ontario.ca/page/apply-ohip-and-get-health-card", hrefLabel: "ontario.ca" },
            { name: "Health Care Connect", tags: ["gesundheit"], intro: "Vermittelt Hausarzt/Nurse Practitioner (braucht gültige OHIP-Nummer); wegen Ärztemangel kann es dauern — übergangsweise Walk-in-Kliniken, im Notfall 911. Tel. 1-888-579-6707.", wann: "Sobald OHIP da ist.", fokus: "Gesundheit", href: "https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner", hrefLabel: "ontario.ca" },
            { name: "Toronto Public Health & HBHC", tags: ["gesundheit", "baby", "kinder", "kostenlos"], intro: "Healthy Babies Healthy Children: kostenloses, freiwilliges Hausbesuchsprogramm (Geburt–3 J.) durch Public-Health-Nurses, ausdrücklich für Neuankömmlinge und ohne OHIP nutzbar; plus kostenlose Stillberatung. Tel. 416-338-7600.", wann: "Direkt mit Baby.", fokus: "Familie & Gesundheit", href: "https://www.toronto.ca", hrefLabel: "toronto.ca" },
            { name: "SickKids (Kinderkrankenhaus)", tags: ["gesundheit", "kinder", "baby"], intro: "The Hospital for Sick Children — großes Kinderkrankenhaus in Downtown Toronto.", wann: "Im Bedarfsfall.", fokus: "Gesundheit", map: { q: "The Hospital for Sick Children, Toronto", addr: "Downtown" } },
          ],
        },
      ],
      seasonal: "⚠️ TTC-Tarifänderungen 2026 (vorab auf ttc.ca prüfen): Monatspässe enden 31.08.2026; ab 01.09.2026 automatisches „ride-free\" nach 47 bezahlten Fahrten/Monat; ab 02.03.2026 nur Taps bei ausreichendem Guthaben.",
    },
  ],

  /* --- Empfehlungen: gestaffelt & praktisch ----------------------------- */
  empfehlungen: [
    {
      phase: "Sofort (Sept–Okt 2026, Ankommen)",
      items: [
        'Das nächstgelegene <strong>EarlyON-Zentrum</strong> finden (kostenlos, täglich) und den <strong>German Mamas &amp; Papas in Toronto</strong> beitreten (Facebook) für deutschsprachige Eltern-Community.',
        '<strong>POLCAN2 abonnieren</strong> und <strong>CPSA + Women\'s Caucus beitreten</strong> — die aufwandsärmsten, wertvollsten beruflichen Schritte.',
        'Einen <strong>German-Meetup-Toronto</strong>-Pub-Abend am ersten Donnerstag besuchen, um eine soziale Basis aufzubauen.',
        'Sich für einige <strong>SRI-Seminarreihe</strong>-Vorträge anmelden (Online-Option = babyfreundlich).',
      ],
    },
    {
      phase: "Aufbauen (Nov–Dez 2026)",
      items: [
        'EINEN ehrenamtlichen Ankerpunkt wählen: über <strong>Volunteer Toronto</strong> stöbern, dann sich auf <strong>Social Planning Toronto</strong>, <strong>West Neighbourhood House (CUSP)</strong> oder <strong>Maytree DiverseCity onBoard</strong> für die sozialpolitische Dimension festlegen.',
        '2–3 Zielwissenschaftler:innen anschreiben (White, Bernstein/EGL, Bakker/CFR, Raney). Nach Seminarreihen und Status als Gastwissenschaftlerin/Associate fragen. Der Weg über <strong>York CFR Visiting Scholar/Associate</strong> ist die konkreteste Anbindungsmöglichkeit.',
        'Einem <strong>TPL- oder Goethe-Institut-Buchclub</strong> beitreten; eine postnatale Fitness-Routine etablieren (Mighty Mom / Liberty Movement / Toronto Yoga Mamas).',
      ],
    },
    {
      phase: "Vertiefen (Jan–März 2027)",
      items: [
        'Sich in einer Klimagruppe engagieren (TCAN-Kalender; TO350-Treffen) und in einer feministischen Organisation (LEAF/Canadian Women\'s Foundation), hin zur <strong>IWD-Kundgebung im März</strong>.',
        'Winterkultur genießen (ROM, kostenlose 3.-Dienstag-Abende; AGO Friday Nights) und Winternatur (Brick-Works-Eislaufbahn, High Park).',
        'Eine Paper-/Panel-Einreichung für die CPSA 2027 vorbereiten (beachte den <strong>Child &amp; Dependent Care Subsidy</strong>); Anmeldung für Absolutely Interdisciplinary im Blick behalten.',
      ],
    },
    {
      phase: "Schwellen, die den Plan ändern",
      items: [
        'Wenn sie eine formale akademische Anbindung erhält (z. B. als York-CFR-Associate oder eine SRI-Residency), die Netzwerk-Energie dorthin verlagern und Kaltakquise zurückstellen. Falls die Kinderbetreuung schwierig wird, auf Online-Seminaroptionen und EarlyON-Drop-ins (ohne Anmeldung) setzen. Falls der Dackel mehr Bewegung braucht, als die Innenstadt erlaubt, werden die TRCA-Schutzgebiete und die Freilaufflächen in Sunnybrook/High Park zu Wochenend-Ankerpunkten.',
      ],
    },
  ],

  /* --- Vorbehalte: dezenter Hinweis-Kasten unten ------------------------ */
  vorbehalte: [
    '<strong>Termine sind prognostiziert</strong> für mehrere wiederkehrende Veranstaltungen (CPSA, IWD, TIFA, SRI-Konferenz) auf Basis der Muster von 2025/2026 — näher am Zeitraum auf den offiziellen Seiten prüfen.',
    '<strong>imagineNATIVE</strong> ist dauerhaft in den <strong>Juni</strong> verlegt — nicht im Zeitraum Sept–März.',
    'Die TIFA–Toronto-Arts-Council-Partnership <strong>„Toronto Lit Up" ist beendet</strong> — Nachfolge-Programm prüfen.',
    '<strong>Gillian Hadfields</strong> Hauptanstellung ist offenbar 2024 an die <strong>Johns Hopkins University</strong> gewechselt — vor Kontaktaufnahme prüfen.',
    '<strong>Karim Bardeesy</strong> (Gründungs-Geschäftsführer des Dais) ist inzwischen Abgeordneter — die Dais-Leitung könnte sich geändert haben.',
    '<strong>E-Mail-Adressen/Titel von Fakultätsmitgliedern ändern sich</strong> — vor der Kontaktaufnahme auf den aktuellen Abteilungsseiten verifizieren.',
    'Das Kulturprogramm des Goethe-Instituts Toronto ist <strong>überwiegend auf Englisch</strong>; explizit deutschsprachige Angebote sind die Onleihe, der Easy Reader Book Club und Veranstaltungen für deutsche Schüler:innen/Lehrkräfte.',
    'Eislaufbahn der Evergreen Brick Works und TRCA-Langlauf sind <strong>wetterabhängig</strong>.',
  ],
};
