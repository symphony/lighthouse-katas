const queenThreat = function(board) {

  // check cardinal planes
  for (let y = 0; y < board.length; y++) {
    // check if they're on the same horizontal plane
    if (board[y].reduce((a,b) => a + b) > 1) {
      return true;
    }
    // check vertical plane; t is our tally
    for (let t = 0, x = 0; x < board[y].length; x++) {
      t += board[x][y];
      if (t > 1) {
        return true;
      }
    }
  }

  // check diagonal planes
  for (let t = 0, i = 0; i < board.length; i++) {
    for (let j = i + 1; j < board.length; j++) {
      t += board[i][j];
      console.log(i, j, t);
      if (t > 1) {
        return true;
      }
    }
  }

  // failed all checks. no threat detected
  return false;
}

const generateBoard = function(whitePos, blackPos) {
  // first we create an array of arrays representing our board
  const size = 8; // standard board size = 8 x 8
  const board = [];

  // create y elements
  for (let i = 0; i < size; i++) {
    board.push([]);
  }

  // create x elements
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < size; j++) {
      board[j].push(0);
    }
  }

  // now we add in our Queens
  board[whitePos[0]][whitePos[1]] = 1;
  board[blackPos[0]][blackPos[1]] = 1;
  return board;
}

let whiteQueen = [0, 2];
let blackQueen = [1, 3];

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// whiteQueen = [0, 0];
// blackQueen = [5, 7];
// generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));