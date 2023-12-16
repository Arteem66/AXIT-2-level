// ==================BURGER-MENU=============
// ==================BURGER-MENU=============

const wrapper = document.querySelector('.wrapper')
const burger = document.querySelector('.burger')
const body = document.body
const navList = document.querySelector('.nav__list')
const inner = document.querySelector('.header__inner')
const pageWidth = document.documentElement.scrollWidth

burger.addEventListener('click', openBurger)

if (pageWidth >= 800) {
	burger.classList.add('hidden')
	navList.classList.remove('hidden')
} else {
	burger.classList.remove('hidden')
	navList.classList.add('hidden')
}

window.addEventListener('resize', function () {
	if (window.matchMedia('(min-width: 800px)').matches) {
		burger.classList.add('hidden')
		navList.classList.remove('hidden')
	} else {
		burger.classList.remove('hidden')
		navList.classList.add('hidden')
	}
})

function toggleClass(){
	wrapper.classList.toggle('hidden')
	body.classList.toggle('noscroll')
	inner.classList.toggle('inner__burger')
	navList.classList.toggle('hidden')
	navList.classList.toggle('nav__list-burger')
}

function openBurger() {
	toggleClass()
	navList.addEventListener('click', closeBurgerLink)

	function closeBurgerLink() {
		toggleClass()
	}
}

// ===========TAB=============
// ===========TAB=============


let tabButton = document.querySelectorAll('.descr__button')
let slides = document.querySelectorAll('.slide__text')

let activeButton;

tabButton.forEach(item => {
	item.addEventListener('click', function (button) {

		activeButton = Array.from(tabButton).indexOf(button.target)

		if (item == tabButton[0]){
			removeClass()
			addClass(activeButton)
		}else if (item == tabButton[1]) {
			removeClass()
			addClass(activeButton)
		}else{
			removeClass()
			addClass(activeButton)
		}
	})
})

function removeClass(){
	tabButton.forEach(tabButton => {
		tabButton.classList.remove('descr__button-active')
	})

	slides.forEach(slide => {
		slide.classList.remove('slide__text-active')
	})
}

function addClass(index){
	tabButton[index].classList.add('descr__button-active')
	slides[index].classList.add('slide__text-active')
}