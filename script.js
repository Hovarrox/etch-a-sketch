const gridContainer = document.querySelector("#container");
const sizeInputField = document.getElementsByName("input")[0];
const resizeButton = document.getElementById("set");
const resetButton = document.getElementById("reset");
let gridArray = [];
let gridSize = 16;

function resizeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < gridSize; ++i) {
        let gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        for (let j = 0; j < gridSize; ++j) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridColumn.appendChild(gridItem);
        }
        gridContainer.appendChild(gridColumn);
    }
    enableHover();
}

function enableHover() {
    gridContainer.childNodes.forEach((gridColumn) => gridColumn.childNodes.forEach((gridItem) => gridItem.addEventListener("mouseover", hoverAction)));
}

function hoverAction(item) {
    item.srcElement.classList.add("filled");
    item.srcElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
}

resizeButton.addEventListener("click", function() {
    if (parseInt(sizeInputField.value) > 100) {
        alert("Size cannot be bigger than 100");
        return;
    }
    gridSize = parseInt(sizeInputField.value);
    sizeInputField.value = "";
    resizeGrid();
})

resetButton.addEventListener("click", resizeGrid);

resizeGrid();