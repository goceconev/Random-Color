console.log('Test');

let color = document.getElementById('color');
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {

    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    background.style.background = randomColor;
    color.innerHTML = randomColor;

})