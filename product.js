// =======================
// Rendera produkt
// =======================
function renderProduct(product) {
    // Sidtitel
    document.title = `${product.name} | Cups & Cakes`;

    // Produktnamn
    document.getElementById("product-name").textContent = product.name;

    // Allergener
    const allergenContainer = document.getElementById("allergen-label");
    allergenContainer.innerHTML = "";

    if (product.allergens && product.allergens.length > 0) {
        product.allergens.forEach(allergen => {
            const p = document.createElement("p");
            p.textContent = allergen;
            allergenContainer.appendChild(p);
        });
    }

    // Beskrivning
    document.getElementById("product-description").innerHTML =
        product.description.trim();

    // Bild
    const img = document.getElementById("product-image");
    img.src = product.image.src;
    img.alt = product.image.alt;

    // Ingredienser
    document.getElementById("product-ingredients").innerHTML =
        product.ingredients;

    // Näringsinnehåll
    const nutritionList = document.getElementById("product-nutrition");
    nutritionList.innerHTML = "";

    product.nutrition.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="label">${item.label}</span>
            <span class="value">${item.value}</span>
        `;
        nutritionList.appendChild(li);
    });
}

    // Skapar andra köpte också-lista och sorterar bort "current"
function renderOthersLike(currentProductId) {
    const container = document.getElementById("others-list");
    if (!container) return;

    container.innerHTML = "";

    Object.entries(products)
        .filter(([id]) => id !== currentProductId)
        .sort(() => 0.5 - Math.random()) // Väljer random produkter
        .slice(0, 6)
        .forEach(([id, product]) => {
            const link = document.createElement("a");
            link.href = `product.html?id=${id}`;
            link.className = "other-link";
            link.setAttribute("aria-label", `Visa produkten ${product.name}`);

            link.innerHTML = `
                <article class="other-item">
                    <img src="${product.image.src}" alt="${product.image.alt}">
                    <p>${product.name}</p>
                </article>
            `;

            container.appendChild(link);
        });
}

// =======================
// Hämta rätt produkt från product-list.js från URL
// =======================
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];

if (!product) {
    document.querySelector("main").innerHTML =
        "<p>Produkten kunde inte hittas.</p>";
} else {
    renderProduct(product);
}

renderOthersLike(productId);

// =======================
// Mängdrabatt-logik, visar att rabatten kommer läggas till i kassan om man valt mer än 10 muffins
// =======================
const quantityInput = document.getElementById("quantity");
const discountHint = document.getElementById("discount-hint");

if (quantityInput && discountHint) {
    quantityInput.addEventListener("input", () => {
        discountHint.hidden = quantityInput.value < 10;
    });
}

// =======================
// Animation på Lägg i varukorg-knappen. OBS ingen funktion ännu som lägger till i varukorg på riktigt
// =======================

const addToCartBtn = document.getElementById("add-to-cart");

if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
        const icon = addToCartBtn.querySelector("i");
        const text = addToCartBtn.querySelector(".btn-text");

        // 1. Laddar
        addToCartBtn.classList.add("loading");
        icon.className = "fa-solid fa-spinner";
        text.textContent = "Lägger till...";

        // 2. Simulera laddning
        setTimeout(() => {
            addToCartBtn.classList.remove("loading");
            addToCartBtn.classList.add("success");

            icon.className = "fa-solid fa-check";
            text.textContent = "Tillagd";

            // 3. Återställ efter kort stund
            setTimeout(() => {
                addToCartBtn.classList.remove("success");
                icon.className = "fa-solid fa-bag-shopping";
                text.textContent = "Lägg i varukorg";
            }, 2000);

        }, 800);
    });
}
