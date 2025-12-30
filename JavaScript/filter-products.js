export const getFilterFromLS = () => {
  return JSON.parse(sessionStorage.getItem("CC-prod-filter"));
};
export const setFilterToLS = (filterAttr) => {
  sessionStorage.setItem("CC-prod-filter", JSON.stringify(filterAttr));
};
export const removeFilterFromLS = () => {
  return sessionStorage.removeItem("CC-prod-filter");
};

export const productFilterHTML = (products) => {
  const parent = document.getElementById("filter-section");
  const productArray = Object.values(products);
  let activeFilter = getFilterFromLS() || [];

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
  const isActiveFilter = (type, value) => {
    return activeFilter.some((f) => f.type === type && f.value === value)
      ? "checked"
      : "";
  };

  let renderHtml = () => {
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
          <input type="checkbox" id="allergen-${a}" name="allergen" class="filter-box-input-allergen" value="${a}" ${isActiveFilter(
            "allergen",
            a
          )}>
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
        <input type="checkbox" id="category-${cat}" name="category" class="filter-box-input-cat" value="${cat}" ${isActiveFilter(
              "category",
              cat
            )}>
          ${cat}
        </label>`
          )
          .join("")}
      </div>
    </div>`;
  };

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

  document.addEventListener("change", (e) => {
    if (e.target.closest(".filter-wrapper")) {
      activeFilter = getFilterFromLS();
      renderHtml();
      isActiveFilter();
    }
  });
  renderHtml();
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

  setFilterToLS(filterArr);
};

let productsToRender = [];
export const filterLogic = (products, filter) => {
  const productArray = Object.values(products);
  let filterArr = filter || [];
  const productsWOAllergens = productArray.filter(
    (prod) =>
      !filterArr.some(
        (filter) =>
          filter.type === "allergen" && prod.allergens.includes(filter.value)
      )
  );
  const categoryFilters = filterArr.filter((f) => f.type === "category");

  if (productsWOAllergens.length > 0) {
    productsToRender = productsWOAllergens.filter((prod) =>
      categoryFilters.every((filter) => prod.category.includes(filter.value))
    );
  } else {
    productsToRender = productArray.filter((prod) =>
      categoryFilters.every((filter) => prod.category.includes(filter.value))
    );
  }
  return productsToRender;
};
filterLogic(products);
