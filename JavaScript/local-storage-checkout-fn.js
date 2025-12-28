export const addToLSCart = (newItemIndex) => {
  const newItem = Object.values(products)[newItemIndex];
  const LSCart = getLSCart();
  const newArray = LSCart && LSCart.length > 0 ? LSCart : [];
  const updateLSCart = () => {
    if ((LSCart == undefined) | (LSCart == null)) {
      localStorage.setItem(
        "CC-Cart",
        JSON.stringify([{ product: newItem, amount: 1 }])
      );
    } else {
      const existsInArray = LSCart.some(
        (prod) => prod.product.name == newItem.name
      );
      if (existsInArray === true) {
        LSCart.map((prod, i) => {
          if (prod.product.name == newItem.name) {
            const updatedProduct = {
              product: prod.product,
              amount: prod.amount + 1,
            };
            newArray.splice(i, 1, updatedProduct);
            localStorage.setItem("CC-Cart", JSON.stringify(newArray));
          }
        });
      } else {
        newArray.push({ product: newItem, amount: 1 });
        localStorage.setItem("CC-Cart", JSON.stringify(newArray));
      }
    }
  };
  updateLSCart();
};

export const subtractToLSCart = (subItemIndex) => {
  const subItem = Object.values(products)[subItemIndex];
  const LSCart = getLSCart();
  const newArray = LSCart && LSCart.length > 0 ? LSCart : [];
  const updateLSCart = () => {
    // if amount == 0 remove item
    const existsInArray = LSCart.some(
      (prod) => prod.product.name == subItem.name
    );
    if (existsInArray === true) {
      LSCart.map((prod, i) => {
        if (prod.product.name == subItem.name) {
          if (prod.amount === 1) {
            newArray.splice(i, 1);
            localStorage.setItem("CC-Cart", JSON.stringify(newArray));
          } else {
            const updatedProduct = {
              product: prod.product,
              amount: prod.amount - 1,
            };
            newArray.splice(i, 1, updatedProduct);
            localStorage.setItem("CC-Cart", JSON.stringify(newArray));
          }
        }
      });
    }
  };
  updateLSCart();
};

export const getLSCart = () => {
  return JSON.parse(localStorage.getItem("CC-Cart"));
};
