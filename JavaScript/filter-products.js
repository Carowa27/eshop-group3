export const productFilterHTML = (products) => {
  const parent = document.getElementById("filter-section");
  const productArray = Object.values(products);

  let allergenArray = [];
  let categoryArray = [];

  productArray.map((prod) => {
    console.log(prod.name);
    prod.allergens.map((a) => {
      const allergenAlreadyInArray = allergenArray.some(
        (allergen) => allergen === a
      );
      console.log("allergenAlreadyInArray", allergenAlreadyInArray);
      if (allergenAlreadyInArray === false) {
        allergenArray.push(a);
      }
    });
    const categoryAlreadyInArray = categoryArray.some(
      (category) => category === prod.category
    );
    console.log("categoryAlreadyInArray", categoryAlreadyInArray);
    if (categoryAlreadyInArray === false) {
      categoryArray.push(prod.category);
    }
  });
  console.log("arrays", allergenArray, categoryArray);

  //create html for filter
};
productFilterHTML(products);
export const filterFn = (filterAttr) => {
  //create rendering of correct products
  console.log("filter by", filterAttr);
};
