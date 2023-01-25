const solution = require("../meanSquareError")

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
  assert.equal(solution([1,2,3],[4,5,6]), 9)
  assert.equal(solution([10,20,10,2],[10,25,5,-2]), 16.5)
  assert.equal(solution([0,-1], [-1,0]), 1)
});
});
