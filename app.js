


const openMenuIcon = document.getElementById('menu-toggle-open');
const closeMenuIcon = document.getElementById('menu-toggle-close');
const mobileMenu = document.getElementById('mobile-menu');

openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');
});
closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');
    ;
});