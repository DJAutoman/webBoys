let animateionEles = document.querySelectorAll('.myanimate');
// let blackCat = document.querySelector('.blackcat');
// let textMore = document.querySelector('.text-more');
let animateDistance = -200;

window.onscroll = function (e) {
    animateionEles.forEach(function (el) {
        if ((innerHeight - (el.offsetTop - scrollY) - el.offsetHeight) >= animateDistance) {
            el.classList.add('run')
        }
    })
}