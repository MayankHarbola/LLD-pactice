// https://chatgpt.com/share/6713d6b8-8b54-800f-b12d-36c473013dd0
const readline = require('readline');

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array(size).fill(' '));
    }

    displayBoard() {
        console.log('Current Board:');
        for (let row of this.grid) {
            console.log(row.join(' | '));
        }
    }

    makeMove(row, col, symbol) {
        if (this.isValidMove(row, col)) {
            this.grid[row][col] = symbol;
            return true;
        }
        return false;
    }

    isValidMove(row, col) {
        return this.grid[row][col] === ' ';
    }

    checkWinCondition(symbol) {
        // Check rows
        for (let i = 0; i < this.size; i++) {
            if (this.grid[i].every(cell => cell === symbol)) {
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < this.size; i++) {
            if (this.grid.every(row => row[i] === symbol)) {
                return true;
            }
        }

        // Check main diagonal
        if (this.grid.every((row, index) => row[index] === symbol)) {
            return true;
        }

        // Check anti-diagonal
        if (this.grid.every((row, index) => row[this.size - 1 - index] === symbol)) {
            return true;
        }

        return false;
    }

    checkDraw() {
        for (let row of this.grid) {
            if (row.includes(' ')) {
                return false;
            }
        }
        return true;
    }
}

class Game {
    constructor(player1, player2, size) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.board = new Board(size);
    }

    startGame() {
        this.board.displayBoard();
        this.nextTurn();
    }

    nextTurn() {
        console.log(`${this.currentPlayer.name}'s (${this.currentPlayer.symbol}) turn`);
        this.getPlayerMove();
    }

    switchTurn() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    getPlayerMove() {
        rl.question(`${this.currentPlayer.name}, enter your move row (0 to ${this.board.size - 1}): `, (rowInput) => {
            const row = parseInt(rowInput, 10);
            rl.question(`${this.currentPlayer.name}, enter your move column (0 to ${this.board.size - 1}): `, (colInput) => {
                const col = parseInt(colInput, 10);

                if (this.board.makeMove(row, col, this.currentPlayer.symbol)) {
                    if (this.board.checkWinCondition(this.currentPlayer.symbol)) {
                        this.board.displayBoard();
                        console.log(`${this.currentPlayer.name} wins!`);
                        rl.close();
                    } else if (this.board.checkDraw()) {
                        this.board.displayBoard();
                        console.log("It's a draw!");
                        rl.close();
                    } else {
                        this.switchTurn();
                        this.board.displayBoard();
                        this.nextTurn();
                    }
                } else {
                    console.log('Invalid move. Try again.');
                    this.getPlayerMove();
                }
            });
        });
    }
}

// Command-line interface using Node.js readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Start the game
rl.question("Enter the grid size (e.g., 3 for 3x3, 4 for 4x4): ", (gridSizeInput) => {
    const gridSize = parseInt(gridSizeInput, 10);
    const player1 = new Player('Player 1', 'X');
    const player2 = new Player('Player 2', 'O');

    const game = new Game(player1, player2, gridSize);
    game.startGame();
});
