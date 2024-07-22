let currentPlayer = "X";
let cells = Array(9).fill(null)
console.log(cells)

function

function handleClick(x){
    cells[x.id] = currentPlayer;
    if(currentPlayer == null){
        cell[x.id] = cuurentPlayer;
    }
    else{
        return;
    }
    x.innerText = currentPlayer;
    if(currentPlayer === "X"){
        currentPlayer = "O"
    }
    console.log(cells)
    console.log(currentPlayer)
}