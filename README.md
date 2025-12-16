# 🧭 Smart Dashboard Website (Tile-basiert)

Eine **moderne, dunkle Smart-Home-Dashboard-Website** mit **Tile-Übersicht**,  
Detail-Views und **vollständiger URL-/Payload-Steuerung**.

Das Projekt ist **komplett standalone**:
- ❌ kein Backend
- ❌ keine Frameworks
- ✅ reines HTML / CSS / JavaScript
- ✅ vollständig lauffähig im Browser
- ✅ ideal für WebView / IFrame

Perfekt geeignet für:
- 📱 Wand-Tablet
- 🖥 Desktop-Browser
- 🧩 ioBroker **VIS / VIS-2**
- 🧩 Jarvis Design
- 🌍 Hosting über **GitHub Pages**

---

## ✨ Features (aktueller Stand)

### 🧭 Übersicht (index.html)
- Dark UI mit **goldenen Akzenten**
- **Tile-basierte Startseite**
- Tablet-optimiertes Grid
- Hover-Effekte & Tiefenwirkung
- **Ausklappbare Payload-Sektion**
  - komplette URLs sichtbar (kein `...`)
  - Copy-Button für iFrame / VIS
  - kurze Erklärung je Payload

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
- iframe-optimiert (kein Flackern)

---

### 🌦 Wetter View (Advanced)
Tablet-artige Wetteransicht mit Effekten:

- Große Temperaturanzeige
- Wetterzustand (übersetzt / anpassbar)
- Luftfeuchtigkeit & Windgeschwindigkeit
- 🧭 **Windrichtung als rotierender Pfeil**
- 📊 **Temperatur-Forecast-Kurve**
- 🌙 Automatischer Nachtmodus
  - basierend auf Sonnenauf- & -untergang
- 🌧 Dynamische Regen-Effekte
  - leicht / normal / stark
- ⚡ Blitz-Effekt bei Gewitter
- ☁️ Wolken-Overlay bei Bewölkung
- **Immer transparenter Hintergrund**
- Fallback- & Dummy-Werte bei fehlenden Daten

---

### 📅 Kalender View
- Übersicht der **nächsten Termine**
- Zusammengeführt aus:
  - `ical.1` (Privat)
  - `ical.2` (Arbeit)
- Zeigt automatisch:
  - heute
  - morgen
  - übermorgen
- Auch wenn **heute keine Termine existieren**
- Übergabe per **fertiger URL**
- Ideal für VIS / WebView

---

### 🎵 Media View (Now Playing)
- Aktueller Titel
- Künstler
- Album
- Wiedergabe-Status
- Cover-Art (URL)
- Design inspiriert von modernen Media-Playern
- Vollständig per URL steuerbar

---

### 🏠 Weitere Views (vorbereitet)
- Hausstatus (Licht, Türen, Alarm)
- Energie / Verbrauch
- Nachtmodus
- Erweiterbar ohne Umbau der Basis

---

## 🔌 URL- & ioBroker-Integration

Alle Views werden **ausschließlich über URL-Parameter gesteuert**.  
Keine direkte API-Anbindung nötig.

Perfekt für:
- openweathermap-Adapter
- ical-Adapter
- javascript.0
- VIS / VIS-2 WebView Widgets

---

## 📂 Projektstruktur

/
├── index.html # Tile-Übersicht + Payloads
├── views/
│ ├── clock.html # Uhr / Tageszeit
│ ├── weather.html # Wetter-Dashboard
│ ├── calendar.html # Kalender-View
│ ├── media.html # Media / Now Playing
│ ├── status.html # Hausstatus
│ └── energy.html # Energie
├── assets/
│ ├── css/
│ │ ├── main.css # Grundlayout & Farben
│ │ └── app.css # Effekte & Animationen
│ └── js/
│ ├── clock.js
│ ├── weather.js
│ └── calendar.js
└── README.md


---

## 🌍 GitHub Pages

1. Repository erstellen
2. Dateien hochladen
3. Settings → Pages
4. Branch: `main`
5. Folder: `/root`

## 🔗 URL-Payloads (Beispiele)

### 🌦 Wetter

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


### 📅 Kalender
views/calendar.html?count=0&empty=1


(Dynamisch erzeugt über `javascript.0.calendar.url`)

### 🎵 Media
views/media.html?
title=Reminder
&artist=The Weeknd
&album=After Hours
&state=playing
&cover=https://...


---

## 🧩 ioBroker Integration

### VIS / VIS-2
- Widget: WebView / IFrame
- URL: Payload oder State (`javascript.0.calendar.url`)

### javascript.0
- erzeugt fertige URLs
- legt States automatisch an
- robust gegen fehlende Daten

---

## 🎨 Design-Ziele

- Ruhiges, dunkles UI
- Hoher Kontrast
- Lesbar aus Distanz
- Tablet- & Wanddisplay-optimiert
- Keine Flacker- oder Reload-Effekte
- Keine Frameworks, kein Overhead

---

## 🛠 Erweiterbarkeit

Einfach erweiterbar um:
- neue Views
- neue Tiles
- neue Payloads
- zusätzliche Effekte

---

## 📄 Lizenz
MIT License

---

## 🙌 Credits

Icons: Font Awesome  
Design-Inspiration:
- iOS Lockscreen
- moderne Media-Player
- Smart-Home-Dashboards
