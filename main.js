let menuNav = document.querySelector('.menu__nav')
let burger = document.querySelector('.menu__nav-burger')
let body = document.querySelector('body')
burger.onclick = function() {
burger.classList.toggle('active')
menuNav.classList.toggle('active')
body.classList.toggle('overflow')
}
