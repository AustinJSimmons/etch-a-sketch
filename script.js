function drawGrid(num, pixels) {
    for (let numOfRows = 1; numOfRows <= num; numOfRows++) {
        for (let numberOfDivs = 1; numberOfDivs <= num; numberOfDivs++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.classList.add('colored');
            } );
            const gridContainer = document.getElementById("grid-container");
            div.classList.add('ink');
            div.style.width = `${pixels}px`
            div.style.height = `${pixels}px`
            gridContainer.appendChild(div);
        }
    }
}

function calcDivSize(num) {
    let pixels = 600/num - 2;
    return pixels;
}


let num = Number(prompt('Enter a number < 100'));
let pixels = calcDivSize(num);
drawGrid(num, pixels);
console.log(document.querySelectorAll('#grid-conatiner'));
