const conditionalSum = function(values, condition) {
  let total = 0;

  // check which condition
  if (condition === "even") {
    for (const num of values) {
      // add value if even
      total += num % 2 ? 0 : num;
    }
  } else {
    for (const num of values) {
      // add value if odd
      total += num % 2 ? num : 0;
    }
  }
  return total;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));