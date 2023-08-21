function createSudokuBoard() {
    const board = document.getElementById("sudoku-board");
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("div");
        row.className = "sudoku-row";
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("input");
            cell.type = "text";
            cell.className = "sudoku-cell";
            // Defina os números iniciais do Sudoku aqui
            cell.value = "";
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

window.onload = createSudokuBoard;








function isSudokuValid(board) {
    // Verificar linhas
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        for (let j = 0; j < 9; j++) {
            const cellValue = board[i][j];
            if (cellValue !== 0) {
                if (rowSet.has(cellValue)) {
                    return false; // Número repetido na linha
                }
                rowSet.add(cellValue);
            }
        }
    }

    // Verificar colunas
    for (let j = 0; j < 9; j++) {
        const colSet = new Set();
        for (let i = 0; i < 9; i++) {
            const cellValue = board[i][j];
            if (cellValue !== 0) {
                if (colSet.has(cellValue)) {
                    return false; // Número repetido na coluna
                }
                colSet.add(cellValue);
            }
        }
    }

    // Verificar regiões (blocos 3x3)
    for (let blockRow = 0; blockRow < 3; blockRow++) {
        for (let blockCol = 0; blockCol < 3; blockCol++) {
            const blockSet = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const cellValue = board[blockRow * 3 + i][blockCol * 3 + j];
                    if (cellValue !== 0) {
                        if (blockSet.has(cellValue)) {
                            return false; // Número repetido na região (bloco)
                        }
                        blockSet.add(cellValue);
                    }
                }
            }
        }
    }

    return true; // O tabuleiro é válido
}

// Exemplo de uso:
const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

if (isSudokuValid(sudokuBoard)) {
    console.log("O tabuleiro Sudoku é válido.");
} else {
    console.log("O tabuleiro Sudoku não é válido.");
}

