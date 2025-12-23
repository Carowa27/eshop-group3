export const renderProductCards = (products) => {
  const parent = document.getElementById("product-grid-section");
  const productArray = Object.values(products);
  const productQueues = Object.keys(products);
  parent.innerHTML = productArray
    .map((product, i) => {
      const productQueue = productQueues[i];
      return `<a class="no-link-style" href="/product.html?id=${productQueue}">
        <article class="product-card">
          <div class="card-img-section">
            <img
              src=${product.image.src}
              alt=${product.image.alt}
              class="card-img"
            />
          </div>
         
          <div class="allergens">
           ${product.allergens
             .map((allergen) => {
               if (allergen === "Gluten") {
                 return `<i class="fa-solid fa-wheat-awn" title="Innehåller gluten"></i>`;
               }
               if (allergen === "Mjölk") {
                 return `<i class="fa-solid fa-cow" title="Innehåller mjölkprodukter"></i>`;
               }
               if (allergen === "Ägg") {
                 return `<i class="fa-solid fa-egg" title="Innehåller ägg"></i>`;
               }
               if (allergen === "Nötter") {
                 return `<i class="fa-solid fa-circle" title="Innehåller nötter"></i>`;
               }
             })
             .join(" ")}
          </div>
          <div class="card-info-section">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">
              25kr /st
            </p>
            <p class="product-cart">
              <i class="fa-solid fa-cart-plus"></i>
            </p>
            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </article>
      </a>`;
    })
    .join("");
};
renderProductCards(products);
