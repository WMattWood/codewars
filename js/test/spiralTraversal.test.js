const spiralTraversal = require('../spiralTraversal')

const { assert } = require('chai')

describe("Test for spiralTraversal", () => {
  const matrix1 = [[1,  2,  3,  4], [5,  6,  7,  8], [9,  10,  11,  12], [13,  14,  15,  16] ]
  const matrix2 = [[1,  2,  3,  4], [5,  6,  7,  8], [9,  10,  11,  12], [13,  14,  15] ]
  const matrix3 = [[1,  2,  3], [5,  6,  7], [9,  10,  11]]
  const matrix4 = [[1,  2,  3], [5,  6,  7], [9,  10,  11], [13,  14,  15] ]
  it ("Test", ()=> {
    assert.deepEqual( spiralTraversal(matrix1), [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
    assert.deepEqual( spiralTraversal(matrix2), false)
    assert.deepEqual( spiralTraversal(matrix3), [1, 2, 3, 7, 11, 10, 9, 5, 6])
    assert.deepEqual( spiralTraversal(matrix4), [ 1, 2, 3, 7, 11, 15, 14, 13, 9, 5, 6, 10] )
  })
})