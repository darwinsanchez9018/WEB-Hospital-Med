let menu = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header__nav");

// Cambia el icono al hacer click
menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

// Remueve el icono al hacer scroll
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}