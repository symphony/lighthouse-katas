const queenThreat = function(board) {
  // find queen positions from board
  const positions = [];
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length && positions.length < 2; y++) {
      if (board[x][y] === 1) {
        positions.push([x, y])
      }
    }
  }

  const x = positions[0];
  const y = positions[1];

  // check for horizontal and vertical threats
  if (x[0] == y[0] || x[1] == y[1]) {
    return true;
  }

  // check NW > SE diagonal threats
  let tempX = x[0] - x[1];
  let tempY = y[0] - y[1];
  if (tempX === tempY) {
    return true;
  }

  // check NE > SW
  tempX = x[0] + x[1];
  tempY = y[0] + y[1];
  if (tempX === tempY) {
    return true;
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

// test 1
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// test 2
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));