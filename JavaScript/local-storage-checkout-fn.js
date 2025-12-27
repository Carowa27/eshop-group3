// save product in local storage when pressing buy
export const saveToLSCart = (newItemIndex) => {
  const newItem = Object.values(products)[newItemIndex];
  console.log("ls", getLSCart());
  const LSCart = getLSCart();
  const updateLSCart = () => {
    if ((LSCart == undefined) | (LSCart == null)) {
      console.log("create cart", [{ product: newItem, amount: 1 }]);
      localStorage.setItem(
        "CC-Cart",
        JSON.stringify([{ product: newItem, amount: 1 }])
      );
    } else {
      LSCart.map((prod, i) => {
        if (prod.product.name == newItem.name) {
          console.log("it exists, add amount");
        } else {
          console.log("does not exist, add prod");
        }
      });
    }
  };
  updateLSCart();
};

export const getLSCart = () => {
  return JSON.parse(localStorage.getItem("CC-Cart"));
};
