let currentSize = 16;

function onHover(e) {
    e.target.classList.add("grid-hover");
}

function resetGrid() {
    gridItems = Array.from(document.querySelectorAll(".grid-element"));
    gridItems.forEach((item) => {
        item.classList.remove("grid-hover");
    })
}




function makeGrid(gridSize) {
    if (gridSize > 100 || isNaN(gridSize)) {
        alert("Max Grid Size is 100");
        return;
    } 

    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        container.appendChild(gridRow);

        for (let j = 0; j < gridSize; j++) {
            
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            gridElement.addEventListener("mouseover", onHover);

            gridRow.appendChild(gridElement);
        }
    }    
}


let resizeBtn = document.querySelector(".resize");

resizeBtn.addEventListener("click", () => {

    const newSize = document.querySelector(".slider").value;
    makeGrid(Number(newSize));
    return;
})



makeGrid(currentSize);
