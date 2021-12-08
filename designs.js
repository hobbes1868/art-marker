// Select color input
// Select size input
// set global variables to get canvas element,height,width

let colorPicker = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

//An event listener when Submit button is clicked .
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();

    // get height,width of the grid 
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight").value;
    makeGrid(width, height);
    // When size is submitted by the user, call makeGrid()
})

function changeColor() {
    this.style.background = colorPicker.value;
}

function makeGrid(width, height) {
    canvas.innerHTML = '';
    for (let r = 0; r < width; r++) {
        let row = canvas.insertRow();
        for (let c = 0; c < height; c++) {
            let cell = row.insertCell();
            cell.onclick = changeColor;
        }
    }
}

makeGrid(25, 25); //  defalut size and can be changed