const discCatalog = [
  // Innova
  { name: "Aviar", manufacturer: "Innova", speed: 2, glide: 3, turn: 0, fade: 1 },
  { name: "Firebird", manufacturer: "Innova", speed: 9, glide: 3, turn: 0, fade: 4 },
  { name: "Teebird", manufacturer: "Innova", speed: 7, glide: 5, turn: 0, fade: 2 },
  { name: "Leopard3", manufacturer: "Innova", speed: 7, glide: 5, turn: -2, fade: 1 },
  { name: "Roc3", manufacturer: "Innova", speed: 5, glide: 4, turn: 0, fade: 3 },
  { name: "Mako3", manufacturer: "Innova", speed: 5, glide: 5, turn: 0, fade: 0 },
  { name: "Wraith", manufacturer: "Innova", speed: 11, glide: 5, turn: -1, fade: 3 },
  { name: "Destroyer", manufacturer: "Innova", speed: 12, glide: 5, turn: -1, fade: 3 },
  { name: "Shryke", manufacturer: "Innova", speed: 13, glide: 6, turn: -2, fade: 2 },

  // Discraft
  { name: "Luna", manufacturer: "Discraft", speed: 3, glide: 3, turn: 0, fade: 3 },
  { name: "Zone", manufacturer: "Discraft", speed: 4, glide: 3, turn: 0, fade: 3 },
  { name: "Buzzz", manufacturer: "Discraft", speed: 5, glide: 4, turn: -1, fade: 1 },
  { name: "Comet", manufacturer: "Discraft", speed: 4, glide: 5, turn: -2, fade: 1 },
  { name: "Undertaker", manufacturer: "Discraft", speed: 9, glide: 5, turn: -1, fade: 2 },
  { name: "Raptor", manufacturer: "Discraft", speed: 9, glide: 4, turn: 0, fade: 3 },
  { name: "Anax", manufacturer: "Discraft", speed: 10, glide: 6, turn: 0, fade: 3 },
  { name: "Zeus", manufacturer: "Discraft", speed: 12, glide: 5, turn: -1, fade: 3 },
  { name: "Nuke", manufacturer: "Discraft", speed: 13, glide: 5, turn: -1, fade: 3 },

  // Discmania
  { name: "P2", manufacturer: "Discmania", speed: 2, glide: 3, turn: 0, fade: 1 },
  { name: "Link", manufacturer: "Discmania", speed: 2, glide: 3, turn: 0, fade: 1 },
  { name: "Origin", manufacturer: "Discmania", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "MD3", manufacturer: "Discmania", speed: 5, glide: 5, turn: 0, fade: 1 },
  { name: "Essence", manufacturer: "Discmania", speed: 8, glide: 6, turn: -2, fade: 1 },
  { name: "FD", manufacturer: "Discmania", speed: 7, glide: 6, turn: 0, fade: 1 },
  { name: "PD", manufacturer: "Discmania", speed: 10, glide: 4, turn: 0, fade: 3 },
  { name: "DD3", manufacturer: "Discmania", speed: 12, glide: 5, turn: -1, fade: 3 },

  // MVP / Axiom / Streamline
  { name: "Nomad", manufacturer: "MVP", speed: 2, glide: 4, turn: 0, fade: 1.5 },
  { name: "Hex", manufacturer: "MVP", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "Reactor", manufacturer: "MVP", speed: 5, glide: 5, turn: -0.5, fade: 1.5 },
  { name: "Volt", manufacturer: "MVP", speed: 8, glide: 5, turn: -0.5, fade: 2 },
  { name: "Tesla", manufacturer: "MVP", speed: 9, glide: 5, turn: -1, fade: 2 },
  { name: "Photon", manufacturer: "MVP", speed: 11, glide: 5, turn: -1, fade: 2.5 },
  { name: "Wave", manufacturer: "MVP", speed: 11, glide: 5, turn: -2, fade: 2 },
  { name: "Envy", manufacturer: "Axiom", speed: 3, glide: 3, turn: 0, fade: 2 },
  { name: "Proxy", manufacturer: "Axiom", speed: 3, glide: 3, turn: -1, fade: 0.5 },
  { name: "Crave", manufacturer: "Axiom", speed: 6.5, glide: 5, turn: -1, fade: 1 },
  { name: "Insanity", manufacturer: "Axiom", speed: 9, glide: 5, turn: -2, fade: 1.5 },
  { name: "Defy", manufacturer: "Axiom", speed: 11, glide: 5, turn: -1, fade: 3 },
  { name: "Pilot", manufacturer: "Streamline", speed: 2, glide: 5, turn: -1, fade: 1 },
  { name: "Drift", manufacturer: "Streamline", speed: 7, glide: 5, turn: -2, fade: 1 },
  { name: "Trace", manufacturer: "Streamline", speed: 11, glide: 5, turn: -1, fade: 2 },

  // Trilogy: Dynamic / Latitude 64 / Westside
  { name: "Judge", manufacturer: "Dynamic Discs", speed: 2, glide: 4, turn: 0, fade: 1 },
  { name: "Truth", manufacturer: "Dynamic Discs", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "Justice", manufacturer: "Dynamic Discs", speed: 5, glide: 1, turn: 0.5, fade: 4 },
  { name: "Felon", manufacturer: "Dynamic Discs", speed: 9, glide: 3, turn: 0.5, fade: 4 },
  { name: "Escape", manufacturer: "Dynamic Discs", speed: 9, glide: 5, turn: -1, fade: 2 },
  { name: "Trespass", manufacturer: "Dynamic Discs", speed: 12, glide: 5, turn: -0.5, fade: 3 },
  { name: "Pure", manufacturer: "Latitude 64", speed: 3, glide: 3, turn: -1, fade: 1 },
  { name: "Fuse", manufacturer: "Latitude 64", speed: 5, glide: 6, turn: -1, fade: 0 },
  { name: "Claymore", manufacturer: "Latitude 64", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "River", manufacturer: "Latitude 64", speed: 7, glide: 7, turn: -1, fade: 1 },
  { name: "Saint", manufacturer: "Latitude 64", speed: 9, glide: 7, turn: -1, fade: 2 },
  { name: "Grace", manufacturer: "Latitude 64", speed: 11, glide: 6, turn: -1, fade: 2 },
  { name: "Harp", manufacturer: "Westside", speed: 4, glide: 3, turn: 0, fade: 3 },
  { name: "Tursas", manufacturer: "Westside", speed: 5, glide: 5, turn: -2, fade: 1 },
  { name: "Warship", manufacturer: "Westside", speed: 5, glide: 6, turn: 0, fade: 1 },
  { name: "Bear", manufacturer: "Westside", speed: 8, glide: 6, turn: -0.5, fade: 2.5 },
  { name: "Sword", manufacturer: "Westside", speed: 12, glide: 5, turn: -0.5, fade: 2 },

  // Prodigy
  { name: "PA-3", manufacturer: "Prodigy", speed: 3, glide: 3, turn: 0, fade: 1 },
  { name: "M4", manufacturer: "Prodigy", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "M1", manufacturer: "Prodigy", speed: 5, glide: 4, turn: 0, fade: 3 },
  { name: "F5", manufacturer: "Prodigy", speed: 7, glide: 5, turn: -2, fade: 1 },
  { name: "F1", manufacturer: "Prodigy", speed: 7, glide: 4, turn: 0, fade: 3 },
  { name: "H3 V2", manufacturer: "Prodigy", speed: 11, glide: 5, turn: -1, fade: 2 },
  { name: "D2", manufacturer: "Prodigy", speed: 12, glide: 6, turn: -1, fade: 3 },

  // Kastaplast
  { name: "Berg", manufacturer: "Kastaplast", speed: 1, glide: 1, turn: 0, fade: 2 },
  { name: "Reko", manufacturer: "Kastaplast", speed: 3, glide: 3, turn: 0, fade: 1 },
  { name: "Göte", manufacturer: "Kastaplast", speed: 4, glide: 5, turn: 0, fade: 1 },
  { name: "Kaxe", manufacturer: "Kastaplast", speed: 6, glide: 4, turn: 0, fade: 3 },
  { name: "Stål", manufacturer: "Kastaplast", speed: 9, glide: 4, turn: 0, fade: 3 },
  { name: "Falk", manufacturer: "Kastaplast", speed: 9, glide: 6, turn: -2, fade: 1 },
  { name: "Lots", manufacturer: "Kastaplast", speed: 9, glide: 5, turn: -1, fade: 2 },
  { name: "Guld", manufacturer: "Kastaplast", speed: 13, glide: 5, turn: -0.5, fade: 3 }
];

