import { getLSCart } from "./local-storage-checkout-fn.js";

// Fetch products in cart on page load
document.addEventListener('DOMContentLoaded', function () {

  const inCart = JSON.parse(localStorage.getItem("CC-Cart"));
  const parent = document.getElementById("products");
  const totalSum = document.getElementById("total-sum");
  const totalDiscount = document.getElementById("total-discount");
  let totalCost = 0;
  let totalOff = 0;

//Visualise and calculate cost for each product type in cart
  inCart.forEach(element => {
    const specificCupCake = element.product;
    const numberOfCupCakes = element.amount;
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
              <button>-</button>
              <input type="number" step="1" min="1" value="${numberOfCupCakes}" /><button>+</button>
            </div>
          </div>
        </article>`;
  });
  if (totalCost > 0) {
      totalSum.innerHTML = "Totalt: " + totalCost + " kr"; 
  }
  if (totalOff > 0) {
      totalDiscount.innerHTML = "Din rabatt: " + totalOff + " kr";
  }
}, false);

//Check the form input
function validityCheck() {
  var checkV = event.target.checkValidity();

  if (checkV == false) {
    event.target.reportValidity();
  }
}

//Format card number automatically
function formatCardNumber() {
  var cardNumber = document.getElementById("cardnumber");
  var value = cardNumber.value.replace(/\D/g, '');
  var formattedValue = "";
  for (var i = 0; i < value.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }
  cardNumber.value = formattedValue;
}

function expand() {
  const expanderElement = document.getElementById("products");
  const iconElement = document.getElementById("icon-span");
    if(expanderElement.style.display === "block") {
      expanderElement.style.display = "none";
      iconElement.classList.add('fa-chevron-down');
      iconElement.classList.remove('fa-chevron-up');
    } else {
      expanderElement.style.display = "block";
      iconElement.classList.remove('fa-chevron-down');
      iconElement.classList.add('fa-chevron-up');
    }
}
