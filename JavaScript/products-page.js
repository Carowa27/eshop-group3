import { addToLSCart } from "./local-storage-checkout-fn.js";
window.addToLSCart = addToLSCart;
import {
  filterLogic,
  getFilterFromLS,
  removeFilterFromLS,
} from "./filter-products.js";

// window.addEventListener("pagehide", () => {
//   removeFilterFromLS();
// });

export const renderProductCards = (products) => {
  let chosenFilterAttributes = getFilterFromLS();
  const parent = document.getElementById("product-grid-section");
  const productArray = Object.values(products);
  let productList =
    filterLogic(products, chosenFilterAttributes) || productArray;

  document.addEventListener("change", (e) => {
    if (e.target.closest(".filter-wrapper")) {
      chosenFilterAttributes = getFilterFromLS();
      productList = filterLogic(products, chosenFilterAttributes);
      renderHtml();
    }
  });

  const renderHtml = () => {
    productList.length !== 0
      ? (parent.innerHTML = productList
          .map((product) => {
            const indexOfParenthesis = product.name.indexOf("(");
            const prodName =
              indexOfParenthesis !== -1
                ? product.name.slice(0, indexOfParenthesis).trim()
                : product.name;
            const allergenInfo =
              indexOfParenthesis !== -1 &&
              product.name.slice(indexOfParenthesis);
            return `
        <article class="product-card">
          <div class="card-img-section">
            <a class="no-link-style" href="product.html?id=${product.id}">
              <img
                src=${product.image.src}
                alt="${product.image.alt}"
                class="card-img"
              />
            </a>
          </div>
          <div class="allergens">
            ${product.allergens
              .map((allergen) => {
                if (allergen === "Gluten") {
                  return `<i class="fa-solid fa-wheat-awn fa-icon-border" title="Innehåller gluten"></i>`;
                }
                if (allergen === "Mjölk") {
                  return `<i class="fa-solid fa-cow fa-icon-border" title="Innehåller mjölkprodukter"></i>`;
                }
                if (allergen === "Ägg") {
                  return `<i class="fa-solid fa-egg fa-icon-border" title="Innehåller ägg"></i>`;
                }
                if (allergen === "Nötter") {
                  return `<i class="fa-solid fa-circle fa-icon-border" title="Innehåller nötter"></i>`;
                }
              })
              .join(" ")}
          </div>
          <div class="${
            (product.name.length > 20 && window.innerWidth <= 350) ||
            (product.name.length >= 20 && window.innerWidth > 350)
              ? "card-info-section-long"
              : "card-info-section"
          }">
            <a class="no-link-style product-name" href="product.html?id=${
              product.id
            }">
            <h4 class="product-name">${prodName}
              <span id="allergen-info">${
                allergenInfo !== false ? allergenInfo : ""
              }</span>
            </h4>
            </a>
            <p class="product-price">
              25kr /st
            </p>
            <p class="product-cart" onclick="addToLSCart('${product.id}',1)">
              <i class="cart-icon fa-solid fa-cart-plus fa-icon-clickable"></i>
            </p>
          </div>
        </article>`;
          })
          .join(" "))
      : (parent.innerHTML = `<p>Tyvärr hittade vi inga produkter med dina filter kriterier</p>`);
  };
  renderHtml();
};
renderProductCards(products);
