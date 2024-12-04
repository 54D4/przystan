// JavaScript to toggle the navbar menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {

    menu.classList.toggle('hidden'); // Show/hide the menu
});


