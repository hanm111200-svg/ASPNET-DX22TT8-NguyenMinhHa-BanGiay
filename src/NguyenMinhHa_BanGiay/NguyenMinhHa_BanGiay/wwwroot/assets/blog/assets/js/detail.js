let qty = 1;
function changeQty(d) {
  qty = Math.max(1, Math.min(10, qty + d));
  document.getElementById("qty").textContent = qty;
}
function selectColor(el, name) {
  document
    .querySelectorAll(".c-opt")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("colorLabel").textContent = name;
}
function selectSize(el, s) {
  document
    .querySelectorAll(".sz-opt:not(.sold)")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("sizeLabel").textContent = "US " + s;
}
function openTab(btn, id) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tab-" + id).classList.add("active");
}
document.querySelectorAll(".thumb").forEach((t) => {
  t.addEventListener("click", () => {
    document
      .querySelectorAll(".thumb")
      .forEach((x) => x.classList.remove("active"));
    t.classList.add("active");
  });
});
document.querySelector(".btn-wish").addEventListener("click", function () {
  this.textContent = this.textContent === "♡" ? "♥" : "♡";
  this.style.color =
    this.textContent === "♥" ? "var(--accent2)" : "var(--muted)";
});
