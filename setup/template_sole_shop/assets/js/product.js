function setView(t) {
  const g = document.getElementById("pgrid"),
    gb = document.getElementById("grid-btn"),
    lb = document.getElementById("list-btn");
  if (t === "list") {
    g.classList.add("list-view");
    lb.classList.add("active");
    gb.classList.remove("active");
  } else {
    g.classList.remove("list-view");
    gb.classList.add("active");
    lb.classList.remove("active");
  }
}
function clearAll() {
  document.querySelectorAll(".a-tag").forEach((t) => t.remove());
  document
    .querySelectorAll(".sz-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".c-swatch")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".sb-opt input")
    .forEach((c) => (c.checked = false));
  document
    .querySelectorAll(".brand-btn")
    .forEach((b) => b.classList.remove("active"));
}
document
  .querySelectorAll(".sz-btn")
  .forEach((b) =>
    b.addEventListener("click", () => b.classList.toggle("active")),
  );
document
  .querySelectorAll(".c-swatch")
  .forEach((s) =>
    s.addEventListener("click", () => s.classList.toggle("active")),
  );
document
  .querySelectorAll(".brand-btn")
  .forEach((b) =>
    b.addEventListener("click", () => b.classList.toggle("active")),
  );
document.querySelectorAll(".wish-btn").forEach((b) =>
  b.addEventListener("click", () => {
    b.classList.toggle("liked");
    b.textContent = b.classList.contains("liked") ? "♥" : "♡";
  }),
);
