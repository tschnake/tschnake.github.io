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
  subtitle:
    "Für eine deutschsprachige Politikwissenschaftlerin mit Neugeborenem und einem Dackel",
  period: "September 2026 – März 2027",

  /* --- Kurzfassung: hervorgehobener Kasten oben ------------------------- */
  kurzfassung: [
    'Toronto bietet ein außergewöhnlich dichtes Netz an Möglichkeiten in allen 14 Interessensgebieten — von kostenlosen EarlyON-Eltern-Kind-Zentren und deutschsprachigen Familiengruppen (German Mamas &amp; Papas) bis zu erstklassigen Forschungsinstituten für KI-Governance (Schwartz Reisman Institute, Vector Institute) und Klimapolitik (Environmental Governance Lab, U of T).',
    'Die wirkungsvollsten beruflichen Schritte sind kostenlos und sofort umsetzbar: <strong>POLCAN2</strong> abonnieren (der E-Newsletter der CPSA, der jeden Mittwoch an fast 4.000 Abonnent:innen geht und Mitgliedern wie Nicht-Mitgliedern offensteht; enthält Stellen, Ausschreibungen und Veranstaltungen), dem <strong>CPSA Women\'s Caucus</strong> beitreten und sich für die <strong>kostenlose, öffentliche SRI-Seminarreihe</strong> zu KI &amp; Gesellschaft anmelden — das bindet sie direkt in das akademische Netzwerk ein.',
    'Saisonaler Hinweis: Der Zeitraum Sept–März ist der Toronto-Winter; viele Outdoor-/Natur- und Familienangebote verlagern sich nach drinnen, aber Schlittschuhlaufen (Evergreen Brick Works), Langlauf (TRCA-Gebiete) und hundefreundliche Wintertrails (High Park, Cherry Beach) sind verfügbar. Die großen akademischen Konferenzen (CPSA) finden im Frühsommer statt; daher liegt der Netzwerk-Fokus im Winter auf Seminarreihen, Vorträgen und direkter Kontaktaufnahme.',
  ],

  /* --- Die 14 thematischen Abschnitte ----------------------------------- */
  sections: [
    /* 1 ------------------------------------------------------------------ */
    {
      id: "klimapolitik",
      num: 1,
      title: "Klimapolitik",
      intro:
        "Toronto hat ein tief verwurzeltes Klima-Aktivismus-Ökosystem (überwiegend auf Englisch).",
      items: [
        { html: '<strong>Toronto Climate Action Network (TCAN)</strong> — <a href="https://tcan.ca" target="_blank" rel="noopener">tcan.ca</a> — Dachkoalition, die Dutzende Klimagruppen koordiniert; der Veranstaltungskalender ist die beste zentrale Anlaufstelle für Vorträge, Spaziergänge und Aktionen. Manche Veranstaltungen sind ausdrücklich „kinderfreundlich und für alle Altersgruppen offen". Guter erster Anlaufpunkt.' },
        { html: '<strong>Toronto350 (TO350)</strong> — <a href="https://toronto350.org" target="_blank" rel="noopener">toronto350.org</a> — ehrenamtlich getragene Basisgruppe; reicht Eingaben zum Stadthaushalt ein, führt Kampagnen durch, hält regelmäßige Treffen ab. Einstieg über Mailingliste / Treffen. Die erfahrene Friedens- und Klimaaktivistin <strong>Lyn Adamson</strong> ist hier aktiv.' },
        { html: '<strong>Toronto Environmental Alliance (TEA)</strong> — <a href="https://torontoenvironment.org" target="_blank" rel="noopener">torontoenvironment.org</a> — politikorientierte Lobbyarbeit im Rathaus (Klima, Hitze, Abfall); mitgliederbasiert.' },
        { html: '<strong>Climate Justice Toronto (CJTO)</strong> — <a href="https://climatejusticeto.com" target="_blank" rel="noopener">climatejusticeto.com</a> — mitgliedergeführtes, klassenbewusst/sozialistisch ausgerichtetes Klima-Organizing; jüngeres Basis-Publikum; <a href="mailto:info@climatejusticeto.com">info@climatejusticeto.com</a>.' },
        { html: '<strong>City of Toronto — Neighbourhood Climate Action Champions</strong> — <a href="https://toronto.ca" target="_blank" rel="noopener">toronto.ca</a> (Live Green Toronto) — städtisches Programm, das Anwohner:innen (~4–5 Std./Monat) im kommunalen Klima-Engagement schult; priorisiert Frauen, Neuzugewanderte und Indigene; jährlicher Jahrgang.' },
        { html: '<strong>Live Green Toronto / Climate Action Map</strong> — <a href="https://letstransformto.ca" target="_blank" rel="noopener">letstransformto.ca</a> — Verzeichnis/Karte hunderter lokaler Klimaorganisationen.' },
        { html: '<strong>Indigenous Climate Action</strong> — <a href="https://indigenousclimateaction.com" target="_blank" rel="noopener">indigenousclimateaction.com</a> — von Indigenen geführte Organisation für Klimagerechtigkeit.' },
        { html: 'Für den akademischen Blickwinkel siehe das <strong>Environmental Governance Lab</strong> (<a href="#lehrstuehle-kontakte">Abschnitt 14</a>).' },
      ],
      seasonal:
        'Die großen Mobilisierungen (Demos) konzentrieren sich auf Frühjahr/Herbst; der Winter ist die Zeit für Vorträge und Treffen. Die <strong>Toronto Climate Week</strong> findet im Juni statt (außerhalb des Zeitraums).',
    },

    /* 2 ------------------------------------------------------------------ */
    {
      id: "kontakte",
      num: 2,
      title: "Leute kennenlernen / Kontakte knüpfen",
      intro: null,
      items: [
        { html: '<strong>German Meetup Toronto</strong> — <a href="https://meetup.com/germans" target="_blank" rel="noopener">meetup.com/germans</a> — Gründer Frank Seiferth und So German! (<a href="https://sogerman.ca" target="_blank" rel="noopener">sogerman.ca</a>) dokumentieren, dass die Gruppe „auf heute mehr als 3.700 Mitglieder gewachsen ist, mit 60 neuen Mitgliedern pro Monat — das größte deutsche Meetup in ganz Nordamerika", mit über 900 Treffen in 12 Jahren. Der typische Pub-Abend findet am ersten Donnerstag im <strong>Sin &amp; Redemption Pub, 136 McCaul St</strong> (gegenüber der AGO) statt. Veranstaltet gemeinsame Events mit dem Deutschen Generalkonsulat, dem Goethe-Institut und deutschen Schulen. (Deutsch + Englisch.)' },
        { html: '<strong>Greater Toronto German Club</strong> — <a href="https://meetup.com/gtagerman" target="_blank" rel="noopener">meetup.com/gtagerman</a> — Deutscher Stammtisch (3. Mittwoch, Madison Pub, Annex, nahe U-Bahn Spadina), Samstags-Brunch (3. Samstag), Pub-Abende in Oakville/Mississauga, „German Conversations" für Lernende. (Deutsch.)' },
        { html: '<strong>GermansinToronto / „So German!"</strong> (<a href="https://sogerman.ca" target="_blank" rel="noopener">sogerman.ca</a>) — Community-Netzwerk/Blog, das mit den oben genannten verknüpft ist.' },
        { html: '<strong>InterNations Toronto</strong> und allgemeines <strong>Meetup.com</strong> / Neuzuzügler-Treffen — breite Expat-Netzwerke (Englisch).' },
        { html: '<strong>FemCity Toronto</strong> — <a href="https://femcity.com/toronto" target="_blank" rel="noopener">femcity.com/toronto</a> — Frauen-Netzwerk-/Sozialclub (z. B. monatliche Treffen, AGO-Galerie-Meetups); geleitet von Judith George.' },
        { html: '<strong>Volunteer Toronto</strong> (<a href="#sozialpolitik-ehrenamt">Abschnitt 4</a>) ist ebenfalls eine hervorragende Möglichkeit, Leute kennenzulernen.' },
      ],
      seasonal: null,
    },

    /* 3 ------------------------------------------------------------------ */
    {
      id: "kindergruppen",
      num: 3,
      title: "Kindergruppen mit Eltern",
      intro:
        "Familienfreundlich für das Neugeborene; die meisten sind kostenlos.",
      items: [
        {
          html: '<strong>EarlyON Child and Family Centres</strong> — <a href="https://toronto.ca" target="_blank" rel="noopener">toronto.ca</a> / <a href="https://ontario.ca/page/find-earlyon-child-and-family-centre" target="_blank" rel="noopener">ontario.ca/page/find-earlyon-child-and-family-centre</a> — KOSTENLOSE Drop-in-Programme für Bezugspersonen + Kinder von 0–6 Jahren. Laut Regierung von Ontario gibt es „über 750 EarlyON-Zentren sowie weitere 450 Standorte in Bibliotheken, Schulen, Parks und Gemeindezentren"; allein Toronto hat über 75 TDSB-Standorte. Nutze die offizielle Karte, um das nächstgelegene zu finden. Bemerkenswert:',
          sub: [
            '<strong>Kimbourne Park EarlyON</strong> (200 Wolverleigh Blvd, East York, nahe Danforth/Coxwell) — gemütlich, beliebt.',
            '<strong>The 519 EarlyON</strong> (519 Church St, Church-Wellesley Village) — 2SLGBTQ+-bejahend; Di–Fr 10–13:30 Uhr; plus das mobile <strong>Glitterbug</strong>-Programm.',
            '<strong>TMU (Toronto Metropolitan University) EarlyON — Gerrard Resource Centre</strong> — <a href="https://torontomu.ca/gerrard-resource-centre" target="_blank" rel="noopener">torontomu.ca/gerrard-resource-centre</a> — Musik-/Bewegungsprogramm für Babys &amp; Bezugspersonen (donnerstags 9–12 Uhr), Back-Club usw.',
            'Von Indigenen geleitetes EarlyON über das <strong>Native Canadian Centre of Toronto</strong> (mobile Kultur &amp; Sprache für Kinder 0–6; Kontakt Lena Recollet, 416-964-9087 x1003) und Native Child &amp; Family Services.',
          ],
        },
        {
          html: '<strong>Deutschsprachige Elterngruppen:</strong>',
          sub: [
            '<strong>German Mamas &amp; Papas in Toronto</strong> — <a href="https://facebook.com/GermanMamasPapasInToronto" target="_blank" rel="noopener">facebook.com/GermanMamasPapasInToronto</a> und über <a href="https://meetup.com/germans" target="_blank" rel="noopener">meetup.com/germans</a> — gegründet 2012 von Jule Lorenz-Elliot; Kaffee- und Spielvormittage (z. B. historisch im <strong>RedFish BlueFish</strong>-Eltern-Café nahe Bloor &amp; Spadina); außerdem Fitness, Malen, deutsche Kinderkurse (Deutsch AG an der German International School). (Deutsch.)',
            '<strong>Greater Toronto German Club — Deutsche Eltern- und Kindergruppe</strong> — 2. Freitag im Monat, 13:00–14:30 Uhr während des Schuljahres (Sept–Juni), Oak Park Neighbourhood Centre, Oakville (bei gutem Wetter auch Lakeside Park). (Deutsch.)',
          ],
        },
        { html: '<strong>Toronto Public Library</strong> — Baby-/Familienprogramme (Vorlesen, Baby Rhyme Time) — kostenlos in Filialen stadtweit.' },
        { html: 'Kommerzielle Mutter-Kind-Communitys: <strong>Toronto Yoga Mamas / kāer</strong>, <strong>The Womb</strong>, <strong>Mighty Mom</strong> (siehe <a href="#sport-yoga">Abschnitt 11</a>).' },
      ],
      seasonal: null,
    },

    /* 4 ------------------------------------------------------------------ */
    {
      id: "sozialpolitik-ehrenamt",
      num: 4,
      title: "Sozialpolitik im Ehrenamt",
      intro: null,
      items: [
        { html: '<strong>Volunteer Toronto</strong> — <a href="https://volunteertoronto.ca" target="_blank" rel="noopener">volunteertoronto.ca</a> — Kanadas größtes Freiwilligenzentrum; durchsuchbare Angebote + Infoveranstaltungen „How to Become a Volunteer". Beste Anlaufstelle für den Einstieg.' },
        { html: '<strong>West Neighbourhood House</strong> — <a href="https://westnh.org" target="_blank" rel="noopener">westnh.org</a> — Gemeinwesenarbeit und Public-Policy-/Advocacy-Arbeit; Heimat des <strong>Community Undertaking Social Policy (CUSP)</strong>-Fellowships (Einkommenssicherungspolitik; frühere Fellows: John Stapleton, Richard Shillington). <a href="mailto:community@westnh.org">community@westnh.org</a> / 416-532-4828.' },
        { html: '<strong>Social Planning Toronto</strong> — <a href="https://socialplanningtoronto.org" target="_blank" rel="noopener">socialplanningtoronto.org</a> — Forschung, Bürgerbeteiligung und Lobbyarbeit zu Ungleichheit (Wohnen, Armut, Stadthaushalt); Mitgliedschaft + Ehrenamt + Schulungen zur Bürgerbeteiligung.' },
        { html: '<strong>Maytree Foundation</strong> — <a href="https://maytree.com" target="_blank" rel="noopener">maytree.com</a> — Armuts- und Menschenrechtsansatz; <strong>„Five Good Ideas"</strong>-Webinare und <strong>DiverseCity onBoard</strong> (vermittelt unterrepräsentierte/zugewanderte Kandidat:innen in Vorstände von Non-Profits/öffentlichen Gremien — hervorragend für eine Politikwissenschaftlerin geeignet).' },
        { html: '<strong>Canadian Centre for Policy Alternatives (CCPA) – Ontario</strong> — <a href="https://policyalternatives.ca" target="_blank" rel="noopener">policyalternatives.ca</a> — progressiver Think Tank; Magazin <em>The Monitor</em>, Bericht-Launches.' },
        { html: '<strong>Wellesley Institute</strong> — <a href="https://wellesleyinstitute.com" target="_blank" rel="noopener">wellesleyinstitute.com</a> — Politikforschung zu Gesundheitsgerechtigkeit/sozialen Determinanten (Großraum Toronto).' },
        { html: '<strong>Atkinson Foundation</strong> — <a href="https://atkinsonfoundation.ca" target="_blank" rel="noopener">atkinsonfoundation.ca</a> — „Decent Work" &amp; wirtschaftliche Gerechtigkeit (Förderstiftung; Kampagnen/Fellowships verfolgen).' },
        { html: '<strong>Income Security Advocacy Centre (ISAC)</strong> — <a href="https://incomesecurity.org" target="_blank" rel="noopener">incomesecurity.org</a> — juristische/politische Beratungsstelle gegen Armut (55 University Ave); Newsletter, Koalitionen (ODSP Action Coalition, Campaign 2000).' },
        { html: '<strong>City of Toronto — Volunteer with the City</strong> — <a href="https://toronto.ca" target="_blank" rel="noopener">toronto.ca</a> — Beratungsgremien und Programme.' },
      ],
      seasonal: null,
    },

    /* 5 ------------------------------------------------------------------ */
    {
      id: "feminismus",
      num: 5,
      title: "Feminismus",
      intro: null,
      items: [
        { html: '<strong>LEAF (Women\'s Legal Education &amp; Action Fund) — Branch Toronto</strong> — <a href="https://leaf.ca/branch/leaf-toronto" target="_blank" rel="noopener">leaf.ca/branch/leaf-toronto</a> — feministische Rechtsarbeit (Gleichheitsklagen nach der Charta, Gesetzesreform, Öffentlichkeitsarbeit); Ehrenamt in Unterausschüssen für Öffentlichkeitsarbeit/Veranstaltungen.' },
        { html: '<strong>Canadian Women\'s Foundation</strong> — <a href="https://canadianwomen.org" target="_blank" rel="noopener">canadianwomen.org</a> — landesweite Förderstiftung für Geschlechtergerechtigkeit; Ehrenamts-Ausschüsse, IWD-Kampagnen.' },
        { html: '<strong>YWCA Toronto</strong> — <a href="https://ywcatoronto.org" target="_blank" rel="noopener">ywcatoronto.org</a> — Wohnen/Beschäftigung/Advocacy für Frauen &amp; Mädchen; Ehrenamt in Advocacy/Programmen.' },
        { html: '<strong>WomanACT</strong> — <a href="https://womanact.ca" target="_blank" rel="noopener">womanact.ca</a> — Planungs- und Politikorganisation zu geschlechtsspezifischer Gewalt &amp; Geschlechtergerechtigkeit; Forschungsteilnahme, Advocacy.' },
        { html: '<strong>Toronto Women\'s City Alliance (TWCA)</strong> — <a href="https://twca.ca" target="_blank" rel="noopener">twca.ca</a> — fördert die Stimmen von Frauen in städtischen Angelegenheiten.' },
        { html: '<strong>Nellie\'s</strong> und <strong>Ernestine\'s Women\'s Shelter</strong> — Ehrenamt/Fundraising.' },
        { html: '<strong>Native Women\'s Resource Centre of Toronto</strong> — Dienste für indigene Frauen.' },
        { html: '<strong>Toronto Feminist Collective (TOFemCo)</strong> — Blog-/Podcast-Kollektiv.' },
        { html: '<strong>Saisonal:</strong> <strong>International Women\'s Day March &amp; Rally Toronto</strong> — <a href="https://iwdtoronto.ca" target="_blank" rel="noopener">iwdtoronto.ca</a> — laut dem IWD Toronto Committee ist „Toronto die einzige Stadt in Nordamerika, die seit 1978 jedes Jahr eine Kundgebung zum Internationalen Frauentag abgehalten hat". Die 48. jährliche Kundgebung (2026) fand am Samstag, 7. März 2026, um 11:00 Uhr am OISE, 252 Bloor St W statt; für Anfang März 2027 ist ein vergleichbarer Samstag zu erwarten — genau im Zeitraum. Außerdem die <strong>16 Days of Activism</strong> (25. Nov.–10. Dez.) und der <strong>Nationale Gedenktag am 6. Dezember</strong> (Mahnwachen zum Massaker von Montreal).' },
      ],
      seasonal: null,
    },

    /* 6 ------------------------------------------------------------------ */
    {
      id: "kultur-kunst",
      num: 6,
      title: "Kultur und Kunst (Sept 2026 – März 2027)",
      intro: null,
      items: [
        { html: '<strong>Art Gallery of Ontario (AGO)</strong> — <a href="https://ago.ca" target="_blank" rel="noopener">ago.ca</a> — 317 Dundas St W (Chinatown/Grange Park). Wechselnde Ausstellungen; <strong>AGO Friday Nights</strong>; kostenlos für alle unter 25. Mehrere Ausstellungen laufen im Zeitraum (z. B. Eröffnungen am 7. und 17. Okt. 2026; eine Eröffnung im März 2027). Weltweit größte öffentliche Henry-Moore-Sammlung.' },
        { html: '<strong>Royal Ontario Museum (ROM)</strong> — <a href="https://rom.on.ca" target="_blank" rel="noopener">rom.on.ca</a> — 100 Queen\'s Park (nahe U of T). <strong>Jeden 3. Dienstagabend kostenlos</strong> (16:00–20:30 Uhr); <strong>ROM After Dark</strong> (Abende ab 19 J.). Ausstellungen im Zeitraum: <em>Wildlife Photographer of the Year</em> (21. Nov. 2026–4. April 2027), <em>Raptors</em> (Eröffnung 19. Dez. 2026), <em>Crawford Lake: Layers in Time</em> (Anthropozän/indigene Objekte, bis 13. Sept. 2026).' },
        { html: '<strong>Museum of Contemporary Art (MOCA)</strong> — West End, experimentelle zeitgenössische Kunst.' },
        { html: '<strong>Aga Khan Museum</strong> — islamische Kunst &amp; Kultur (Don Mills); ruhig.' },
        { html: '<strong>Gardiner Museum</strong> (Keramik), <strong>Bata Shoe Museum</strong> (Yorkville), <strong>Textile Museum</strong>.' },
        { html: '<strong>Goethe-Institut Toronto</strong> — <a href="https://goethe.de/toronto" target="_blank" rel="noopener">goethe.de/toronto</a> — 100 University Ave; das <strong>Goethe Space</strong>-Studio beherbergt Ausstellungen des CONTACT-Fotofestivals, Filmvorführungen, Lesungen, Podiumsdiskussionen, Workshops. Kostenlose Media Lounge/Bibliothek. Programme überwiegend auf Englisch (Ausnahmen für deutsche Schüler:innen/Lehrkräfte). Kuratorin: Jutta Brendemühl; Direktorin: Dr. Nina Wichmann. Deutsches Kino im TIFF Bell Lightbox wird häufig vom Goethe-Institut gefördert. (Deutsch + Englisch.)' },
        { html: '<strong>Bloor St. Culture Corridor</strong> — <a href="https://bloorstculturecorridor.com" target="_blank" rel="noopener">bloorstculturecorridor.com</a> — Cluster von Institutionen (u. a. Goethe-Institut, ROM, NCCT).' },
        { html: '<strong>McMichael Canadian Art Collection</strong> (Kleinburg, ~1 Std.) — kanadische/indigene Kunst auf 40 Hektar Waldgelände.' },
      ],
      seasonal: null,
    },

    /* 7 ------------------------------------------------------------------ */
    {
      id: "indigene-geschichte",
      num: 7,
      title: "First Nations / Indigene Geschichte (historisch und kulturell)",
      intro:
        "Respektvoll engagieren; viele dieser Einrichtungen werden von Indigenen geführt und heißen alle willkommen.",
      items: [
        { html: '<strong>Native Canadian Centre of Toronto (NCCT)</strong> — <a href="https://ncct.on.ca" target="_blank" rel="noopener">ncct.on.ca</a> — 16 Spadina Rd (Annex), in einem denkmalgeschützten Gebäude von 1928. Mitgliederbasiertes Gemeindezentrum: kulturelle Lehren, Trommeln/Gesang, Frauen-/Männerkreise, Sprachkurse (Ojibwe/Mohawk/Cree), Kinderprogramme, Vollmondzeremonien, Seniorenprogramm, Okichitaw (indigene Kampfkunst), Cedar-Basket-Geschenkeladen. Kostenlose Zentrumsführungen; Ehrenamt über die Volunteer-Koordination. Alle willkommen.' },
        { html: '<strong>First Story Toronto</strong> — von Indigenen geleitetes Geschichtsprojekt (über das NCCT): die <strong>First Story Toronto App</strong> (selbstgeführte Karte indigener Geschichte) und kostenlose geführte Stadtrundgänge (z. B. Humber River; Spadina Rd/NCCT).' },
        { html: '<strong>Dodem Kanonhsa\' Elders\' Cultural Facility</strong> — 55 St. Clair Ave E — offene Lehren mit Gast-Ältesten; Indigene und Nicht-Indigene willkommen.' },
        { html: '<strong>Woodland Cultural Centre</strong> — <a href="https://woodlandculturalcentre.ca" target="_blank" rel="noopener">woodlandculturalcentre.ca</a> — 184 Mohawk St, Brantford (~1,5 Std. Fahrt; Tagesausflug) — Hodinǫhsǫ́:ni (Six Nations)-Kultur auf dem Gelände der ehemaligen Mohawk-Institute-Residential-School; Ausstellungen, Führungen; stark für das Lernen über Versöhnung/Kolonialgeschichte.' },
        { html: '<strong>National Day for Truth and Reconciliation / Orange Shirt Day</strong> (30. Sept., zu Beginn des Zeitraums) — stadtweites Programm.' },
        { html: '<strong>Indigenous Legacy Gathering</strong> — Toronto Council Fire + City of Toronto, jährlich am Nathan Phillips Square (etwa Ende Sept.).' },
        { html: '<strong>Indigener Community-Kalender Toronto</strong> — <a href="https://live.indigenousto.ca" target="_blank" rel="noopener">live.indigenousto.ca</a>.' },
        { html: '<em>Hinweis:</em> Das <strong>imagineNATIVE Film + Media Arts Festival</strong> ist dauerhaft in den <strong>Juni</strong> verlegt worden (2026: 2.–7. Juni), liegt also AUSSERHALB des Zeitraums Sept–März; ganzjährige Institute-Talks/Screenings können jedoch in den Zeitraum fallen.' },
      ],
      seasonal: null,
    },

    /* 8 ------------------------------------------------------------------ */
    {
      id: "literatur-schreiben",
      num: 8,
      title: "Literatur und Schreiben",
      intro: null,
      items: [
        { html: '<strong>Toronto International Festival of Authors (TIFA/IFOA)</strong> — <a href="https://festivalofauthors.ca" target="_blank" rel="noopener">festivalofauthors.ca</a> — laut eigener Website „Kanadas am längsten laufendes Literaturfestival", das „seit 1974 über 9.500 der besten kanadischen und internationalen Autor:innen, Künstler:innen und Denker:innen präsentiert hat", darunter 22 Nobelpreisträger:innen. Jährlich Ende Okt.–Anfang Nov. (im Zeitraum); Lesungen, Autorengespräche, Preisträger-Events. Ganzjähriges Programm und ein virtueller Buchclub. (Hinweis: nicht mehr am Harbourfront angesiedelt; die Partnerschaft „Toronto Lit Up" mit dem Toronto Arts Council ist beendet — aktuelles Programm für lokale Autor:innen prüfen.)' },
        { html: '<strong>Firefly Creative Writing</strong> — <a href="https://fireflycreativewriting.com" target="_blank" rel="noopener">fireflycreativewriting.com</a> — Workshops in Kleingruppen + Fireside Community for Writers; in Präsenz im St. Matthew\'s Clubhouse (Riverdale Park) und online. Einladend für wiedereinsteigende/blockierte Schreibende.' },
        { html: '<strong>Centauri Arts (Julie Hartley)</strong> — <a href="https://centauriarts.com" target="_blank" rel="noopener">centauriarts.com</a> — Kurse &amp; Wochenend-Workshops für erwachsene Schreibende, Studio in Bloor West Village + virtuell; konkrete Termine 2026 (z. B. Flash Fiction am 12. Dez. 2026).' },
        { html: '<strong>Toronto Writers Collective</strong> — <a href="https://wcc-cec.org" target="_blank" rel="noopener">wcc-cec.org</a> — kostenlose 10-wöchige Schreibworkshops (gemeinwesenorientiert; über The 519 und Bibliotheken).' },
        { html: '<strong>Sister Writes</strong> — <a href="https://sisterwrites.com" target="_blank" rel="noopener">sisterwrites.com</a> — kostenlose Schreibworkshops für Frauen, plus Mentoring in der Workshop-Leitung; Aufnahme im Sept./Jan./Mai.' },
        { html: '<strong>Shut Up &amp; Write! Toronto</strong> — <a href="https://meetup.com/shutupandwritetoronto" target="_blank" rel="noopener">meetup.com/shutupandwritetoronto</a> — kostenlose strukturierte Schweige-Schreib-Treffen (Cafés stadtweit; wöchentlich).' },
        { html: '<strong>Hart House Writers\' Co-op</strong> (U of T) — kostenlose öffentliche Schreibworkshops während des Studienjahres; arbeitet mit der Toronto-Lyrikerin Ronna Bloom zusammen.' },
        { html: '<strong>The 2026/2027 Toronto Writing Workshop</strong> — <a href="https://torontowritingworkshop.com" target="_blank" rel="noopener">torontowritingworkshop.com</a> — eintägiger Workshop „How to get published" mit Pitching vor Literaturagent:innen (die Ausgabe 2026 war am 11. April im Sheraton Centre — eine Ausgabe im Frühjahr 2027 ist wahrscheinlich).' },
        { html: '<strong>Brockton Writers Series</strong> — <a href="https://brocktonwriters.com" target="_blank" rel="noopener">brocktonwriters.com</a> — vierteljährliche, vielfältige Lesungen im <strong>Glad Day Lit, 32 Lisgar St</strong>, „Pay What You Can" + Livestream (Ausgaben im Jan. &amp; März im Zeitraum).' },
        { html: '<strong>Diaspora Dialogues</strong> — Mentoring + Veranstaltungen für aufstrebende Autor:innen.' },
      ],
      seasonal: null,
    },

    /* 9 ------------------------------------------------------------------ */
    {
      id: "lesegruppen",
      num: 9,
      title: "Lesen und Lesegruppen",
      intro: null,
      items: [
        { html: '<strong>Toronto Public Library (TPL) – Buchclubs</strong> — <a href="https://torontopubliclibrary.ca" target="_blank" rel="noopener">torontopubliclibrary.ca</a> / <a href="https://tpl.bibliocommons.com" target="_blank" rel="noopener">tpl.bibliocommons.com</a> — Dutzende kostenloser monatlicher Clubs in den Filialen (Sept–Juni). Beispiele: Merril Collection SF/Fantasy Club (Filiale Lillian H. Smith, 239 College St; 2. Donnerstag); Parkdale 2SLGBTQ+ Book Club; Sachbuch-/Memoiren-Clubs. Die TPL verleiht auch Mehrfach-Exemplar-Sets („Book Club To Go") für selbst organisierte Gruppen.' },
        {
          html: '<strong>Deutschsprachiges Lesen:</strong>',
          sub: [
            '<strong>Goethe-Institut Toronto „Easy Reader Book Club"</strong> — <a href="mailto:buchklub-toronto@goethe.de">buchklub-toronto@goethe.de</a> — monatliche deutschsprachige Buchbesprechung für Lernende; plus eine breitere Buchclub-Reihe.',
            '<strong>Goethe-Institut Onleihe (eLibrary)</strong> — kostenlose Mitgliedschaft (offen auch für Nicht-Einwohner:innen Torontos), über 20.000 deutsche eBooks/Hörbücher/Filme/Zeitschriften; plus die kostenlose <strong>Media Lounge</strong> vor Ort.',
            '<strong>German Meetup Toronto / Greater Toronto German Club</strong> — deutsche Gesprächskreise (ab A2) — informelles Lesen/Diskutieren.',
          ],
        },
        { html: '<strong>TIFA Virtual Book Club</strong> (~65 $/Saison, moderiert von der Autorin Catherine Graham).' },
        { html: 'Meetup-basierte Clubs: <strong>Downtown Toronto Book Club</strong>, <strong>Classic Book Club</strong> (über 2.000 Mitglieder), <strong>Queer Book Club</strong>.' },
      ],
      seasonal: null,
    },

    /* 10 ----------------------------------------------------------------- */
    {
      id: "natur",
      num: 10,
      title: "Natur (inkl. hundefreundlich & Winter)",
      intro:
        "Relevant für den Dackel — Hinweis: kleine/kurzhaarige Hunde brauchen im Winter einen Mantel &amp; Pfotenschutz.",
      items: [
        { html: '<strong>High Park</strong> (1873 Bloor St W) — Torontos größter Park; 3,4 Hektar großer Freilauf-„Dog Hill" + Natur-/Asphaltwege; zu jeder Jahreszeit zauberhaft; Winterspaziergänge.' },
        { html: '<strong>Cherry Beach (Clarke Beach)</strong> — Freilaufbereich + Uferzone am Lake Ontario; doppelt umzäunt; beliebt.' },
        { html: '<strong>Evergreen Brick Works</strong> — <a href="https://evergreen.ca" target="_blank" rel="noopener">evergreen.ca</a> — 550 Bayview Ave (Don Valley) — Schluchtenwege + zwei eingezäunte Freilaufbereiche; <strong>Eislaufbahn im Freien</strong>, die sich durch Gärten schlängelt (~Dez.–Anfang März, wetterabhängig, kostenlos; Schlittschuhverleih ~5 $); ganzjähriger Samstags-Bauernmarkt; Familien-/Kinderprogramme.' },
        { html: '<strong>Don-Valley-Schluchtenwege</strong> (Crothers Woods, Lower Don) — Leinenpflicht; gut für Winterspaziergänge/Schneeschuhwandern.' },
        { html: '<strong>Sunnybrook Park</strong> — eingezäunter Freilaufbereich mit getrennten Zonen für kleine/große Hunde; Wege.' },
        { html: '<strong>Beltline / Kay Gardner Beltline Trail</strong> — ~9–13 km Mehrzweckweg aus feinem Kies (Leinenpflicht); durch den Mount Pleasant Cemetery zur Moore Park Ravine bis zu den Brick Works.' },
        { html: '<strong>Tommy Thompson Park (Leslie Spit)</strong> — autofreie Halbinsel; Winterspaziergänge/Vogelbeobachtung.' },
        { html: '<strong>Toronto Botanical Garden</strong> — <a href="https://torontobotanicalgarden.ca" target="_blank" rel="noopener">torontobotanicalgarden.ca</a> — 777 Lawrence Ave E (mit Edwards Gardens) — Winterspaziergänge, Familien-Naturprogramme.' },
        { html: '<strong>High Park Nature Centre</strong> — Familien-Naturprogramme im Winter.' },
        { html: '<strong>Langlauf im Winter (TRCA, kostenpflichtig, mit Verleih)</strong> — <a href="https://trca.ca" target="_blank" rel="noopener">trca.ca</a> — Flaggschiff <strong>Albion Hills</strong> (Caledon); außerdem Bond Lake, Palgrave, Nashville Conservation Reserve. Hinweis: Hunde sind auf Loipen generell nicht erlaubt (Albion Hills hat eine angeleinte Hunderunde).' },
        { html: 'Liste städtischer Freilaufflächen: <a href="https://toronto.ca" target="_blank" rel="noopener">toronto.ca</a>. <em>Saisonale Freilaufzeiten und Beschilderung stets prüfen.</em>' },
      ],
      seasonal: null,
    },

    /* 11 ----------------------------------------------------------------- */
    {
      id: "sport-yoga",
      num: 11,
      title: "Sport, Yoga und Gymnastik",
      intro: "Fokus auf postnatale/Mutter-Kind-Angebote (familienfreundlich):",
      items: [
        { html: '<strong>Toronto Yoga Mamas / kāer</strong> — <a href="https://torontoyogamamas.com" target="_blank" rel="noopener">torontoyogamamas.com</a> — Yoga von der Schwangerschaft bis zur Familie, Barre, Doula- &amp; Wellness-Dienste; „One-Stop-Shop". (Jetzt unter der Marke kāer, Frauen-Wellness-Klinik.)' },
        { html: '<strong>The Womb</strong> — Mom &amp; Baby Yoga, Family Yoga, Mommy Bootcamp, Mom &amp; Baby Dance/Core.' },
        { html: '<strong>Mighty Mom</strong> — <a href="https://mightymom.ca" target="_blank" rel="noopener">mightymom.ca</a> — Pre-/Postnatal-Bootcamp &amp; Stroller-Fitness; Präsenz + online; starkes Mütter-Community-Gefühl.' },
        { html: '<strong>Liberty Movement — „Me &amp; Babe"</strong> — <a href="https://libertymovement.ca" target="_blank" rel="noopener">libertymovement.ca</a> — Postpartum-Yoga/Pilates/Kraft mit Baby; Ab Rehab, Lift + Flow, Barre; monatliches Unlimited-Abo.' },
        { html: '<strong>Body Co (3093 Dundas St W)</strong> — <a href="https://bodycotoronto.com" target="_blank" rel="noopener">bodycotoronto.com</a> — 6-wöchige Postnatal-Kurse mit Beckenboden-Physiotherapie + zertifizierter Trainerin; Kleingruppen.' },
        { html: '<strong>Oona (Care)</strong> — <a href="https://oonacares.com" target="_blank" rel="noopener">oonacares.com</a> — Eltern/Bezugsperson-und-Baby-Yoga (Toronto + Newmarket), stillfreundlich, max. 8 Teilnehmende.' },
        { html: '<strong>889 Yoga</strong>, <strong>Octopus Garden</strong> (College/Ossington), <strong>Yogaspace</strong> — Familien-/Mutter-Kind-Optionen.' },
        { html: 'Allgemein: städtische Freizeitangebote von Toronto (Drop-in-Fitness, Schwimmen) und ClassPass für breiten Studio-Zugang.' },
      ],
      seasonal: null,
    },

    /* 12 ----------------------------------------------------------------- */
    {
      id: "konferenzen",
      num: 12,
      title: "Konferenzen Politikwissenschaft",
      intro: null,
      items: [
        { html: '<strong>Canadian Political Science Association (CPSA) – Jahreskonferenz</strong> — <a href="https://cpsa-acsp.ca" target="_blank" rel="noopener">cpsa-acsp.ca</a> — findet jedes Frühjahr im Rahmen des <strong>Congress of the Humanities and Social Sciences</strong> statt. <strong>2026: Ottawa (2.–4. Juni)</strong>; <strong>2027: University of British Columbia, 26.–28. Mai</strong> (Co-Vorsitzende: Tracey Raney (TMU) und Edward Koning (Guelph)). Die zentrale Präsenz-Netzwerkveranstaltung (außerhalb des Zeitraums Sept–März, aber im Winter planen/einreichen — beachte den <strong>Child and Dependent Care Subsidy</strong> für Vortragende, hilfreich mit einem Baby). Fachsektionen decken u. a. Geschlecht &amp; Politik, Public Policy, Umweltpolitik ab.' },
        { html: '<strong>CPSA Women\'s Caucus</strong> — jährlicher Empfang + Mitgliederversammlung auf der Konferenz; ganzjährige Facebook-Gruppe; Mentoring/Networking. Der <strong>Jill Vickers Prize</strong> würdigt das beste Paper zu Geschlecht und Politik.' },
        { html: '<strong>Absolutely Interdisciplinary</strong> (Schwartz Reisman Institute) — <a href="https://absolutelyinterdisciplinary.com" target="_blank" rel="noopener">absolutelyinterdisciplinary.com</a> — jährliche akademische Konferenz zu KI &amp; Gesellschaft an der U of T (Mitte Mai; 2026 war es der 13. Mai). Offene Anmeldung — stark für KI-Governance + Politikwissenschaft.' },
        { html: '<strong>DemocracyXChange (DXC)</strong> — <a href="https://democracyxchange.org" target="_blank" rel="noopener">democracyxchange.org</a> — Civic-Tech-/Demokratie-Gipfel (Dais/OCAD/Open Democracy Project).' },
        { html: 'Für Ankündigungen/Calls-for-Papers im Zeitraum <strong>POLCAN2</strong> verfolgen (<a href="#lehrstuehle-kontakte">Abschnitt 14</a>). Generische kommerzielle „International Conference"-Listen (conferenceindex.org usw.) gibt es für Toronto, sind aber wenig wertvoll.' },
      ],
      seasonal: null,
    },

    /* 13 ----------------------------------------------------------------- */
    {
      id: "ki-gesellschaft",
      num: 13,
      title: "KI und gesellschaftliche/politische Implikationen",
      intro: null,
      items: [
        { html: '<strong>Schwartz Reisman Institute for Technology and Society (SRI)</strong>, U of T — <a href="https://srinstitute.utoronto.ca" target="_blank" rel="noopener">srinstitute.utoronto.ca</a> — führendes Institut für KI &amp; Gesellschaft (108 College St / Schwartz Reisman Innovation Campus). Laut SRI-eigener Research-Seite „umfasst unsere Community über 150 Forschende der University of Toronto aus 34 verschiedenen Fakultäten und Abteilungen und 20 einzigartigen akademischen Disziplinen". Die <strong>SRI-Seminarreihe</strong> ist <strong>kostenlos und für alle offen</strong> (in Präsenz und/oder online — Anmeldung pro Seminar; Aufzeichnungen auf YouTube). Direktor: David Lie; Stellv. Direktorin: Sheila McIlraith. Jüngste Vortragende zu KI &amp; Demokratie/Governance: Beth Simone Noveck, Kate Larson, Joel Z. Leibo, Bruce Schneier. Außerdem: <strong>Privacy Discussion Group</strong>, <strong>Toronto AI Safety</strong>-Diskussionen und die jährliche <strong>Absolutely Interdisciplinary</strong>-Konferenz. Wege als Gast: <strong>SRI Global Fellow</strong> und <strong>Scholar-in-Residence</strong> (erfordern eine akademische Anstellung andernorts).' },
        { html: '<strong>Vector Institute for Artificial Intelligence</strong> — <a href="https://vectorinstitute.ai" target="_blank" rel="noopener">vectorinstitute.ai</a> — am Schwartz Reisman Innovation Campus; öffentliche Veranstaltungen u. a. <strong>Frontiers of AI</strong> (Toronto Tech Week), AI Summit &amp; Career Fair. Eher technisch/kommerziell als governance-orientiert; früh anmelden (Veranstaltungen oft ausgebucht). Mitbegründet von Geoffrey Hinton; Teil der Pan-Canadian AI Strategy mit Mila &amp; Amii.' },
        { html: '<strong>The Dais (TMU)</strong> — <a href="https://dais.ca" target="_blank" rel="noopener">dais.ca</a> — Think Tank für Public Policy/Leadership an der Schnittstelle von Technologie, Bildung &amp; Demokratie; Veröffentlichungen u. a. der <strong>Survey of Online Harms in Canada</strong>, Arbeiten zu KI-Rechenleistung &amp; Desinformation; öffentliche Veranstaltungen &amp; Berichte.' },
        { html: '<strong>Politikwissenschaftler:innen zu KI-Governance:</strong> <strong>Peter Loewen</strong> (U of T; Politik, Technologie &amp; KI — echter politikwissenschaftlicher Kontakt). <strong>Gillian Hadfield</strong> ist eine führende Figur der KI-Governance und SRI-Gründungsdirektorin — <em>Vorbehalt:</em> Sie wechselte 2024 an die <strong>Johns Hopkins University</strong>, daher ihre aktuelle Toronto-Anbindung prüfen. <strong>Shion Guha</strong> (U of T Faculty of Information; algorithmische Entscheidungsfindung in öffentlichen Diensten).' },
      ],
      seasonal: null,
    },

    /* 14 ----------------------------------------------------------------- */
    {
      id: "lehrstuehle-kontakte",
      num: 14,
      title: "Lehrstühle und Kontakte (Netzwerk & Karriere)",
      intro: null,
      groups: [
        {
          heading: "University of Toronto — Department of Political Science",
          sub: '<a href="https://politics.utoronto.ca" target="_blank" rel="noopener">politics.utoronto.ca</a>',
          items: [
            { html: '<strong>Steven Bernstein</strong> — Distinguished Professor für Global Environmental &amp; Sustainability Governance; Co-Direktor des <strong>Environmental Governance Lab</strong>; Mitherausgeber von <em>Global Environmental Politics</em>. <a href="mailto:steven.bernstein@utoronto.ca">steven.bernstein@utoronto.ca</a>. <em>Top-Kontakt für Klima-Governance.</em>' },
            { html: '<strong>Matthew Hoffmann</strong> (UTSC) — Co-Direktor, Environmental Governance Lab; Klima-Governance/Dekarbonisierung.' },
            { html: '<strong>Teresa Kramarz</strong> (School of the Environment/Munk) — Co-Direktorin, EGL; Direktorin von Munk One; Rechenschaftspflicht in der Umwelt-Governance. <a href="https://teresakramarz.com" target="_blank" rel="noopener">teresakramarz.com</a>.' },
            { html: '<strong>Linda A. White</strong> — Professorin; vergleichende Wohlfahrtsstaaten, frühkindliche Bildung &amp; Betreuung, Elternzeit, Geschlecht &amp; Public Policy. <strong><a href="mailto:linda.white@utoronto.ca">linda.white@utoronto.ca</a></strong>; Sidney Smith Hall, Raum 3061. Mit dem Projekt Reimagining Care/Work Policies verbunden (<a href="https://rcwproject.ca" target="_blank" rel="noopener">rcwproject.ca</a>). <em>Top-Kontakt für Sozial-/Familienpolitik.</em>' },
            { html: '<strong>Sylvia Bashevkin</strong> — Professorin Emerita; Frauen &amp; politische Führung, Geschlecht &amp; Außen-/Sozialpolitik; ehemalige CPSA-Präsidentin; Officer of the Order of Canada. <a href="https://sylviabashevkin.com" target="_blank" rel="noopener">sylviabashevkin.com</a>. <em>Hervorragende, gut vernetzte Senior-Kontaktperson zum Thema Frauen und Politik; aktiv bei Equal Voice.</em>' },
            { html: '<strong>Elizabeth McCallion</strong> — kanadische Regierung, Föderalismus, Geschlecht &amp; Politik. <a href="mailto:elizabeth.mccallion@utoronto.ca">elizabeth.mccallion@utoronto.ca</a>.' },
            { html: '<strong>Melissa S. Williams</strong> — politische Theorie; Repräsentation, indigene politische Innovationen.' },
            { html: '<strong>Environmental Governance Lab (EGL)</strong> — <a href="https://politics.utoronto.ca/research-labs" target="_blank" rel="noopener">politics.utoronto.ca/research-labs</a> — an der Munk School; das Toronto-Forschungszentrum der globalen Earth-System-Governance-Allianz; Workshops, Working Papers, öffentliche Veranstaltungen. <em>Starker Einstiegspunkt für Klimapolitik.</em>' },
            { html: '<strong>Munk School of Global Affairs &amp; Public Policy</strong> — <a href="https://munkschool.utoronto.ca" target="_blank" rel="noopener">munkschool.utoronto.ca</a> — viele öffentliche Vorträge (gut zum Netzwerken).' },
            { html: '<strong>Women &amp; Gender Studies Institute (WGSI)</strong> — <a href="https://wgsi.utoronto.ca" target="_blank" rel="noopener">wgsi.utoronto.ca</a> — Schwerpunkt transnationaler/postkolonialer Feminismus; kollaborative Spezialisierung, kombinierbar mit Politikwissenschaft.' },
            { html: '<strong>Women in Political Science (WiPS)</strong> — studentischer Club; Podiumsdiskussionen, „Coffee &amp; Politics".' },
          ],
        },
        {
          heading: "York University",
          items: [
            { html: '<strong>Isabella Bakker</strong> — Distinguished Research Professor, Politics; York Research Chair für Global Economic Governance, Gender and Human Rights; Pionierin der feministischen politischen Ökonomie &amp; sozialen Reproduktion; FRSC; Trudeau Fellow. <a href="https://profiles.laps.yorku.ca/profiles/icbakker" target="_blank" rel="noopener">profiles.laps.yorku.ca/profiles/icbakker</a>. <em>Der wichtigste kanadische Kontakt für feministische politische Ökonomie.</em>' },
            { html: '<strong>Stephen Gill</strong> — Distinguished Research Professor; kritische IPÖ.' },
            { html: '<strong>Anna M. Agathangelou</strong> — IB, feministische/postkoloniale politische Ökonomie.' },
            { html: '<strong>Centre for Feminist Research (CFR)</strong> — <a href="https://yorku.ca/cfr" target="_blank" rel="noopener">yorku.ca/cfr</a> — Direktor Dr. Christo El Morr (<a href="mailto:elmorr@yorku.ca">elmorr@yorku.ca</a>); Koordinatorin Dr. Andi Schwartz (<a href="mailto:cfr-coor@yorku.ca">cfr-coor@yorku.ca</a>); allgemein <a href="mailto:cfr@yorku.ca">cfr@yorku.ca</a>. <strong>Bietet Gastwissenschaftler:innen / Visiting Graduate Students / Associates „innerhalb Yorks und darüber hinaus"</strong> — ein expliziter Weg als Gastwissenschaftlerin für eine umziehende Forscherin; Newsletter, Reihe <em>Feminists in Focus</em>.' },
            { html: '<strong>City Institute (CITY)</strong> — <a href="https://yorku.ca/city" target="_blank" rel="noopener">yorku.ca/city</a> — Direktorin Linda Peake (feministische Stadtgeographie; GenUrb-Netzwerk).' },
            { html: '<strong>School of Public Policy &amp; Administration (SPPA)</strong> — <a href="https://yorku.ca/laps/sppa" target="_blank" rel="noopener">yorku.ca/laps/sppa</a> — Umwelt-/Sozialpolitik, demokratische Verwaltung; MPPAL für Berufstätige.' },
            { html: '<strong>School of Gender, Sexuality &amp; Women\'s Studies (GSWS)</strong> — die erste ihrer Art in Kanada; Leitung Frances Latchford.' },
          ],
        },
        {
          heading: "Toronto Metropolitan University (TMU, ehemals Ryerson)",
          items: [
            { html: '<strong>Tracey Raney</strong> — Professorin, Politics &amp; Public Administration; politische Repräsentation von Frauen, geschlechtsspezifische Gewalt in der Politik; Editorial Board von <em>Politics &amp; Gender</em>; Gewinnerin des CPSA Jill Vickers Prize; Mitbegründerin von TMUs <strong>„Women in the House"</strong>; <strong>Co-Vorsitzende der CPSA 2027</strong>. <a href="https://torontomu.ca/politics" target="_blank" rel="noopener">torontomu.ca/politics</a> + <a href="https://traney.org" target="_blank" rel="noopener">traney.org</a>. <em>Sehr gut vernetzter Knotenpunkt für Geschlecht und kanadische Politik.</em>' },
            { html: '<strong>Peggy Nash</strong> — Distinguished Visiting Professor; lehrt „Women in the House" mit (ehemalige Abgeordnete — Praktiker:innen-Netzwerk).' },
            { html: '<strong>The Dais</strong> — <a href="https://dais.ca" target="_blank" rel="noopener">dais.ca</a> — Politik zu Technologie/Demokratie/Bildung (<a href="#ki-gesellschaft">Abschnitt 13</a>).' },
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
