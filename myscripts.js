function makeGrid () {
    gridSize = parseInt(prompt("Enter a grid size between 1-100"));
    while (isNaN(gridSize) || (gridSize < 1) || (gridSize > 100)){
        gridSize = parseInt(prompt("Grid size must be a number between 1-100"));
    }
}





const containerDiv = document.querySelector('#gridContainer');
//for loop to make each row of the grid
for (i = 0; i < 16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('gridRow');
    containerDiv.append(rowDiv);
    
//loop for each column
    for ( j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList.add('gridSquare');
        rowDiv.append(div);
        console.log("box added");
    }
}
//color the squares
const squares = document.querySelectorAll('.gridSquare');
squares.forEach((square) => {
    square.addEventListener('mouseover', ()=> {
        square.classList.add('coloredSquare');
    })
})
//button to control grid size

const sizeButton = document.querySelector('#gridSize') ;
sizeButton.addEventListener('click', makeGrid);


