/* =========================================================
   CALENDAR VIEW SCRIPT
========================================================= */

const p = new URLSearchParams(location.search);
const container = document.getElementById("calendar");

/* Dummy-Fallback */
const DUMMY_EVENTS = [
  { title: "Restmüll", days: 3, type: "private" },
  { title: "Team Meeting", days: 1, type: "work" }
];

/* ===============================
   Parse Events from URL (NEU)
================================ */
const count = Number(p.get("count")) || 0;
let events = [];

for (let i = 0; i < count; i++) {
  const title = p.get(`e${i}_title`);
  const days  = Number(p.get(`e${i}_days`));
  const type  = p.get(`e${i}_type`) || "private";

  if (!title) continue;

  events.push({
    title,
    days: isNaN(days) ? 0 : days,
    type
  });
}

/* Fallback */
if (!events.length) {
  events = DUMMY_EVENTS;
}

/* ===============================
   Render
================================ */
events.forEach(ev => {
  const tile = document.createElement("div");
  tile.className = `event-tile event-${ev.type}`;

  tile.innerHTML = `
    <div class="event-icon">
      <i class="fa-solid ${
        ev.type === "work" ? "fa-briefcase" : "fa-bookmark"
      }"></i>
    </div>
    <div class="event-content">
      <div class="event-title">${ev.title}</div>
      <div class="event-time">
        ${
          ev.days === 0 ? "Heute" :
          ev.days === 1 ? "Morgen" :
          "in " + ev.days + " Tagen"
        }
      </div>
    </div>
  `;

  container.appendChild(tile);
});
