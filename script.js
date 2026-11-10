// Shared JavaScript for The Chai Corner (Lab 12)
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.querySelectorAll(".order-button").forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing The Chai Corner! Please visit us to place your order.");
        });
    });

    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = new Date().getFullYear();
});
