const icon = document.querySelector("#hamburger");
const menu = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".btn-close");

const toggleMenu = () => {
    menu.style.display = "flex";
    closeMenu.style.display = "flex";
}

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
});

// Dark Mode 
const btnMode = document.querySelector(".mode");

