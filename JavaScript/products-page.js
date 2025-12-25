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
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">
              25kr /st
            </p>
            <p class="product-cart">
              <i class="fa-solid fa-cart-plus"></i>
            </p>
            
          </div>
        </article>
      </a>`;
    })
    .join("");
};
renderProductCards(products);
