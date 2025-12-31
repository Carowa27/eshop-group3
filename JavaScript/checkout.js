import { subtractToLSCart, getLSCart, addToLSCart } from "./local-storage-checkout-fn.js";
window.addToLSCart = addToLSCart;
window.subtractToLSCart = subtractToLSCart;
window.getLSCart = getLSCart;

// Fetch products in cart on page load
document.addEventListener('DOMContentLoaded', function () {
   const inCart = getLSCart();
  const parent = document.getElementById("products");
  const totalSumElements = Array.from(document.getElementsByClassName("total-sum"));
  const totalDiscountElements = Array.from(document.getElementsByClassName("total-discount"));
  let totalCost = 0;
  let totalOff = 0;

//Visualise and calculate cost for each product type in cart
  inCart.forEach(function (element, i)  {
    const specificCupCake = element.product;
    const numberOfCupCakes = element.amount;
    const productId = element.id;
    let costForEach = 25;
    let discount = 0;

    if (numberOfCupCakes < 10) {
         costForEach = numberOfCupCakes * 25;
    } else if (numberOfCupCakes % 10 == 0) {
        costForEach = numberOfCupCakes * 20;
        discount = (numberOfCupCakes*25) - costForEach;
    } else {
        const remainder = numberOfCupCakes % 10;
        const multiplesOfTen = numberOfCupCakes - remainder;
        costForEach = (remainder * 25) + (multiplesOfTen * 20);
        discount = (numberOfCupCakes * 25) - costForEach;
    }

    totalCost = totalCost + costForEach;
    totalOff = totalOff + discount;
    parent.innerHTML += `
        <article>
          <img src=${specificCupCake.image.src}
          alt=${specificCupCake.image.alt} class="product-img" />
          <div class="product-name">
            <p>${specificCupCake.name}</p>
          </div>
          <div class="product-cost">
            <p>${costForEach} kr</p>
            <div class="amount">
              <button onclick="subtractToLSCart('${productId}')">-</button>
              <input type="number" step="1" min="1" disabled value="${numberOfCupCakes}" /><button onclick="addToLSCart('${productId}')">+</button>
            </div>
          </div>
        </article>`;
  });
  if (totalCost > 0) {
    totalSumElements.forEach(element => {
      element.innerHTML = "Totalt: " + totalCost + " kr"; 
    });
  }
  if (totalOff > 0) {
      totalDiscountElements.forEach(element => {
        element.innerHTML = "Din rabatt: " + totalOff + " kr";
      });
  }
}, false);
