const gameBoard = document.querySelector("#gameboard")

const width = 8

const startPiece = [
    chess_rook, chess_knight, chess_bishop, chess_queen, chess_king, chess_bishop, chess_knight, chess_rook,
    '', '', '', '', '', '', '', '',
    chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn, chess_pawn,
    '', '', '', '', '', '', '', '',
    chess_rook, chess_knight, chess_bishop, chess_king, chess_queen, chess_bishop, chess_knight, chess_rook,
]

function createBoard() {
    startPiece.forEach((piece,i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = piece
        square.setAttribute("sqare-id", 1)

        gameBoard.append(square)
    })
}

createBoard()