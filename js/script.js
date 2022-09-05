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

//! Rotatable cards
const getTradeColumnParent = document.querySelector(".trade__columns");
const getBtcColumn = document.querySelector(".btc-column");
const getCardColumn = document.querySelector(".card-column")
const getTradeColumnItem = document.querySelectorAll(".trade__column-item");
const getBackSideBtc = document.querySelector(".backside-btc");
const getBackSideCard = document.querySelector(".backside-card")

getTradeColumnParent.addEventListener("click", (event) => {
			if(event.target.classList.contains('backside')){
				if(event.target.classList.contains('backside-btc')){
					getBackSideBtc.classList.toggle('active');
					getBtcColumn.classList.toggle('rotate')
				}
				if(event.target.classList.contains('backside-card')){
					getBackSideCard.classList.toggle('active');
					getCardColumn.classList.toggle('rotate');
				}
			}
})

