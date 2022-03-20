const calculateChange = function(total, cash) {
  const totalChange = {};
  const bills = [
    {name: "twentyDollar", value: 2000},
    {name: "tenDollar", value: 1000},
    {name: "fiveDollar", value: 500},
    {name: "twoDollar", value: 200},
    {name: "oneDollar", value: 100},
    {name: "quarter", value: 25},
    {name: "dime", value: 10},
    {name: "nickle", value: 5},
    {name: "penny", value: 1}
  ];
  let change = cash - total;

  // iterate through bills list starting with the largest
  for (const bill of bills) {
    // count how many times the current bill fits into the remaining change
    let count = change / bill.value;
    // if more than one, then increase tally and update remaining change
    if (count > 1) {
      totalChange[bill.name] = count | 0; // round down using bitwise OR
      change %= bill.value;
    }
    if (change === 0) { // break out of loop when remainder is 0
      return totalChange;
    }
  }
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));