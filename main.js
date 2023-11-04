const icon = document.querySelector("#hamburger");
const menu = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".btn-close");

const toggleMenu = () => {
    menu.style.display = "flex";
    closeMenu.style.display = "flex";
    icon.style.display = "none";
}

closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.style.display = "none";
    icon.style.display = "flex";
});

// Dark Mode 
const root = document.querySelector(":root");
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-high-fill")) {
        root.style.setProperty("--primary-dark", "#1c1c1c");
        root.style.setProperty("--primary-light", "#f2f2f2");
        root.style.setProperty("--primary-semi", "#5a5a5a");
        root.style.transition = "1.5s";
    } else {
        root.style.setProperty("--primary-dark", "#f2f2f2");
        root.style.setProperty("--primary-light", "#1c1c1c");
        root.style.setProperty("--primary-semi", "#c7c7c7");
        root.style.transition = "1.5s";
    }
})

