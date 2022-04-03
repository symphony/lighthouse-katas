const sumLargestNumbers = function(data) {
  let largest = [0, 0]

  for (const i of data) {
    // compare current element with largest number
    if (i > largest[0]) {
      largest[1] = largest[0]; // move old largest to second largest
      largest[0] = i; // update new largest

    // compare current element with second largest number
    } else if (i > largest[1]) { // update new second largest number
      largest[1] = i;
    }
  }
  return largest[0] + largest[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));