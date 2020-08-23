// const anime = require('animejs');

const buttons = document.querySelectorAll('.bottom-navbar button:not(.float)');
const effect = document.querySelector('.effect');
const container = document.querySelector('.container');
let y = 0;
let moveY = 0;
let open = false;

window.addEventListener('touchstart', (evt) => {
    const area = window.innerHeight - evt.touches[0].clientY
    y = area;
    console.log(y);
})

window.addEventListener('touchmove', (evt) => {
    moveY = (window.innerHeight - y) - evt.touches[0].clientY;
    if (!open) {
        anime({
            targets: '.container',
            translateY: `${moveY <= window.innerHeight / 2 ? moveY > 0 ? -moveY : 0 : -window.innerHeight / 2}px`,
            duration: 200,
        })
    } else if (open) {
        moveY = moveY + window.innerHeight / 2;
        anime({
            targets: '.container',
            translateY: `${moveY <= window.innerHeight / 2 ? moveY > 0 ? -moveY : 0 : -window.innerHeight / 2}px`,
            duration: 200,
        })
    }
})

window.addEventListener('touchend', (evt) => {
    y = 0;
    if (moveY > (window.innerHeight / 4)) {
        anime({
            targets: '.container',
            translateY: `-${window.innerHeight / 2}px`,
            duration: 600,
        })
        open = true;
    } else {
        anime({
            targets: '.container',
            translateY: `0px`,
            duration: 600,
            easing: 'easeOutExpo'
        })
        open = false
    }
})


console.log(buttons);

buttons.forEach((item) => {
    item.addEventListener('click', (evt) => {
        const x = evt.target.offsetLeft;
        console.log(x);
        buttons.forEach((btn) => { btn.classList.remove('active') })
        evt.target.classList.add('active')
        anime({
            targets: '.effect',
            left: `${x}px`,
            duration: 600,
        })
    })
})

function handleClickPlus(evt) {
    anime({
        targets: '.container',
        translateY: `-${window.innerHeight / 2}px`,
        duration: 600,
    })

    open = true;
    y = window.innerHeight / 2
    moveY = moveY + window.innerHeight / 2
}