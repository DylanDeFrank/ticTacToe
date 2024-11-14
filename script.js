const display = (function () {
    const create = () => {
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
        return {create} 
})()  
let board = display.create()  


function gameController() {
        const intro = (function () {
        let firstPlayer =  prompt('Player 1, enter a name')
        let secondPlayer = prompt('Player 2, enter a name')
        })()
        const player1 = intro.firstPlayer
        const player2 = intro.secondPlayer
        
        
        const players = [
        {
            name: player1,
            piece: 'X',
        
        },
        {
            name: player2,
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
        const move = () => {
            let choice = Number(prompt(board + `\n${activePlayer.name} pick a number to replace`))
            for (let row of board) {
                for (let number of row) {
                    if (number == choice) {
                        row.splice(row.indexOf(number), 1, activePlayer.piece)
                    }
                    
                }
            }
        }
return {intro, switchPlayerTurn, checkBoard, move}
}


    



function screenController() {
    const grid = document.querySelector('.board')

    const createBoard = () => {
        board.forEach ((row) => {
            row.forEach ((number) => {
                const space = document.createElement('button')
                grid.appendChild(space)
            })
            
        })
        
    }
    return {createBoard}
}

const game1 = gameController()
function play() {
    while(game1.checkBoard(board) != true) {
        game1.intro()
        game1.move()
        game1.checkBoard(board)
        game1.switchPlayerTurn()
    }
    alert('Winner!')
}
