const sumLargestNumbers = function(data) {
  // sort numbers from highest to lowest using compare method
  const sorted = data.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));