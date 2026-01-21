function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('fa-times');

        menuIcon.classList.add('fa-bars');
    }

    else {
        mobileMenu.classList.add('open');
        menuIcon.classList.add('fa-times');

        menuIcon.classList.remove('fa-bars');
    }
}