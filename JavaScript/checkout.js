
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
