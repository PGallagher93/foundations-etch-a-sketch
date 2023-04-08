
 function createGrid (n) {
    const containerDiv = document.querySelector('#gridContainer');
    //for loop to make each row of the grid
    for (i = 0; i < n; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('gridRow');
        containerDiv.append(rowDiv);
        
    //loop for each column
        for ( j = 0; j < n; j++){
            const div = document.createElement('div');
            div.classList.add('gridSquare');
            rowDiv.append(div);
            console.log("box added");
        }
    }
    //color the squares (maybe add this to a color button)
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach((square) => {
        square.addEventListener('mouseover', ()=> {
            square.classList.add('coloredSquare');
        })
    })
    }

function makeGrid () {
    sizePrompt =prompt("Enter a grid size between 1-64");
        
    if (sizePrompt === null){
         return;
     }
        
    while (isNaN(parseInt(sizePrompt)) || (parseInt(sizePrompt) < 1) || (parseInt(sizePrompt) > 64)){
            if (sizePrompt === null){
                return;
            }
            sizePrompt = prompt("Grid size must be a number between 1-64");
            }
    gridSize = parseInt(sizePrompt);
     //loop through current grid container and delete all grid squares
    const gridContainer = document.querySelector("#gridContainer");
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
        }
    createGrid(sizePrompt)
    }

function resetGrid () {
    squares = document.querySelectorAll(".gridSquare");
    squares.forEach((square) => {
        square.classList.remove('coloredSquare');
    })
}

function erasureMode (){
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach((square) => {
        square.addEventListener('mouseover', ()=> {
            square.classList.remove('coloredSquare');
        })
    })
}


//load up the default grid size 
window.onload = function (){
    createGrid(16);
}
//allow the button to create the grid size
const sizeButton = document.querySelector('#gridSizeButton') ;
sizeButton.addEventListener('click', makeGrid);

//button for reseting the grid
const resetButton = document.querySelector('#resetGridButton');
resetButton.addEventListener('click',resetGrid );

//button for erasure mode
const erasureButton = document.querySelector('#erasureButton');
erasureButton.addEventListener('click', erasureMode);

    
    


