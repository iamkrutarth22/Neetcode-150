let board = 
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

const validSudoku = (board,n) =>{

    let row = Array.from({length:n},()=>new Set());
    let col = Array.from({length:n},()=>new Set());
    let boxes = Array.from({length:n},()=>new Set());

    for(let r = 0 ; r < n ; r++){
        for(let c = 0 ; c<n ; c++){
            let val = board[r][c];

            if(val === '.')
                continue;

            if(row[r].has(val))
                return false;
            row[r].add(val)

            if(col[c].has(val))
                return false;
            col[c].add(val)

            let boxCount = Math.floor(r/3)+3+Math.floor(c/3)
            // to determine the  matrix hashset

            if(boxes[boxCount].has(val))
                return false
            boxes[boxCount].add(val);

        }


    }

    return true
}


console.log(validSudoku(board,9));  
