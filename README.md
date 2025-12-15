# 🧭 Smart Dashboard Website (Tile-basiert)

Eine **moderne, dunkle Dashboard-Website** mit **Tile-Übersicht** und mehreren Detailansichten  
(Uhr, Wetter, weitere Views erweiterbar).

Das Projekt ist **komplett standalone**:
- kein Backend
- keine Frameworks
- vollständig lauffähig im Browser
- ideal für WebView / IFrame

Perfekt geeignet für:
- 📱 Wand-Tablet
- 🖥 Desktop-Browser
- 🧩 Einbindung in **Jarvis Design**
- 🧩 Einbindung in **ioBroker VIS / VIS-2**
- 🌍 Hosting über **GitHub Pages**

---

## ✨ Features

### 🧭 Übersicht (index.html)
- Dark Mode mit **goldenen Akzenten**
- **Tile-basierte Startseite**
- Ruhiges, aufgeräumtes UI
- Tablet-optimiertes Grid

---

### 🕒 Uhr / Clock View
- Große Live-Uhr
- Deutsches Datum + Wochentag
- Automatische Begrüßung:
  - Guten Morgen
  - Guten Tag
  - Guten Abend
  - Gute Nacht
- Tageszeit-Icon (Sonne / Mond)

---

### 🌦 Wetter View (Advanced)
Dashboard-artige Wetteransicht im Tablet-Stil:

- Große Temperaturanzeige
- Wetterbeschreibung (z. B. „clear sky“, „thunderstorm“)
- Luftfeuchtigkeit & Windgeschwindigkeit
- 🧭 **Windrichtung als rotierender Pfeil**
- 📊 **Echte Temperaturkurve** (Forecast-Linie)
- 🌙 **Automatischer Nachtmodus** (über Sonnenauf- & -untergang)
- 🌧 **Regen-Effekte über gesamten Screen**
  - leicht / normal / stark
- ⚡ **Blitz-Effekt bei Gewitter**
- ☁️ Wolken-Overlay bei Bewölkung
- **Robuste Dummy-Werte**, falls Parameter fehlen oder ungültig sind

---

### 🔌 URL- & ioBroker-Integration
- Alle Views steuerbar über **URL-Payloads**
- Ideal für Übergabe aus **openweathermap-Adapter**
- Keine direkte API-Anbindung notwendig

---

## 📂 Projektstruktur

/
├── index.html                 (Tile-Übersicht)
├── views/
│   ├── clock.html             (Uhr / Lockscreen)
│   ├── weather.html           (Wetter-Dashboard)
│   └── weitere Views …
├── assets/
│   ├── css/
│   │   ├── main.css           (gemeinsames Styling)
│   │   └── app.css            (Animationen & Effekte)
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

## 🔗 URL-Payloads – Wetter (Beispiele)

### Minimal
views/weather.html?temp=9.8&text=Clear

### Vollständig (openweathermap-kompatibel)
views/weather.html?
temp=9.8
&humidity=85
&wind=1.03
&winddir=180
&clouds=70
&rainmm=4.2
&text=Thunderstorm
&sunrise=1733985600000
&sunset=1734019200000
&forecast=9,8,8,10,12,11,9

### Unterstützte Parameter (weather)
- temp        Temperatur
- text        Wetterbeschreibung
- humidity    Luftfeuchte (%)
- wind        Windgeschwindigkeit (m/s)
- winddir     Windrichtung (Grad)
- clouds      Bewölkung (%)
- rainmm      Regenmenge (mm)
- snowmm      Schneemenge (mm)
- sunrise     Sonnenaufgang (Unix ms)
- sunset      Sonnenuntergang (Unix ms)
- forecast    Temperatur-Forecast (CSV)

Fehlende oder ungültige Werte werden automatisch ersetzt.

---

## 🛠 Anpassungen

- Globales Styling: assets/css/main.css
- Effekte & Animationen: assets/css/app.css
- Uhr-Logik: assets/js/clock.js

Das Projekt ist modular und leicht erweiterbar:
- neue Views
- neue Tiles
- zusätzliche Payload-Parameter

---

## 🎨 Design-Ziel

- Dunkles, ruhiges UI
- Hochwertige Akzente
- Sehr gute Lesbarkeit aus Distanz
- Optimiert für Tablets & Wanddisplays
- Kein Framework, kein Overhead

---

## 📄 Lizenz

MIT License

---

## 🙌 Credits

Icons: Font Awesome  
Design-Inspiration:
- iOS-Lockscreen
- moderne Tablet-Wetter-Dashboards
- Smart-Home-UI-Konzepte
