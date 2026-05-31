/* QR pattern */
const pat =
  "111000111100111001001000101001001001011101001001011101001001011101001001010000101001110100111000111";
const qg = document.getElementById("qrGrid");
if (qg) {
  pat.split("").forEach((c) => {
    const d = document.createElement("div");
    d.className = c === "1" ? "q" : "w";
    qg.appendChild(d);
  });
}

/* Payment tabs */
function switchPay(btn, id) {
  document
    .querySelectorAll(".pay-tab")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".pay-content")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("pay-" + id).classList.add("active");
}

/* Address */
function pickAddr(card) {
  document
    .querySelectorAll(".addr-card")
    .forEach((c) => c.classList.remove("active"));
  card.classList.add("active");
}
function toggleNewAddr() {
  const f = document.getElementById("newAddrForm");
  f.style.display =
    f.style.display === "none" || f.style.display === "" ? "block" : "none";
}

/* Card formatting */
function fmtCard(inp) {
  let v = inp.value.replace(/\D/g, "").slice(0, 16);
  inp.value = v.replace(/(.{4})/g, "$1  ").trim();
}
function fmtExpiry(inp) {
  let v = inp.value.replace(/\D/g, "").slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + " / " + v.slice(2);
  inp.value = v;
}

/* Place order */
function placeOrder() {
  const btn = document.getElementById("orderBtn");
  btn.innerHTML =
    '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Đang xử lý...';
  btn.style.opacity = "0.75";
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById("successModal").classList.add("show");
  }, 1800);
}
function closeModal() {
  document.getElementById("successModal").classList.remove("show");
  const btn = document.getElementById("orderBtn");
  btn.innerHTML =
    '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Đặt hàng — 7.281.000₫';
  btn.style.opacity = "1";
  btn.disabled = false;
}
document.getElementById("successModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
