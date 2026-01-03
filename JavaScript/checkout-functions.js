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

const expanderElement = document.getElementById("products");
const iconElement = document.getElementById("icon-span");
function expand() {

    if (expanderElement.style.display === "block") {
      expanderElement.style.display = "none";
      iconElement.classList.add('fa-chevron-down');
      iconElement.classList.remove('fa-chevron-up');
    } else {
      expanderElement.style.display = "block";
      iconElement.classList.remove('fa-chevron-down');
      iconElement.classList.add('fa-chevron-up');
    }
}

window.addEventListener('resize', changeSize);
function changeSize(){
   if (window.innerWidth > 750) {
      expanderElement.style.display = "block";
   } else if (window.innerWidth < 750) {
      expanderElement.style.display = "none";
      iconElement.classList.add('fa-chevron-down');
      iconElement.classList.remove('fa-chevron-up');
   } else {
      expanderElement.style.display = "none";
      iconElement.classList.add('fa-chevron-down');
      iconElement.classList.remove('fa-chevron-up');
   }
}