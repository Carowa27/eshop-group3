import { getLSCart } from "./local-storage-checkout-fn.js";
document.addEventListener('DOMContentLoaded', function() {
    console.log(getLSCart);
}, false);

function validityCheck() {
    var checkV = event.target.checkValidity();  

  if (checkV == false) {
    console.log('false');
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


