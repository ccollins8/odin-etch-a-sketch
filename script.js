const container = document.querySelector('.container')

// create 16x16 grid
for (let i = 1; i <= 16; i++) {
    const row1 = document.createElement('div')
    for (let j = 1; j <= 16; j++) {
        const tile = document.createElement('div')
        tile.style.backgroundColor = 'red'
        tile.style.height = '25px'
        tile.style.width = '25px'
        tile.style.margin = '8px'
        row1.appendChild(tile);
    }
    container.appendChild(row1)
    row1.style.display = 'flex'
}