const activeMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.header .primary-navgation')

activeMenu.addEventListener('click', () => {
    activeMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('active')
})

const menuLinks = document.querySelectorAll('.primary-navgation')


for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            activeMenu.classList.remove('fa-x');
            navMenu.classList.remove('active');
        }
    });
}
    