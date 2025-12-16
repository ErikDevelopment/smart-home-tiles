const p = new URLSearchParams(location.search);

const DUMMY = {
  title: "Keine Wiedergabe",
  artist: "—",
  cover: "",
  state: "paused"
};

function get(key, def){
  const v = p.get(key);
  return v && v.trim() ? v : def;
}

const title  = get("title",  DUMMY.title);
const artist= get("artist",DUMMY.artist);
const cover = get("cover", DUMMY.cover);
const state = get("state", DUMMY.state);

document.getElementById("title").textContent = title;
document.getElementById("artist").textContent = artist;

/* COVER */
const img = document.getElementById("cover");
if (cover){
  img.src = cover;
}else{
  img.style.display = "none";
}

/* PLAY / PAUSE */
const icon = document.getElementById("stateIcon");
icon.className = "fa-solid " + (state === "playing"
  ? "fa-pause-circle"
  : "fa-play-circle");

/* WAVE nur bei playing */
document.querySelector(".media-wave").style.opacity =
  state === "playing" ? "1" : "0.3";
