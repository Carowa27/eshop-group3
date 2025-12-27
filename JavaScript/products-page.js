import { saveToLSCart } from "./local-storage-checkout-fn.js";
window.saveToLSCart = saveToLSCart;

export const renderProductCards = (products) => {
  const parent = document.getElementById("product-grid-section");
  const productArray = Object.values(products);
  const productQueues = Object.keys(products);

  parent.innerHTML = productArray
    .map((product, i) => {
      const productQueue = productQueues[i];
      return `
        <article class="product-card">
          <div class="card-img-section">
            <a class="no-link-style" href="product.html?id=${productQueue}">
              <img
                src=${product.image.src}
                alt=${product.image.alt}
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
          <div class="card-info-section">
            <a class="no-link-style product-name" href="product.html?id=${productQueue}">
              <h4 class="product-name">${product.name}</h4>
            </a>
            <p class="product-price">
              25kr /st
            </p>
            <p class="product-cart" onclick="saveToLSCart('${i}')">
<!--console.log('${product}')-->
              <i class="cart-icon fa-solid fa-cart-plus fa-icon-clickable"></i>
            </p>
          </div>
        </article>`;
    })
    .join("");
};
renderProductCards(products);
