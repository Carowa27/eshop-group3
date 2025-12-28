export const productFilterHTML = (products) => {
  const parent = document.getElementById("filter-section");
  const productArray = Object.values(products);

  let allergenArray = [];
  let categoryArray = [];

  productArray.map((prod) => {
    prod.allergens.map((a) => {
      const allergenAlreadyInArray = allergenArray.some(
        (allergen) => allergen === a
      );
      if (allergenAlreadyInArray === false) {
        allergenArray.push(a);
      }
    });
    const categoryAlreadyInArray = categoryArray.some(
      (category) => category === prod.category
    );
    if (categoryAlreadyInArray === false) {
      categoryArray.push(prod.category);
    }
  });

  parent.innerHTML = `
    <div id="filter-head-wrapper">
      <h4 id="filter-heading">Filter</h4>
      <div id="filter-mobile-caret">
        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
    <div class="filter-box-section no-top-margin">
      <h5 class="filter-type-heading">Allergen</h5>
      <div class="filter-wrapper">
      ${allergenArray
        .map(
          (a) => `
        <label for="${a}" id="box-btn-${a.toLowerCase()}" class="filter-box-btn">
          <input type="checkbox" id="${a}" name="allergen" class="filter-box-input-allergen" value="${a}">
          ${a}
        </label>`
        )
        .join("")}  
      </div>
      <hr/>
      <h5 class="filter-type-heading">Smak kategori</h5>
      <div class="filter-wrapper">
        ${categoryArray
          .map(
            (cat) => `
        <label for="${cat}" id="box-btn-${cat.toLowerCase()}" class="filter-box-btn"
            )}>
        <input type="checkbox" id="${cat}" name="category" class="filter-box-input-cat" value="${cat}">
          ${cat}
        </label>`
          )
          .join("")}
      </div>
    </div>`;

  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("filter-box-input-allergen")) {
      filterFn({ type: "allergen", value: e.target.value });
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("filter-box-input-cat")) {
      filterFn({ type: "category", value: e.target.value });
    }
  });
};
productFilterHTML(products);

let filterArr = [];
export const filterFn = (filterAttr) => {
  const filterInArray = filterArr.some(
    (filter) => filter.value === filterAttr.value
  );
  if (filterInArray === false) {
    filterArr.push(filterAttr);
  } else {
    const filterIndexToRemove = filterArr.indexOf(filterAttr);
    filterArr.splice(filterIndexToRemove, 1);
  }
  console.log("filter by", filterAttr);
  console.log("filter arr", filterArr);
};
