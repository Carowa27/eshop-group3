// =======================
// Rendera produkt
// =======================
function renderProduct(product) {
    // Sidtitel
    document.title = `${product.name} | Cups & Cakes`;

    // Produktnamn
    document.getElementById("product-name").textContent = product.name;

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

// =======================
// Hämta produkt från URL
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

// =======================
// Mängdrabatt-logik
// =======================
const quantityInput = document.getElementById("quantity");
const discountHint = document.getElementById("discount-hint");

if (quantityInput && discountHint) {
    quantityInput.addEventListener("input", () => {
        discountHint.hidden = quantityInput.value < 10;
    });
}
