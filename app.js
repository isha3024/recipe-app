let navbar = document.querySelector('.main-navigation');
let menu = document.querySelector('.menu-toggle');
let main = document.querySelector('.main');
let header = document.querySelector('.site-header');

menu.addEventListener('click', () => {
    navbar.classList.toggle('toggled');
})

window.onscroll = () => {
    if(main.offsetTop < window.scrollY - 20){
        header.classList.add('sticky_head');
    }
    else {
        header.classList.remove('sticky_head');
    }
}