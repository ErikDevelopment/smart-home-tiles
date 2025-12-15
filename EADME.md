# 🕒 Minimal Dashboard / Lockscreen Website

Eine schlichte, moderne Dashboard-Website im iOS-/Lockscreen-Stil.
Zeigt Uhrzeit, Datum und dynamische Begrüßung – komplett standalone, ohne Backend und ohne ioBroker-Daten.

Geeignet für:
- Wand-Tablet
- Browser
- Einbindung in Jarvis Design
- Einbindung in ioBroker VIS / VIS-2 (WebView / IFrame)
- Hosting über GitHub Pages

---

## ✨ Features

- Große Live-Uhr
- Deutsches Datum mit Wochentag
- Automatische Begrüßung je nach Tageszeit
  - Guten Morgen
  - Guten Tag
  - Guten Abend
  - Gute Nacht
- Dynamische Icons (Tag / Nacht)
- Modernes dunkles Design (iOS-inspiriert)
- Keine externen Datenquellen notwendig
- Läuft vollständig im Browser

---

## 📂 Projektstruktur

/
├── index.html
└── README.md

Alles ist bewusst in einer einzigen HTML-Datei gehalten.

---

## 🚀 Nutzung

Lokal testen:
index.html einfach im Browser öffnen

---

## 🌍 GitHub Pages

1. Neues Repository erstellen
2. index.html ins Root-Verzeichnis legen
3. Repository öffnen → Settings → Pages
4. Branch: main
5. Ordner: /root

Aufruf:
https://USERNAME.github.io/REPOSITORY/

---

## 🧩 Einbindung in ioBroker / Jarvis

Jarvis Design:
- Widget: WebView oder IFrame
- URL:
https://USERNAME.github.io/REPOSITORY/

VIS / VIS-2:
- Widget: WebView oder IFrame
- URL wie oben

---

## 🛠 Anpassungen

Alle Anpassungen erfolgen direkt in der Datei index.html.

Du kannst ändern:
- Uhrformat
- Begrüßungstexte
- Zeitbereiche (z. B. Abend ab 18 Uhr)
- Icons

---

## 🎨 Design-Ziel

- Minimalistisch
- Gute Lesbarkeit aus Distanz
- Optimiert für Tablets im Hochformat
- Kein Framework, kein Overhead

---

## 📄 Lizenz

MIT License

---

## 🙌 Credits

Icons: Font Awesome  
Design: inspiriert vom iOS-Lockscreen und Smart-Home-Dashboards
