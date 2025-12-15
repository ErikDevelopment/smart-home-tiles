const state = p.get("state") || "sunny";

const icons = {
  sunny: "icon-sunny",
  cloudy: "icon-cloudy",
  rain: "icon-rain",
  storm: "icon-storm"
};

Object.values(icons).forEach(id => {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
});

const active = document.getElementById(icons[state] || "icon-sunny");
if (active) active.classList.remove("hidden");
