const wrapper = document.querySelector(".wrapper")
const burger = document.querySelector(".burger")
const body = document.body
const navList = document.querySelector(".nav__list")
const inner = document.querySelector(".header__inner")
const pageWidth = document.documentElement.scrollWidth

burger.addEventListener("click", openBurger)

if (pageWidth >= 800){
	burger.classList.add('hidden')
	navList.classList.remove('hidden')
}else{
	burger.classList.remove('hidden')
	navList.classList.add('hidden')
}

window.addEventListener('resize', function () {
	if (window.matchMedia('(min-width: 800px)').matches) {
		burger.classList.add("hidden")
		navList.classList.remove("hidden")
	} else {
		burger.classList.remove('hidden')
		navList.classList.add('hidden')
	}
})

function openBurger (){
	wrapper.classList.toggle("hidden")
	body.classList.toggle("noscroll")
	inner.classList.toggle("inner__burger")
	navList.classList.toggle("hidden")
	navList.classList.toggle("nav__list-burger")

	function closeBurgerLink(){
			wrapper.classList.add('hidden')
			body.classList.remove('noscroll')
			inner.classList.remove('inner__burger')
			navList.classList.add('hidden')
			navList.classList.remove('nav__list-burger')
	}

	navList.addEventListener("click", closeBurgerLink)
}

const button = document.querySelector(".descr__button")