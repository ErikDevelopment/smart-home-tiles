const p = new URLSearchParams(location.search);

/* ===============================
   DEFAULT / DUMMY DATA
================================ */
const DUMMY = {
  temp: 12.5,
  humidity: 65,
  wind: 2.3,
  windDir: 180,
  clouds: 40,
  rainmm: 0,
  text: "Leicht bewölkt",
  forecast: [10, 11, 12, 13, 12, 11, 10]
};

/* ===============================
   SAFE PARSE HELPERS
================================ */
function num(val, def, min = -Infinity, max = Infinity){
  const n = Number(val);
  if (Number.isNaN(n)) return def;
  if (n < min || n > max) return def;
  return n;
}

function str(val, def){
  if (!val || typeof val !== "string") return def;
  return val.trim() || def;
}

/* ===============================
   RAW VALUES (SAFE)
================================ */
const temp     = num(p.get("temp"), DUMMY.temp, -50, 60);
const humidity = num(p.get("humidity"), DUMMY.humidity, 0, 100);
const wind     = num(p.get("wind"), DUMMY.wind, 0, 50);
const windDir  = num(p.get("winddir"), DUMMY.windDir, 0, 360);
const clouds   = num(p.get("clouds"), DUMMY.clouds, 0, 100);
const rainmm   = num(p.get("rainmm"), DUMMY.rainmm, 0, 500);
const text     = str(p.get("text"), DUMMY.text);
const sunrise  = num(p.get("sunrise"), null);
const sunset   = num(p.get("sunset"), null);

/* Forecast (CSV → Array) */
let forecast = (p.get("forecast") || "")
  .split(",")
  .map(v => Number(v))
  .filter(v => !Number.isNaN(v));

if (forecast.length < 2) {
  forecast = DUMMY.forecast;
}

/* ===============================
   UI UPDATE
================================ */
document.getElementById("temp").textContent =
  temp.toFixed(1) + "°";

document.getElementById("condition").textContent =
  text;

document.getElementById("humidity").textContent =
  humidity + "%";

document.getElementById("wind").textContent =
  wind.toFixed(1) + " m/s";

/* Windrichtung */
document.getElementById("windArrow").style.transform =
  `rotate(${windDir}deg)`;

/* ===============================
   NIGHT MODE (SAFE)
================================ */
if (sunrise && sunset) {
  const now = Date.now();
  if (now < sunrise || now > sunset) {
    document.body.classList.add("night");
  }
}

/* ===============================
   TEMPERATURE CURVE
================================ */
drawTempChart(forecast);

function drawTempChart(data){
  const canvas = document.getElementById("tempChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  ctx.beginPath();
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 2;

  data.forEach((t,i)=>{
    const x = (i/(data.length-1))*canvas.width;
    const y = canvas.height - ((t-min)/range)*canvas.height;
    i === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
  });

  ctx.stroke();
}

/* ===============================
   WEATHER STATE LOGIC
================================ */
let state = "sunny";
let rainLevel = "normal";

const t = text.toLowerCase();

if (t.includes("thunder")) {
  state = "storm";
}
else if (rainmm > 0) {
  state = "rain";
  if (rainmm > 3) rainLevel = "heavy";
  else if (rainmm < 0.5) rainLevel = "light";
}
else if (clouds > 60) {
  state = "cloudy";
}

/* ===============================
   WEATHER EFFECTS
================================ */
initEffects(state, rainLevel);

function initEffects(state, rainLevel){
  let e = document.getElementById("weather-effects");
  if (!e) return;

  e.innerHTML = "";

  if(state === "rain" || state === "storm"){
    let drops = 60;
    if (rainLevel === "heavy") drops = 120;
    if (rainLevel === "light") drops = 30;

    for(let i=0;i<drops;i++){
      const d = document.createElement("div");
      d.className = "raindrop";
      d.style.left = Math.random()*100 + "vw";
      d.style.animationDuration =
        (0.6 + Math.random()) + "s";
      e.appendChild(d);
    }
  }

  if(state === "storm"){
    const f = document.createElement("div");
    f.className = "lightning";
    e.appendChild(f);
  }
}
