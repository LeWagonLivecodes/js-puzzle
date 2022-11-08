// hint
const btn = document.getElementById("show-hint")

btn.addEventListener('click', () => {
    const hint = document.querySelector(".hint")
    hint.classList.add('active')
})

// game

const tiles = document.querySelectorAll('td')

const canMove = (tile) => {
    // TODO: add actual logic
    const x = tile.cellIndex
    const y = tile.parentElement.rowIndex
    const empty = document.querySelector('.empty')
    const emptyX = empty.cellIndex
    const emptyY = empty.parentElement.rowIndex

    return y === emptyY && x + 1 === emptyX || // empty is on the right side
        y === emptyY && x - 1 === emptyX || // empty is on the left side
        x === emptyX && y + 1 === emptyY || // empty is on the bottom
        x === emptyX && y - 1 === emptyY // empty is on the top
}

const swapTile = (tile) => {
    const empty = document.querySelector('.empty')
    empty.classList.remove('empty')
    empty.innerText = tile.innerText

    tile.classList.add('empty')
    tile.innerText = ''
}

const checkWin = () => {
    const sol = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'
    const userTry = Array.from(tiles).map((tile) => tile.innerText).join()
    if(sol === userTry) {
        alert("You won")
    }
}

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        if (canMove(tile)) {
            swapTile(tile)
            checkWin()
        }
    })
})