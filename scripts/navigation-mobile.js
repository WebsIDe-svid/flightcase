function openMenu(menu) {
    menu.classList.toggle('open', true);
}

function closeMenu(menu) {
    menu.classList.toggle('open', false);
}

function toggleMenu() {
    let menu = document.getElementById('mobile-menu');
    let icon = document.getElementById('burger-menu');

    if (menu.classList.contains('open')) {
        closeMenu(menu);
        icon.src = "assets/icons/menu-mobile.svg";
        icon.alt = "Menu";
    }
    else {
        openMenu(menu);
        icon.src = "assets/icons/close-white.svg";
        icon.alt = "Close Menu";
    }
}