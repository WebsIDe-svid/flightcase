function openMenu(menu) {
    menu.classList.toggle('open', true);
}

function closeMenu(menu) {
    menu.classList.toggle('open', false);
}

function toggleMenu() {
    let menu = document.getElementById('mobile-menu');

    if (menu.classList.contains('open')) {
        closeMenu(menu);
    }
    else {
        openMenu(menu);
    }
}