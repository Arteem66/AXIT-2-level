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

function openBurger() {
	wrapper.classList.toggle('hidden')
	body.classList.toggle('noscroll')
	inner.classList.toggle('inner__burger')
	navList.classList.toggle('hidden')
	navList.classList.toggle('nav__list-burger')

	navList.addEventListener('click', closeBurgerLink)

	function closeBurgerLink() {
		wrapper.classList.add('hidden')
		body.classList.remove('noscroll')
		inner.classList.remove('inner__burger')
		navList.classList.add('hidden')
		navList.classList.remove('nav__list-burger')
	}
}




let tabButton = document.querySelectorAll('.descr__button')
let slides = document.querySelectorAll('.slide__text')

console.log(tabButton);

Array.from(tabButton).forEach(b => {
	b.addEventListener('click', function () {

		if (b == tabButton[0]){
			tabButton.forEach(tabButton => {
				tabButton.classList.remove('descr__button-active')
			})
			tabButton[0].classList.add('descr__button-active')
			slides.forEach(slide =>{
				slide.classList.remove('slide__text-active')
			})
			slides[0].classList.add('slide__text-active')
		}else if (b == tabButton[1]) {
			tabButton.forEach(tabButton => {
				tabButton.classList.remove('descr__button-active')
			})
			tabButton[1].classList.add('descr__button-active')
			slides.forEach(slide => {
				slide.classList.remove('slide__text-active')
			})
			slides[1].classList.add('slide__text-active')
		}else{
			tabButton.forEach(tabButton => {
				tabButton.classList.remove('descr__button-active')
			})
			tabButton[2].classList.add('descr__button-active')
			slides.forEach(slide => {
				slide.classList.remove('slide__text-active')
			})
			slides[2].classList.add('slide__text-active')
		}
	})
})

