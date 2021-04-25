const toggle = document.querySelector('.hamburger-btn');
toggle.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});