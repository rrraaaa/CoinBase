const getPayment = document.querySelector('.header__payment');
const getHeaderMenu = document.querySelector('.select');
const getMenuButton = document.querySelector('.menu-button');

//! Open / Close menu on click

document.addEventListener("click", closeMenu);
function closeMenu(event) {
	if (event.target.closest('.header__payment')) {
		getHeaderMenu.classList.toggle("select_active");
		getMenuButton.classList.toggle("menu-button_active");
	}
	if (!event.target.closest('form')) {
		getHeaderMenu.classList.remove('select_active');
		getMenuButton.classList.remove("menu-button_active")
	}
}

document.addEventListener('keydown', tapEsc);
function tapEsc(event) {
	if (event.code === 'Escape') {
		getHeaderMenu.classList.remove('select_active');
		getMenuButton.classList.remove("menu-button_active")
	}
}


//!Burger menu
const getBurger = document.querySelector('.menu__burger');
const getList = document.querySelector('.menu__list');
const getBurgerSpan = document.querySelector('.menu__burger-span');

getBurgerSpan.addEventListener('click', openBurger);
function openBurger(event) {
	getBurger.classList.toggle("active")
}

getBurger.addEventListener("click", openBurgerMenu);
function openBurgerMenu(event) {
	getList.classList.toggle('menu__list_active');
	event.target.classList.toggle("active");

}