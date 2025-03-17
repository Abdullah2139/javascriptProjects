const newBtnColor = document.getElementById("color-button");
const spanText = document.getElementById("current-color");

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const randomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return color;
}

const changeColor = () => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    spanText.innerText = color;
}

newBtnColor.addEventListener('click', changeColor);
changeColor();