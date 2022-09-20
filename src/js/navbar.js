const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".body-overlay");

const hideNav = function () {
    mobileNav.classList.remove("show-navbar");
    mobileNav.classList.add("hide-navbar");
    overlay.classList.add("hidden");
};

openNavBtn.addEventListener("click", function () {
    mobileNav.classList.add("show-navbar");
    mobileNav.classList.remove("hide-navbar");
    overlay.classList.remove("hidden");
});

closeNavBtn.addEventListener("click", hideNav);

overlay.addEventListener("click", hideNav);
