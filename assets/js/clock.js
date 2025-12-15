function updateClock(){
  const now = new Date();

  // Uhrzeit
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("time").textContent = `${hh}:${mm}`;

  // Datum
  const weekday = now.toLocaleDateString("de-DE", { weekday: "long" });
  const date = now.toLocaleDateString("de-DE", { day: "2-digit", month: "long" });
  document.getElementById("date").textContent =
    weekday.charAt(0).toUpperCase() + weekday.slice(1) + ", " + date;

  // Tageszeit
  const h = now.getHours();
  let greeting, period, icon;

  if (h < 5) {
    greeting = "Gute Nacht";
    period = "Nacht";
    icon = "fa-moon";
  } else if (h < 11) {
    greeting = "Guten Morgen";
    period = "Morgen";
    icon = "fa-sunrise";
  } else if (h < 17) {
    greeting = "Guten Tag";
    period = "Tag";
    icon = "fa-sun";
  } else if (h < 22) {
    greeting = "Guten Abend";
    period = "Abend";
    icon = "fa-cloud-sun";
  } else {
    greeting = "Gute Nacht";
    period = "Nacht";
    icon = "fa-moon";
  }

  document.getElementById("greeting").textContent = greeting;
  document.getElementById("period").textContent = "Tageszeit: " + period;

  const iconEl = document.getElementById("icon");
  iconEl.className = "fa-solid " + icon + " icon";
}

// Initial + Update
updateClock();
setInterval(updateClock, 1000);
