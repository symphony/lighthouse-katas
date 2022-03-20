const urlDecode = function(text) {
  const resultObj = {};
  // we need to set up a couple variables to tell our loop how to handle each character
  let isKey = true;
  let ignoreNext = 0; // integer so it can be used as a countdown
  // array to hold data for our current key value pair
  let tempPair = ["", ""];
  // [1] is "key", [0] is "value". Index can be called using +isKey

  for (const i of text) {

    // Check conditions for special characters
    if (ignoreNext > 0) {
      ignoreNext --; // count down by 1
      continue; // skip to next character
    }

    if (i === "%") {
      ignoreNext = 2; // sets up to skip the next 2 characters in string
      tempPair[0] += " ";
      continue;
    }

    if (i === "=") { // signifies end of the key name
      isKey = false;
      continue;
    }

    if (i === "&") { // signifies end of value data
      resultObj[tempPair[1]] = tempPair[0]; // save pair to object
      tempPair = ["", ""]; // reset pair
      isKey = true;
      continue;
    }

    // If all other conditions fail, store character in respective index
    tempPair[+isKey] += i; // +sign converts boolean to 1 or 0

  }
  // reached end of url. store pair and return result
  resultObj[tempPair[1]] = tempPair[0];
  return resultObj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);