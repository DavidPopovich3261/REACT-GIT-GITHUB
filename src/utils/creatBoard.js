
export function creatBoard(rows, cols, bombsNum) {
    const board = []
    const bombsIndex = []
    while (bombsIndex.length < bombsNum) {
        const rend = Math.floor(Math.random() * (rows * cols));
        if (!bombsIndex.includes(rend)){
            bombsIndex.push(rend)  
        }
    }    
    for (let i = 0; i < rows * cols; i++) {
        if (bombsIndex.includes(i)) {
            board.push({ className: "bomb" })
        } else {
            board.push({ className: "none" })
        }
    }
    return board
}
