//PROBLEM
// Given a 2D rectangular matrix, return all of the values in a single, linear 
// array in spiral order. Start at (0, 0) and first include everything in the 
// first row. Then down the last column, back the last row (in reverse), and 
// finally up the first column before turning right and continuing into the 
// interior of the matrix.

// Input:
  // A set of nested arrays (ie. a matrix)
// Output:
  // A single array containing all values from the matrix in 'spiral order'

//EXAMPLE:

//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
//  13 14 15 16

// Returns:
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// DATA STRUCTURE:
// Nested array/matrix

// ALGORITHM
// GIVEN A MATRIX WITH TWO COORDINATE VALUES [x, y] OF SIZE [xMax, yMax]
// Check if input matrix is square (ie. all sub-arrays are same length)
  // return false if not square
// Create an output array
// Initialize matrixSize to 
// Initialize yMin to 0
// Initialize xMin to 1
// Access the first element in the matrix [0, 0]

// Increment the y value until y == yMax
// Decrement yMax
// Increment the x value until x == xMax
// Decrement xMax

// Decrement the y value until y == yMin
// Increment yMin
// Decrement the x value until x == xMin
// Increment xMin

// Break when count = matrixSize

function spiralTraversal(matrix) {
  if ( ! isSquare(matrix) ) return false;

  const linearArray = []
  let matrixSize = matrix[0].length * matrix.length
  
  let yMin = 0
  let xMin = 0
  let xMax = matrix.length - 1
  let yMax = matrix[0].length - 1
  
  let xPos = 0
  let yPos = 0
  
  let direction = 'right'

  for ( count = 0; count < matrixSize; count++ ) {
    linearArray.push(matrix[xPos][yPos])
    if (count === matrixSize) { break }

    switch ( direction ) {
      case 'right':
        yPos += 1
        if ( yPos === yMax ) {
          yMax -= 1;
          direction = 'down'
        }
        break;
      case 'down':
        xPos += 1
        if ( xPos === xMax ) {
          xMax -= 1;
          direction = 'left'
        }
        break;
      case 'left':
        yPos -= 1
        if ( yPos === yMin ) {
          xMin += 1;
          direction = 'up'
        }
        break;
      case 'up':
        xPos -= 1
        if ( xPos === xMin ) {
          yMin += 1;
          direction = 'right'
        }
        break;
    }
  }

  return linearArray
}

// checks if Matrix is a full grid (ie. all rows equal length)
function isSquare(matrix) {
  const size = matrix[0].length
  return matrix.every( array => array.length === size)
}

module.exports = spiralTraversal