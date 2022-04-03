const multiplicationTable = function(maxValue) {
  let table = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += i * j; // add value to existing string
    }
    table += "\n"; // add new line to string after each sub loop
  }
  return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));