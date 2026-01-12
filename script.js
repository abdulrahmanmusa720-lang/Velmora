const prices = {
  hoodie: 69.99,
  tshirt: 39.99,
  shorts: 34.99,
  vest: 59.99,
  cap: 24.99,
  wallet: 39.99,
  gloves: 29.99,
  phonecase: 19.99,
  shoes: 89.99,
  backpack: 79.99
};

let selected = "hoodie";
let promo = false;

document.getElementById("product").onchange = e => {
  selected = e.target.value;
};

document.getElementById("promo").onchange = e => {
  promo = e.target.value.toUpperCase() === "VELMORA100";
  document.getElementById("promoText").textContent =
    promo ? "🎁 Free item included" : "";
};

function firstBuyer() {
  return !localStorage.getItem("velmora_bought");
}

function markBought() {
  localStorage.setItem("velmora_bought", "yes");
}

function seasonal() {
  const m = new Date().getMonth();
  if (m === 0) return 0.2;
  if (m === 11) return 0.15;
  return 0;
}

function addBalance(amount) {
  let total = Number(localStorage.getItem("velmora_balance")) || 0;
  total += amount;
  localStorage.setItem("velmora_balance", total.toFixed(2));
  document.getElementById("balance").textContent = total.toFixed(2);
}

document.getElementById("balance").textContent =
  localStorage.getItem("velmora_balance") || "0.00";

document.getElementById("refundBtn").onclick = () => {
  document.getElementById("refundMsg").textContent =
    "Refund request sent (awaiting approval)";
};
