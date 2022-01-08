function calcDivSize(num) {
    let pixels = 600/num;
    return pixels;
}

function clear() {
     const divs = document.querySelectorAll('.ink');

     divs.forEach((div) => {
        div.style.backgroundColor = 'whitesmoke';
     });
}

function resize() {
    const divs = document.querySelectorAll('.ink');

    divs.forEach((div) => {
        gridContainer.removeChild(div)
    });

    num = Number(prompt('Enter a number < 100'));
    pixels = calcDivSize(num);
    for (let numOfRows = 1; numOfRows <= num; numOfRows++) {
        for (let numberOfDivs = 1; numberOfDivs <= num; numberOfDivs++) {
            let div = document.createElement('div');
            div.classList.add('ink');
            div.style.width = `${pixels}px`;
            div.style.height = `${pixels}px`;
            gridContainer.appendChild(div);
            
        }
    }
    addMousover();
    shake();
}

function shake() {
    const button = document.querySelector('.clear');
    button.addEventListener('click', clear);
}

function resizeButton() {
    const button = document.querySelector('.resize');
    button.addEventListener('click', resize);
}

function rgbButton() {
    const button = document.querySelector('.rainbow');
    button.addEventListener('click', applyRGB);
}

function blackButton() {
    const button = document.querySelector('.black');
    button.addEventListener('click', addMousover);
}

function addMousover() {
    const divs = document.querySelectorAll('.ink');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });
}

function rgb() {
    let x = randomNum();
    let y = randomNum();
    let z = randomNum();
    const rgbArray = [];
    rgbArray[0] = x;
    rgbArray[1] = y;
    rgbArray[2] = z;
    let color = 'rgb(' + rgbArray.toString() + ')';
    return color;
}

function randomNum() {
    let x = Math.floor(Math.random() * 255);
    return x
}

function applyRGB(color) {
    const divs = document.querySelectorAll('.ink');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = rgb();
        })
    });
}






let num = Number(prompt('Enter a number < 100'));
let pixels = calcDivSize(num);

const gridContainer = document.getElementById("grid-container");
for (let numOfRows = 1; numOfRows <= num; numOfRows++) {
    for (let numberOfDivs = 1; numberOfDivs <= num; numberOfDivs++) {
        let div = document.createElement('div');
        div.classList.add('ink');
        div.style.width = `${pixels}px`;
        div.style.height = `${pixels}px`;
        gridContainer.appendChild(div);
        
    }
}

addMousover();
shake();
resizeButton();
rgbButton();
blackButton();

console.log(document.querySelectorAll('.ink'))