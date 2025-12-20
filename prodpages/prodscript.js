    const quantityInput = document.getElementById("quantity");
    const quantityButtons = document.querySelectorAll(".quantity button");

    quantityButtons.forEach(button => {
        button.addEventListener("click", () => {
            const action = button.dataset.action;
            let currentValue = parseInt(quantityInput.value, 10);

            if (action === "increase") {
                quantityInput.value = currentValue + 1;
            }

            if (action === "decrease" && currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    });