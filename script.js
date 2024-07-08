const gridContainer = document.querySelector("#container");
const sizeInputField = document.querySelector("#size-input-field");
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
}

resizeGrid();