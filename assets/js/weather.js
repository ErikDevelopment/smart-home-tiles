const p = new URLSearchParams(location.search);

/* ---------- RAW VALUES ---------- */
const temp = parseFloat(p.get("temp")) || 10;
const humidity = parseInt(p.get("humidity")) || 70;
const wind = parseFloat(p.get("wind")) || 2;
const windDir = parseInt(p.get("winddir")) || 0;
const clouds = parseInt(p.get("clouds")) || 0;
const rainmm = parseFloat(p.get("rainmm")) || 0;
const text = p.get("text") || "Klar";
const sunrise = parseInt(p.get("sunrise")) || null;
const sunset = parseInt(p.get("sunset")) || null;

/* Forecast: z. B. 9,8,10,12,11 */
const forecast = (p.get("forecast") || "")
  .split(",")
  .map(v => parseFloat(v))
  .filter(v => !isNaN(v));

/* ---------- UI ---------- */
document.getElementById("temp").textContent = temp.toFixed(1) + "°";
document.getElementById("condition").textContent = text;
document.getElementById("humidity").textContent = humidity + "%";
document.getElementById("wind").textContent = wind.toFixed(1) + " m/s";

/* Windrichtung */
document.getElementById("windArrow").style.transform =
  `rotate(${windDir}deg)`;

/* ---------- NIGHT MODE ---------- */
if (sunrise && sunset) {
  const now = Date.now();
  if (now < sunrise || now > sunset) {
    document.body.classList.add("night");
  }
}

/* ---------- TEMPERATURE CURVE ---------- */
if (forecast.length >= 2) drawTempChart(forecast);

function drawTempChart(data){
  const canvas = document.getElementById("tempChart");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0,0,canvas.width,canvas.height);

  const min = Math.min(...data);
  const max = Math.max(...data);

  ctx.beginPath();
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 2;

  data.forEach((t,i)=>{
    const x = (i/(data.length-1))*canvas.width;
    const y = canvas.height - ((t-min)/(max-min))*canvas.height;
    if(i===0) ctx.moveTo(x,y);
    else ctx.lineTo(x,y);
  });

  ctx.stroke();
}

/* ---------- WEATHER EFFECTS ---------- */
let state = "sunny";
let rainLevel = "normal";

if (text.toLowerCase().includes("thunder")) state = "storm";
else if (rainmm > 0) {
  state = "rain";
  if (rainmm > 3) rainLevel = "heavy";
  if (rainmm < 0.5) rainLevel = "light";
}
else if (clouds > 60) state = "cloudy";

initEffects(state, rainLevel);

/* ---------- EFFECT FUNCTIONS ---------- */
function initEffects(state, rainLevel){
  let e = document.getElementById("weather-effects");
  e.innerHTML = "";

  if(state === "rain" || state === "storm"){
    let drops = rainLevel === "heavy" ? 120 :
                rainLevel === "light" ? 30 : 60;
    for(let i=0;i<drops;i++){
      const d = document.createElement("div");
      d.className = "raindrop";
      d.style.left = Math.random()*100+"vw";
      d.style.animationDuration = (0.6+Math.random())+"s";
      e.appendChild(d);
    }
  }

  if(state === "storm"){
    const f = document.createElement("div");
    f.className = "lightning";
    e.appendChild(f);
  }
}
