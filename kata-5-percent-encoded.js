const urlEncode = function(text) {
  let newString = "";
  for (const i of text.trim()) { // .trim is needed to remove trailing white space
    newString += i === " " ? "%20" : i; // I love ternary operators
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));