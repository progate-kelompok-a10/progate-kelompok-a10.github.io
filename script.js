const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function () {
	navbar.classList.add('navbar-active');
});

const closeIcon = document.querySelector('.fa-times');

closeIcon.addEventListener('click', function () {
	navbar.classList.remove('navbar-active');
});
