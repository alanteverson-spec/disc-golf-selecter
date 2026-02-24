const discs = [
  { name: "Destroyer", manufacturer: "Innova", speed: 12, glide: 5, turn: -1, fade: 3 },
  { name: "Wraith", manufacturer: "Innova", speed: 11, glide: 5, turn: -1, fade: 3 },
  { name: "Buzzz", manufacturer: "Discraft", speed: 5, glide: 4, turn: -1, fade: 1 },
  { name: "Zone", manufacturer: "Discraft", speed: 4, glide: 3, turn: 0, fade: 3 },
  { name: "Nuke", manufacturer: "Discraft", speed: 13, glide: 5, turn: -1, fade: 3 },
  { name: "Fuse", manufacturer: "Latitude 64", speed: 5, glide: 6, turn: -1, fade: 0 },
  { name: "River", manufacturer: "Latitude 64", speed: 7, glide: 7, turn: -1, fade: 1 },
  { name: "Pure", manufacturer: "Latitude 64", speed: 3, glide: 3, turn: -1, fade: 1 },
  { name: "Felon", manufacturer: "Dynamic Discs", speed: 9, glide: 3, turn: 0.5, fade: 4 },
  { name: "Judge", manufacturer: "Dynamic Discs", speed: 2, glide: 4, turn: 0, fade: 1 },
  { name: "Trespass", manufacturer: "Dynamic Discs", speed: 12, glide: 5, turn: -0.5, fade: 3 },
  { name: "Hex", manufacturer: "MVP", speed: 5, glide: 5, turn: -1, fade: 1 },
  { name: "Wave", manufacturer: "MVP", speed: 11, glide: 5, turn: -2, fade: 2 },
  { name: "Photon", manufacturer: "MVP", speed: 11, glide: 5, turn: -1, fade: 2.5 },
  { name: "Grace", manufacturer: "Latitude 64", speed: 11, glide: 6, turn: -1, fade: 2 },
  { name: "Envy", manufacturer: "Axiom", speed: 3, glide: 3, turn: 0, fade: 2 },
  { name: "Crave", manufacturer: "Axiom", speed: 6.5, glide: 5, turn: -1, fade: 1 },
  { name: "Votum", manufacturer: "Thought Space Athletics", speed: 7, glide: 5, turn: 0, fade: 2 },
  { name: "Sword", manufacturer: "Westside", speed: 12, glide: 5, turn: -0.5, fade: 2 },
  { name: "Harp", manufacturer: "Westside", speed: 4, glide: 3, turn: 0, fade: 3 },
  { name: "Falk", manufacturer: "Kastaplast", speed: 9, glide: 6, turn: -2, fade: 1 },
  { name: "Lots", manufacturer: "Kastaplast", speed: 9, glide: 5, turn: -1, fade: 2 },
  { name: "PD", manufacturer: "Discmania", speed: 10, glide: 4, turn: 0, fade: 3 },
  { name: "P2", manufacturer: "Discmania", speed: 2, glide: 3, turn: 0, fade: 1 }
];

const searchInput = document.getElementById("disc-search");
const results = document.getElementById("results");

function formatFlight({ speed, glide, turn, fade }) {
  return `${speed} | ${glide} | ${turn} | ${fade}`;
}

function scoreDistance(a, b) {
  return (
    Math.abs(a.speed - b.speed) +
    Math.abs(a.glide - b.glide) +
    Math.abs(a.turn - b.turn) +
    Math.abs(a.fade - b.fade)
  );
}

function findSourceDisc(query) {
  const cleaned = query.trim().toLowerCase();
  if (!cleaned) return null;

  return (
    discs.find((disc) => disc.name.toLowerCase() === cleaned) ||
    discs.find((disc) => disc.name.toLowerCase().includes(cleaned))
  );
}

function renderResults(query) {
  const sourceDisc = findSourceDisc(query);

  if (!sourceDisc) {
    results.innerHTML = `<p class="empty">No disc found for "${query}". Try a common mold name.</p>`;
    return;
  }

  const comparable = discs
    .filter((disc) => disc.name !== sourceDisc.name && disc.manufacturer !== sourceDisc.manufacturer)
    .map((disc) => ({ ...disc, distance: scoreDistance(sourceDisc, disc) }))
    .filter((disc) => disc.distance <= 3)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);

  if (!comparable.length) {
    results.innerHTML = `
      <article class="card">
        <strong>${sourceDisc.name}</strong> <span class="meta">(${sourceDisc.manufacturer})</span>
        <div class="badges">
          <span class="badge">Flight ${formatFlight(sourceDisc)}</span>
        </div>
        <p class="empty">No close matches found in the current sample database.</p>
      </article>
    `;
    return;
  }

  const items = comparable
    .map(
      (disc) => `
        <li class="item">
          <strong>${disc.name}</strong> <span class="meta">(${disc.manufacturer})</span><br/>
          <span class="meta">Flight ${formatFlight(disc)} · Similarity score ${disc.distance.toFixed(1)}</span>
        </li>
      `
    )
    .join("");

  results.innerHTML = `
    <article class="card">
      <strong>${sourceDisc.name}</strong> <span class="meta">(${sourceDisc.manufacturer})</span>
      <div class="badges">
        <span class="badge">Flight ${formatFlight(sourceDisc)}</span>
      </div>
    </article>

    <article class="card">
      <h2>Comparable discs</h2>
      <ul class="list">${items}</ul>
    </article>
  `;
}

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    renderResults(searchInput.value);
  }
});
