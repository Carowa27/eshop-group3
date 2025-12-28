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
  parent.innerHTML = `<div id="filter-head-wrapper">
    <h4 id="filter-heading">Filter</h4><div id="filter-mobile-caret"><i class="fa-solid fa-caret-down"></i></div></div>
    <div class="filter-radio-section no-top-margin">
      <h5 class="filter-type-heading">Allergen</h5>
      <div class="filter-wrapper">
      ${allergenArray
        .map(
          (a) => `
        <label for="${a}" class="filter-radio-btn">
        <input type="radio" id="${a}" name="taste" value="${a}">
          ${a}
      </label>`
        )
        .join("")}  
        </div>
        
        <h5 class="filter-type-heading">Smak kategori</h5>
      <div class="filter-wrapper">
        ${categoryArray
          .map(
            (cat) => `
        <label for="${cat}" class="filter-radio-btn">
        <input type="radio" id="${cat}" name="category" value="${cat}">
          ${cat}
      </label>`
          )
          .join("")}
      </div>
    </div>`;
};
productFilterHTML(products);
export const filterFn = (filterAttr) => {
  //create rendering of correct products
  console.log("filter by", filterAttr);
};
