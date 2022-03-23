const squareCode = function(message) {
  const msg = message.replace(/ /g, "");
  const len = msg.length;
  const sqr = Math.ceil(Math.sqrt(len)); // Square root of length rounded up
  let encodedMsg = "";

  // outer loop used to shift right horizontally by 1 character at a time
  for (let i = 0; i < sqr; i++) {
    // inner loop grabs each character vertically by jumping by sqr amount
    for (let j = i; j < len; j += sqr) {
        encodedMsg += msg[j];
    }
    encodedMsg += " "; // add space after each encoded "word"
  }
  return encodedMsg.trim();
}

console.log(squareCode("chill out")); // clu hlt io
console.log(squareCode("feed the dog")); // fto ehg ee dd
console.log(squareCode("have a nice day")); // hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots")); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

/* --- Rewrote function to work without arrays. Old code was unnecessarily complicated.. --- */