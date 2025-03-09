document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

function toggleMenu() {
    let menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}
