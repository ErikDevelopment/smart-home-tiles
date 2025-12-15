# 🧭 Smart Dashboard Website (Tile-basiert)

Eine **moderne, dunkle Dashboard-Website** mit **Tile-Übersicht** und mehreren Detailansichten  
(Uhr, Wetter, weitere Views geplant).

Das Projekt ist **komplett standalone**:
- kein Backend
- keine Abhängigkeit von ioBroker
- vollständig lauffähig im Browser

Perfekt geeignet für:
- 📱 Wand-Tablet
- 🖥 Desktop-Browser
- 🧩 Einbindung in **Jarvis Design**
- 🧩 Einbindung in **ioBroker VIS / VIS-2** (WebView / IFrame)
- 🌍 Hosting über **GitHub Pages**

---

## ✨ Features

### Übersicht
- Dark Mode mit **goldenen Akzenten**
- **Tile-basierte Startseite**
- Sauberes, ruhiges UI (Tablet-optimiert)

### Uhr / Clock View
- Große Live-Uhr
- Deutsches Datum + Wochentag
- Automatische Begrüßung:
  - Guten Morgen
  - Guten Tag
  - Guten Abend
  - Gute Nacht
- Tageszeit-Icon (Sonne / Mond)

### Wetter View
- Dashboard-artiges Layout (Tablet-Stil)
- Große Temperaturanzeige
- Wetterzustand + Zusatzinfos
- **Animierte Wetter-Icons (SVG + CSS)**
  - Sonne
  - Wolken
  - Regen
  - Gewitter
- **URL-Payload-Unterstützung**
- **Dummy-Werte**, falls keine Parameter übergeben werden

### Allgemein
- Einheitliches Design über alle Views
- CSS zentral ausgelagert
- Keine externen APIs nötig
- Läuft vollständig offline (abgesehen von Icons)

---

## 📂 Projektstruktur

/
├── index.html              (Tile-Übersicht)
├── views/
│   ├── clock.html          (Uhr / Lockscreen)
│   ├── weather.html        (Wetter-Dashboard)
│   └── weitere Views …
├── assets/
│   ├── css/
│   │   └── main.css        (gemeinsames Styling)
│   └── js/
│       ├── clock.js
│       └── weather.js
└── README.md

---

## 🚀 Nutzung

### Lokal testen
- index.html im Browser öffnen
- Navigation erfolgt über Tiles

---

## 🌍 GitHub Pages

1. Neues Repository erstellen
2. Alle Dateien ins Repository legen
3. Repository → Settings → Pages
4. Branch: main
5. Ordner: /root

Aufruf:
https://USERNAME.github.io/REPOSITORY/

---

## 🧩 Einbindung in ioBroker / Jarvis

### Jarvis Design
- Widget: WebView oder IFrame
- URL:
https://USERNAME.github.io/REPOSITORY/

### VIS / VIS-2
- Widget: WebView oder IFrame
- URL wie oben

---

## 🔗 URL-Payloads (Beispiele)

Wetter-View mit Übergabewerten:
views/weather.html?temp=16&state=storm&condition=Storm%20with%20Rain

Unterstützte Parameter (weather):
- temp      (Temperatur)
- state     (sunny | cloudy | rain | storm | snow)
- condition (Freitext)
- wind
- humidity

Fehlende oder ungültige Werte werden automatisch durch Dummy-Werte ersetzt.

---

## 🛠 Anpassungen

- Styles: assets/css/main.css
- Uhr-Logik: assets/js/clock.js
- Wetter-Logik & Payloads: assets/js/weather.js

Einfach erweiterbar um:
- weitere Views
- neue Tiles
- zusätzliche Payload-Parameter

---

## 🎨 Design-Ziel

- Dark UI, ruhig und hochwertig
- Gute Lesbarkeit aus Distanz
- Tablet- & Wanddisplay-tauglich
- Modular & erweiterbar
- Kein Framework, kein Overhead

---

## 📄 Lizenz

MIT License

---

## 🙌 Credits

Icons: Font Awesome  
Design-Inspiration: iOS-Lockscreen, moderne Tablet-Wetter-Dashboards, Smart-Home-UIs
