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
          <div class="card-info-section">
            <h4 class="product-name">${product.name}</h4>
            <p class="product-price">
              25kr /st <br /> 200kr /10st
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
