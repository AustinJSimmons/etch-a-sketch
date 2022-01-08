function calcDivSize(num) {
    let pixels = 600/num - 2;
    return pixels;
}

function clear() {
     const divs = document.querySelectorAll('.colored');

     divs.forEach((div) => {
        div.classList.remove('colored');
     });
}

function shake() {
    const button = document.querySelector('.clear');
    button.addEventListener('click', clear);
}

function addMousover() {
    const divs = document.querySelectorAll('.ink');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('colored')
        });
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

console.log(document.querySelectorAll('.ink'))