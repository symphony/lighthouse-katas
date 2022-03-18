const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let total = 0;
  for (const letter of data) {
    // use .includes method to check if letter is in vowels list
    total += vowels.includes(letter.toLowerCase()) // true or false is automatically converted to 1 or 0
  }
  return total;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));