const manufacturerColors = {
  Innova: "#c93b3b",
  Discraft: "#e86d17",
  Discmania: "#1b1b1b",
  MVP: "#4d52f0",
  Axiom: "#8d2fe6",
  Streamline: "#00a5b5",
  "Dynamic Discs": "#1f7d4e",
  "Latitude 64": "#2570ff",
  Westside: "#de7f1f",
  Prodigy: "#28303d",
  Kastaplast: "#2a9b66"
};

const searchInput = document.getElementById("disc-search");
const results = document.getElementById("results");

function formatFlight({ speed, glide, turn, fade }) {
  return `${speed} | ${glide} | ${turn} | ${fade}`;
}

function scoreDistance(a, b) {
  return Math.abs(a.speed - b.speed) + Math.abs(a.glide - b.glide) + Math.abs(a.turn - b.turn) + Math.abs(a.fade - b.fade);
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getDiscImage(disc) {
  const bg = manufacturerColors[disc.manufacturer] || "#32425c";
  const title = escapeXml(`${disc.manufacturer} • ${disc.name}`);
  const flight = escapeXml(`${disc.speed} ${disc.glide} ${disc.turn} ${disc.fade}`);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' rx='18' fill='${bg}'/><circle cx='80' cy='80' r='54' fill='rgba(255,255,255,0.18)'/><text x='80' y='66' text-anchor='middle' font-family='Arial,sans-serif' font-size='11' fill='white'>${title}</text><text x='80' y='97' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='700' fill='white'>${flight}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function withImage(disc) {
  return { ...disc, image: getDiscImage(disc) };
}

const discs = discCatalog.map(withImage);

function findSourceDisc(query) {
  const cleaned = query.trim().toLowerCase();
  if (!cleaned) return null;
  return discs.find((disc) => disc.name.toLowerCase() === cleaned) || discs.find((disc) => disc.name.toLowerCase().includes(cleaned));
}

function cardTemplate(disc, metaText) {
  return `
    <li class="item">
      <img src="${disc.image}" alt="${disc.manufacturer} ${disc.name} disc image" class="disc-image" />
      <div>
        <strong>${disc.name}</strong> <span class="meta">(${disc.manufacturer})</span><br/>
        <span class="meta">Flight ${formatFlight(disc)}${metaText ? ` · ${metaText}` : ""}</span>
      </div>
    </li>`;
}

function renderResults(query) {
  const sourceDisc = findSourceDisc(query);

  if (!sourceDisc) {
    results.innerHTML = `<p class="empty">No disc found for "${query}". Try an exact mold name like Destroyer, Buzzz, Envy, Grace, or PA-3.</p>`;
    return;
  }

  const comparable = discs
    .filter((disc) => disc.name !== sourceDisc.name && disc.manufacturer !== sourceDisc.manufacturer)
    .map((disc) => ({ ...disc, distance: scoreDistance(sourceDisc, disc) }))
    .filter((disc) => disc.distance <= 3)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 12);

  const comparableMarkup = comparable.length
    ? comparable.map((disc) => cardTemplate(disc, `Similarity score ${disc.distance.toFixed(1)}`)).join("")
    : `<li class="item"><p class="empty">No close matches found in the current catalog.</p></li>`;

  results.innerHTML = `
    <article class="card">
      <h2>Search match</h2>
      <ul class="list">${cardTemplate(sourceDisc, "")}</ul>
    </article>

    <article class="card">
      <h2>Comparable discs from other manufacturers</h2>
      <p class="meta">Catalog includes major brands (Innova, Discraft, Discmania, MVP family, Trilogy, Prodigy, Kastaplast).</p>
      <ul class="list">${comparableMarkup}</ul>
    </article>
  `;
}

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderResults(searchInput.value);
  }
});
