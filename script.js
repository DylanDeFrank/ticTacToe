const create = (function () {
    const board = () => {
        const board = []
        let row = []
        for(let i = 1; i < 10; i++) {
            row.push(i)
            if (i % 3 == 0) {
                board.push(row)
                row = []
            }
        }
        return board
    }
  
return {board} 
})()

let board = create.board()




    function screenController() {
        const grid = document.querySelector('.board')
       
    
        const createBoard = () => {
            for (let row of board) {
                for (let number of row) {
                    const space = document.createElement('button')
                    space.id = number
                    grid.appendChild(space)
                }
            }
        }


   
        return {createBoard}
    }
    
    

    
 


function gameController() {
        const players = [
        {
            name: prompt('Player 1, please enter a name'),
            piece: 'X',
        
        },
        {
            name: prompt ('Player 2, please enter a name'),
            piece: 'O',
        }
        ]
        let activePlayer = players[0]
        
        const switchPlayerTurn = () => {
            activePlayer = activePlayer === players[0] ? players[1] : players[0];
        }
        
        const checkBoard = (board) => {
        const player1Pieces = ['X','X','X'].toString()
        const player2Pieces = ['O', 'O', 'O'].toString()
            for (i = 0; i < 3; i++ ) {
                if (board[i].toString() == player1Pieces) {
                    console.log('Player 1 wins')
                    return true
                }
                else if (board[i].toString() == player2Pieces) {
                    console.log('Player 2 wins')
                    return true
                }
            }
            let check = []
            for (ii = 0; ii < 3; ii++) {
                check = []
                for (i = 0; i < 3; i++) {
                check.push(board[i][ii])
                if (check.toString() == player1Pieces) {
                    console.log('Player 1 wins')
                    return true
                }
                else if (check.toString() == player2Pieces) {
                    console.log('Player 2 wins')
                    return true
                }
              
            }
            let diag = [board[0][0], board[1][1], board[2][2]]
            let diag2 = [board[0][2], board[1][1], board[2][0]]
            if (diag.toString() == player1Pieces| diag2.toString() == player1Pieces) {
                    console.log('Player 1 wins')
                    return true
                }
                else if (diag.toString() == player2Pieces| diag2.toString() == player2Pieces) {
                    console.log('Player 2 wins')
                    return true
                }
              
            
            }
        }
        const move = (choice) => {
            for (let row of board) {
                for (let number of row) {
                    if (number == choice.id) {
                        row.splice(row.indexOf(number), 1, activePlayer.piece)
                        choice.textContent = activePlayer.piece 
                        
                    }
                    
                }
            }
        }
return {switchPlayerTurn, checkBoard, move}
}


    




function play() {
    screenController().createBoard(board)
    const game1 = gameController()
    const tiles = document.querySelectorAll('button')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
        let choice = tile
        game1.move(choice)
        game1.checkBoard(board)
            if (game1.checkBoard(board) == true) {
                return alert('Winner!')
            }
            else game1.switchPlayerTurn()
        })})
    }
