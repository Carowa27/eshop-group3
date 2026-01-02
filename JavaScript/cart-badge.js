import { getLSCart } from "./local-storage-checkout-fn.js";

const updateCartBadge = () => {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const cart = getLSCart();

  if (!Array.isArray(cart) || cart.length === 0) {
    badge.hidden = true;
    badge.textContent = "";
    return;
  }

  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  if (totalAmount <= 0) {
    badge.hidden = true;
    badge.textContent = "";
    return;
  }

  badge.textContent = totalAmount > 9 ? "9+" : totalAmount;
  badge.hidden = false;
};

/* 🔒 VIKTIGT FÖR MOBIL: vänta på DOM */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  // Lyssna på egna event (lägg till / ta bort)
  document.addEventListener("cartUpdated", updateCartBadge);

  // iOS/Safari fallback
  window.addEventListener("pageshow", updateCartBadge);
});
