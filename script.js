const skills = document.querySelector("#skills");
let draggedSkill;

skills.addEventListener("dragstart", (event) => {
  draggedSkill = event.target.closest("[draggable='true']");
  draggedSkill?.classList.add("dragging");
});
skills.addEventListener("dragend", () => {
  draggedSkill?.classList.remove("dragging");
  draggedSkill = undefined;
  localStorage.setItem("uday-skill-order", [...skills.children].map((skill) => skill.textContent.trim()).join("|"));
});
skills.addEventListener("dragover", (event) => {
  event.preventDefault();
  const target = event.target.closest("[draggable='true']");
  if (!target || target === draggedSkill) return;
  const box = target.getBoundingClientRect();
  skills.insertBefore(draggedSkill, event.clientX > box.left + box.width / 2 ? target.nextSibling : target);
});

const savedOrder = localStorage.getItem("uday-skill-order");
if (savedOrder) {
  const order = savedOrder.split("|");
  [...skills.children].sort((a, b) => order.indexOf(a.textContent.trim()) - order.indexOf(b.textContent.trim())).forEach((skill) => skills.appendChild(skill));
}

const clock = document.querySelector("#clock");
const updateClock = () => {
  clock.textContent = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(new Date()).toLowerCase();
};
updateClock();
setInterval(updateClock, 1000);

const heatmap = document.querySelector("#heatmap");
const months = document.querySelector("#contribution-months");
const count = document.querySelector("#contribution-count");
const status = document.querySelector("#contribution-status");

const loadContributions = async () => {
  try {
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/Uday-6145?y=last");
    if (!response.ok) throw new Error("GitHub contribution service unavailable");
    const data = await response.json();
    const contributions = data.contributions || [];
    if (!contributions.length) throw new Error("No contribution data returned");
    const firstDate = new Date(`${contributions[0].date}T00:00:00Z`);
    const lastDate = new Date(`${contributions.at(-1).date}T00:00:00Z`);
    const start = new Date(firstDate);
    start.setUTCDate(start.getUTCDate() - start.getUTCDay());
    const end = new Date(lastDate);
    end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
    const byDate = new Map(contributions.map((day) => [day.date, day]));
    const recent = [];
    for (const date = new Date(start); date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
      const key = date.toISOString().slice(0, 10);
      recent.push(byDate.get(key) || { date: key, count: 0, level: 0 });
    }
    const total = contributions.reduce((sum, day) => sum + day.count, 0);
    count.textContent = `${total} contributions in the last year`;
    status.textContent = "Synced from GitHub";
    months.innerHTML = "";
    recent.forEach((day, index) => {
      const current = new Date(`${day.date}T00:00:00Z`);
      if (current.getUTCDate() <= 7 && current.getUTCDay() === 0) {
        const label = document.createElement("span");
        label.textContent = current.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
        label.style.gridColumn = `${Math.floor(index / 7) + 1}`;
        months.appendChild(label);
      }
    });
    recent.forEach((day) => {
      const cell = document.createElement("i");
      cell.dataset.level = day.level;
      cell.title = `${day.date}: ${day.count} contribution${day.count === 1 ? "" : "s"}`;
      cell.setAttribute("aria-label", cell.title);
      heatmap.appendChild(cell);
    });
  } catch (error) {
    count.textContent = "GitHub activity unavailable";
    status.textContent = "Open GitHub to view live contributions";
    heatmap.innerHTML = "";
  }
};
loadContributions();
