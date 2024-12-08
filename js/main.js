const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('show');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}
