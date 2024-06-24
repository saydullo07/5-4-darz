
const qora = document.querySelector('.qora');
const white = document.querySelector('.white');


qora.addEventListener('click',function () {
    container.style.backgroundColor = 'qora';
    content.style.color = 'white';
})
white.addEventListener('click',function () {
    container.style.backgroundColor = 'white';
    content.style.color = 'qora';
})