
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

