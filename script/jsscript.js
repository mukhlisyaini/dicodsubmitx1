const menutoogle = document.querySelector('.menu-toogle');
const nav = document.querySelector('nav ul');
const navspan1 = document.querySelector('nav div span');
const navspan2 = document.querySelector('nav div span:nth-child(2)');
const navspan3 = document.querySelector('nav div span:nth-child(3)');

menutoogle.addEventListener('click', function () {
    nav.classList.toggle('showslide');
    navspan1.classList.toggle('animspan');
    navspan2.classList.toggle('animspan2');
    navspan3.classList.toggle('animspan3');
})