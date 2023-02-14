// todo
const btn = document.querySelector("#show-hint");

btn.addEventListener("click", () => {
  const hint = document.querySelector(".hint");
  hint.classList.toggle("active");
})

const tiles = document.querySelectorAll("td");

const canMove = (tile) => {
  const empty = document.querySelector(".empty");
  const emptyX = empty.cellIndex;
  const emptyY = empty.parentElement.rowIndex;
  const tileX = tile.cellIndex;
  const tileY = tile.parentElement.rowIndex;
  return (tileX + 1 === emptyX && tileY === emptyY) || // empty is on the right side
    (tileX - 1 === emptyX && tileY === emptyY) || // empty is on the left side
    (tileX === emptyX && tileY + 1 === emptyY) || // empty is on the bottom
    (tileX === emptyX && tileY - 1 === emptyY); // empty is on the top
}

const swapTile = (tile) => {
  const empty = document.querySelector(".empty");
  empty.classList.remove("empty");
  tile.classList.add("empty");

  const number = tile.innerHTML;
  empty.innerHTML = number;

  tile.innerHTML = "";
}

const checkWin = () => {
  const winBoard = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
  const currentBoard = Array.from(tiles).map((tile) => tile.innerHTML).join();
  if(winBoard === currentBoard) {
    alert("You won!");
  }
}

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if(canMove(tile)) {
      swapTile(tile);
      checkWin();
    }
  })
})
