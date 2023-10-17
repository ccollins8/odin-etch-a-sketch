const container = document.querySelector('.container')
let grid = 16;

// create grid
function createGrid() {
    for (let i = 1; i <= grid; i++) {
        const row = document.createElement('div')
        for (let j = 1; j <= grid; j++) {
            const tile = document.createElement('div')
            tile.classList.add('tile')
            tile.style.backgroundColor = 'red'
            tile.style.height = `${960/grid}px`
            tile.style.width = `${960/grid}px`
            // tile.style.margin = '8px'
            row.appendChild(tile);
        }
        container.appendChild(row)
        row.style.display = 'flex'
    }

    // make tiles change color with hover
    const tiles = document.querySelectorAll('.tile')

    tiles.forEach(tile => {
    
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = 'green';
    })

});
}

createGrid();

// button that allows user to change grid
const button = document.querySelector('button')

button.addEventListener('click', () => {
    grid = prompt('Enter number of rows and columns: ');
    if (grid <= 100) {
        container.innerHTML = "";
        createGrid()
    } else {
        alert('Do not exceed 100')
    }
    
})
