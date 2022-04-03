// initial function to check if given a single style or array of styles
const makeCase = function(input, style) {
  if (typeof(style) === "object") { // check if style is an array
    const arrayPriority = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"]
    // sorts array based on predetermined priority list
    style.sort((a, b) => arrayPriority.indexOf(a) - arrayPriority.indexOf(b));

    // we need a variable to store the results since we will return multiple values.
    let result = "";

    // run approriate function and append result for each style in the array
    for (const s of style) {
      result += checkCase(input, s) + "\n";
    }
    return result.trim(); // trim removes unecessary new line at the end
  } else { // run normal function if not an array
    return checkCase(input, style);
  }
}

// jumps to the respective function
const checkCase = function(input, style) {
  switch (style) {
    case "camel":
      return convertCamel(input);
      break;
    case "pascal":
      return convertPascal(input);
      break;
    case "snake":
      return convertSnake(input);
      break;
    case "kebab":
      return convertKebab(input);
      break;
    case "title":
      return convertTitle(input);
      break;
    case "vowel":
      return convertVowel(input);
      break;
    case "consonant":
      return convertConsonant(input);
      break;
    case "upper":
      return convertUpper(input);
      break;
    case "lower":
      return convertLower(input);
      break;
    default:
      break;
  }
}

const convertCamel = function(input) {
  let converted = "";
  let upperNext = false;
  // check each character one by one
  for (i of input) {
    // if current letter is space, capitalize next
    if (i === " ") {
      upperNext = true;
      // don't add space to result
    } else if (upperNext) {
      converted += i.toUpperCase();
      upperNext = false;
    } else {
      converted += i.toLowerCase();
    }
  }
  return converted;
}

const convertPascal = function(input) {
  // record and convert first letter
  const firstChar = input.charAt(0).toUpperCase();
  // convert rest of the string using existing camel function
  const camel = convertCamel(input.slice(1));
  return firstChar + camel;
}

const convertSnake = function(input) {
  return input.replaceAll(" ", "_"); // space becomes underscore
}

const convertKebab = function(input) {
  return input.replaceAll(" ", "-"); // space becomes hyphen
}

// Very similar to camel, except start with Upper and retain spaces
const convertTitle = function(input) {
    let converted = "";
    let upperNext = true;
    for (i of input) {
      if (i === " ") {
        converted += i;
        upperNext = true;
      } else if (upperNext) {
        converted += i.toUpperCase();
        upperNext = false;
      } else {
        converted += i.toLowerCase();
      }
    }
    return converted;
}

const convertVowel = function(input) {
  const vowels = ["a", "e", "i" , "o", "u"];
  let converted = "";
  for (i of input) {
    if (i === " ") {
      converted += i;
      // convert to upper if character is in vowels list
    } else if (vowels.includes(i)) {
      converted += i.toUpperCase();
      // convert to lower if not
    } else {
      converted += i.toLowerCase();
    }
  }
  return converted;
}

const convertConsonant = function(input) {
  const vowels = ["a", "e", "i" , "o", "u"];
  let converted = "";
  for (i of input) {
    if (i === " ") {
      converted += i;
      // convert to upper if character is NOT in vowels list. ie it's a consonant
    } else if (!vowels.includes(i)) {
      converted += i.toUpperCase();
      // convert to lower if not
    } else {
      converted += i.toLowerCase();
    }
  }
  return converted;
}

const convertUpper = function(input) {
  // convert to upper and replace spaces with underscores
  return input.replaceAll(" ", "_").toUpperCase();
}

const convertLower = function(input) {
  // convert to lower and replace spaces with underscores
  return input.replaceAll(" ", "_").toLowerCase();
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));