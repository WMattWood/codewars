const titleCase = require('../titleCase')

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.equal(titleCase(''), '')
    assert.equal(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
    assert.equal(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
    assert.equal(titleCase('the quick brown fox'), 'The Quick Brown Fox')
});
});