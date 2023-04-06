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
