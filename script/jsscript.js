const menutoogle = document.querySelector('.menu-toogle');
const nav = document.querySelector('nav ul');
const navspan1 = document.querySelector('nav div span');
const navspan2 = document.querySelector('nav div span:nth-child(2)');
const navspan3 = document.querySelector('nav div span:nth-child(3)');
const menutoogle2 = document.querySelector('nav ul li a');

menutoogle.addEventListener('click', function () {
    navspan1.classList.toggle('animspan');
    navspan2.classList.toggle('animspan2');
    navspan3.classList.toggle('animspan3');
    nav.classList.toggle('showslide');
})

menutoogle2.addEventListener('click', function () {
    nav.classList.toggle('showslide');
    navspan1.classList.toggle('animspan');
    navspan2.classList.toggle('animspan2');
    navspan3.classList.toggle('animspan3');
})