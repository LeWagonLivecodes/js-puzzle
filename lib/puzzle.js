// hint

const button = document.querySelector("#show-hint")
const hint = document.querySelector('.hint')

button.addEventListener('click', () => {
    hint.classList.add('active')
})

// puzzle

const canSwap = (tile) => {
    const empty = document.querySelector('.empty')
    const tileCol = tile.cellIndex
    const tileRow = tile.parentElement.rowIndex
    const emptyCol = empty.cellIndex
    const emptyRow = empty.parentElement.rowIndex

    return (emptyRow === tileRow && tileCol === emptyCol - 1) || // we clicked on the left of the empty
        (emptyRow === tileRow && tileCol === emptyCol + 1) || // we clicked on the right of the empty
        (tileCol === emptyCol && tileRow + 1 === emptyRow) || // we clicked on the top of the empy
        (tileCol === emptyCol && tileRow - 1 === emptyRow) // we clicked on the bottom of the empy
}

const swapTiles = (tile) => {
    const empty = document.querySelector('.empty')
    empty.classList.remove('empty')
    empty.innerText = tile.innerText

    tile.classList.add('empty')
    tile.innerText = ""
}

const checkWin = () => {
    const board = Array.from(document.querySelectorAll('td')).map((td) => td.innerText).join(',')
    const solution = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'
    return board === solution
}

const tiles = document.querySelectorAll('td')

tiles.forEach((tile) => {
    tile.addEventListener('click', (event) => {
        if (canSwap(event.currentTarget)) {
            swapTiles(event.currentTarget)
            if(checkWin()) {
                alert("you won")
            }
        }
    })
})
