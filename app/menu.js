let menuBtn = document.getElementById('menuBtn'),
	menuOpen = document.getElementById('menuOpen'),
	menuClose = document.getElementById('menuClose'),
	menu = document.getElementById('menuList');

function menuToggle() {
	if (menuOpen.classList.contains('mobile-menu__img--active')) {
		// Changing the icons
		menuOpen.classList.remove('mobile-menu__img--active');
		menuClose.classList.add('mobile-menu__img--active');
		// Displaying the menu
		menu.classList.add('header__nav__list--active');
	}
	else {
		// Changing the icons
		menuClose.classList.remove('mobile-menu__img--active');
		menuOpen.classList.add('mobile-menu__img--active');
		// Hiding the menu
		menu.classList.remove('header__nav__list--active');
	}
}