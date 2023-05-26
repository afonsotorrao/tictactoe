let gameBoard = document.getElementById("game")
let startGame = document.getElementById("startGame")
let form = document.getElementById("title")
let formDiv = document.getElementById("info")
let activePlayer
let boardArray = []
let cells = document.getElementsByClassName("cell")
let endGame = false
let winner
let player1
let player2
let msg = document.getElementById("msg")
let restart = document.getElementById("restartBtn")
let winMsg
let turn = 0


startGame.addEventListener("click", function initializeGame(e){
    e.preventDefault()
    gameBoard.style.display = "grid"
    form.style.display = "none"
    formDiv.style.display = "none"
    boardArray = []
    endGame = false
    activePlayer = 1
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value
    
    for(i=0; i<cells.length; i++){
        cells[i].style.display = "flex"
        cells[i].innerHTML = ""
        cells[i].classList.add("cellFormat")
    }
})

for(let cell of cells){
    cell.addEventListener("click", function play(){
        if (activePlayer === 1 && endGame == false){
            if(cell.innerHTML == ""){
            turn ++
            cell.innerText = "X"
            gameArray()
            processGame()
            activePlayer = 2
            }}
    
        else if (activePlayer === 2 && endGame == false){
            if (cell.innerHTML == ""){
            turn ++
            cell.innerText = "O"
            gameArray()
            processGame()
            activePlayer = 1
           }}
        else {
            activePlayer = 0
        }
    })}
        
function gameArray(){
    boardArray = []
    for(i=0; i<cells.length; i++){
        boardArray.push(cells[i].innerHTML)
    }
}

function processGame(){

    process1()
    process2()
    process3()
    process4()
    process5()
    process6()
    process7()

    if(endGame == true){
        turn = 0
        winMsg = document.createElement("p")
        winMsg.classList.add("winMsg")
        winMsg.innerHTML = "Congratulations " + winner + ", you've won the game!"
        msg.appendChild(winMsg)

        restart.style.display = "block"
    }
    else if (turn == 9){
        turn = 0
        activePlayer = 0
        winMsg = document.createElement("p")
        winMsg.classList.add("winMsg")
        winMsg.innerHTML = player1 + " and " + player2 + " are too good! Game tied."
        msg.appendChild(winMsg)

        restart.style.display = "block"
    }
    else {}
    }

    function process1(){
        let check1 = boardArray.slice(0,3)
         
        if(check1[0] === check1[1] && check1[1] === check1[2] && (check1[0]!== "" && check1[1]!== "" && check1[2]!== ""))
            {endGame = true
            }
        else {}


        if(check1[0] == "X" && check1[1] == "X" && check1[2] == "X"){
                winner = player1
        }
        else if(check1[0] == "O" && check1[1] == "O" && check1[2] == "O") {
                winner = player2
        }
        else{}
 
    }

    function process2(){
        let check2 = boardArray.slice(3,6)

        if(check2[0] === check2[1] && check2[1] === check2[2] && (check2[0]!== "" && check2[1]!== "" && check2[2]!== ""))
            {endGame = true 
            }
        else {}

        if(check2[0] == "X" && check2[1] == "X" && check2[2] == "X"){
                winner = player1
            }
        else if(check2[0] == "O" && check2[1] == "O" && check2[2] == "O") {
                winner = player2
            }
        else{}
 
    }

    function process3(){
        let check3 = boardArray.slice(6,9)

        if(check3[0] === check3[1] && check3[1] === check3[2] && (check3[0]!== "" && check3[1]!== "" && check3[2]!== ""))
            {endGame = true
            }
        else {}

        if(check3[0] == "X" && check3[1] == "X" && check3[2] == "X"){
            winner = player1
        }
        else if(check3[0] == "O" && check3[1] == "O" && check3[2] == "O") {
            winner = player2
        }
        else{}

    }

    function process4(){
        let check4 = boardArray.slice(0,1).concat(boardArray.slice(3,4), boardArray.slice(6,7))

        if(check4[0] === check4[1] && check4[1] === check4[2] && (check4[0]!== "" && check4[1]!== "" && check4[2]!== ""))
            {endGame = true
            }
        else {}

        if(check4[0] == "X" && check4[1] == "X" && check4[2] == "X"){
            winner = player1
        }
        else if(check4[0] == "O" && check4[1] == "O" && check4[2] == "O") {
            winner = player2
        }
        else{}

        if(check4[0] == "X" && check4[1] == "X" && check4[2] == "X"){
            winner = player1
        }
        else if(check4[0] == "O" && check4[1] == "O" && check4[2] == "O") {
            winner = player2
        }
        else{}
     
    }

    function process5(){
        let check5 = boardArray.slice(0,1).concat(boardArray.slice(4,5), boardArray.slice(8,9))

        if(check5[0] === check5[1] && check5[1] === check5[2] && (check5[0]!== "" && check5[1]!== "" && check5[2]!== ""))
            {endGame = true
            }
        else {}

        if(check5[0] == "X" && check5[1] == "X" && check5[2] == "X"){
            winner = player1
        }
        else if(check5[0] == "O" && check5[1] == "O" && check5[2] == "O") {
            winner = player2
        }
        else{}

    }

    function process6(){
        let check6 = boardArray.slice(2,3).concat(boardArray.slice(4,5), boardArray.slice(6,7))

        if(check6[0] === check6[1] && check6[1] === check6[2] && (check6[0]!== "" && check6[1]!== "" && check6[2]!== ""))
            {endGame = true
            }
        else {}

        if(check6[0] == "X" && check6[1] == "X" && check6[2] == "X"){
            winner = player1
        }
        else if(check6[0] == "O" && check6[1] == "O" && check6[2] == "O") {
            winner = player2
        }
        else{}
  
    }

    function process7(){
        let check7 = boardArray.slice(1,2).concat(boardArray.slice(4,5), boardArray.slice(7,8))

        if(check7[0] === check7[1] && check7[1] === check7[2] && (check7[0]!== "" && check7[1]!== "" && check7[2]!== ""))
            {endGame = true
        }
        else {}

        if(check7[0] == "X" && check7[1] == "X" && check7[2] == "X"){
            winner = player1
        }
        else if(check7[0] == "O" && check7[1] == "O" && check7[2] == "O") {
            winner = player2
        }
        else{}

    }

    restart.addEventListener("click", function restartGame(){
        
        gameBoard.style.display = "grid"
        winMsg.innerHTML = ""
        restart.style.display = "none"
        activePlayer = 1
        boardArray = []
        endGame = false
        activePlayer = 1
        for(i=0; i<cells.length; i++){
        cells[i].innerHTML = ""
    }
    })