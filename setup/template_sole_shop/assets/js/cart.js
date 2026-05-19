const qtys = { q1: 1, q2: 1 };
const prices = { q1: 5200000, q2: 2890000 };
function fmt(n) {
  return n.toLocaleString("vi-VN") + "₫";
}
function chQty(qid, pid, d, price) {
  qtys[qid] = Math.max(1, Math.min(5, qtys[qid] + d));
  document.getElementById(qid).textContent = qtys[qid];
  document.getElementById(pid).textContent = fmt(qtys[qid] * price);
  updateTotals();
}
function updateTotals() {
  let sub = 0;
  for (const k in qtys) {
    const ci = document.getElementById(k.replace("q", "ci"));
    if (ci && ci.style.display !== "none") sub += qtys[k] * prices[k];
  }
  document.getElementById("subtotal").textContent = fmt(sub);
  const disc = Math.round(sub * 0.1);
  document.getElementById("discount").textContent = "−" + fmt(disc);
  document.getElementById("grandTotal").textContent = fmt(sub - disc);
}
function removeItem(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.display = "none";
      updateTotals();
    }, 300);
  }
}
function selectShip(el, cost) {
  document
    .querySelectorAll(".ship-opt")
    .forEach((o) => o.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("shipping").textContent =
    cost === 0 ? "Miễn phí" : fmt(cost);
}
function removeCoupon() {
  document.getElementById("couponApplied").style.display = "none";
  document.getElementById("couponRow").style.display = "flex";
  document.getElementById("discount").textContent = "−0₫";
  updateTotals();
}
function applyCoupon() {
  const v = document.getElementById("couponInp").value.trim().toUpperCase();
  if (v === "SOLE10" || v === "DISTRICT") {
    document.getElementById("couponRow").style.display = "none";
    document.getElementById("couponApplied").style.display = "flex";
    updateTotals();
  } else {
    document.getElementById("couponInp").style.borderColor = "var(--accent2)";
  }
}
