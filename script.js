document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
        card.classList.toggle("hidden");
    });
});
