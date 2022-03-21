const squareCode = function(message) {
  let encodedMsg = "";
  const matrix = generateMatrix(message);

  // Operate top to bottom, left to right
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== undefined) { // check if value exists
        encodedMsg += matrix[j][i];
      } else {
        break;
      }
    }
    encodedMsg += " ";
  }
  return encodedMsg;
}

function generateMatrix(message) {
  const msg = message.replaceAll(" ", "");
  const len = msg.length;
  const sqr = Math.ceil(Math.sqrt(len)); // Square root of length rounded up

  // Create empty matrix to map our encoded message
  const matrix = [];

  // Create empty outer number of arrays (Y)
  for (let i = 0; i < len / sqr; i++) {
    matrix.push([]);
  }

  // Create empty inner arrays (X)
  let t = 0; // Global tally needed to tell inner loop when to stop
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; (j < sqr) && (t < len); j++) {
      matrix[i].push("");
      t++;
    }
  }

  // populate matrix with characters
  let y, x = 0;
  for (let i = 0; i < len; i++) {
    y = i / sqr | 0; // determine Y index based on square
    x = i % sqr; // use modulo to loop X through sqr length only
    matrix[y][x] = msg[i];
  }
  return matrix;
}

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


/*
f e e d
t h e d
o g


h a v e
a n i c
e d a y
*/