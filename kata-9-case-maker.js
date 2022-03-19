const camelCase = function(input) {
  let result = "";
  let capitalizeNext = false;

  for (i of input) {
    if (i === " ") {
      capitalizeNext = true; // if character is a space, next character will be capitalized
      // don't add current character (space)
    } else if (capitalizeNext) { // new word, convert and add first letter
      result += i.toUpperCase();
      capitalizeNext = false;
    } else { // not new word, add letter unchanged
      result += i;
    }
  }
  return result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));