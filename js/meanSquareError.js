// PROBLEM
// Complete the function that:
  // 1. accepts two integer arrays of equal length
  // 2. compares the value each array element to the corresponding element in
  //    the other
  // 3. squares the absolute value difference between those two values
  // 4. returns the average of those squared absolute value difference between
  //    each member pair.

// EXAMPLES
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

// SOLUTION
var solution = function(firstArray, secondArray) {
  absDiffs = []
  
  firstArray.forEach( (el, idx) => {
    let value = Math.abs(firstArray[idx] - secondArray[idx])
    value = value ** 2
    absDiffs.push( value )
   })
                     
  const avg = absDiffs.reduce( (x, y) => x + y ) / firstArray.length
  
  return avg
}

module.exports = solution