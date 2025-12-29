import { getLSCart } from "./local-storage-checkout-fn.js";
document.addEventListener('DOMContentLoaded', function () {

  const inCart = JSON.parse(localStorage.getItem("CC-Cart"));
  const parent = document.getElementById("products");
  const totalSum = document.getElementById("totalSum");
  console.log(inCart);
  let totalCost = 0;

  inCart.forEach(element => {
    const eachElement = element.product;
    const numberOfCupCakes = element.amount;
    const costForEach = numberOfCupCakes * 25;
    totalCost = totalCost + costForEach;
    console.log(costForEach);
    parent.innerHTML += `
        <article>
          <img src=${eachElement.image.src}
          alt=${eachElement.image.alt} class="product-img" />
          <div class="product-name">
            <p>${eachElement.name}</p>
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

  totalSum.innerHTML = "Summa: " + totalCost; 
}, false);

function validityCheck() {
  var checkV = event.target.checkValidity();

  if (checkV == false) {
    event.target.reportValidity();
  }
}

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


