const generateHashtag = require(`../hashtagGenerator`)
const { assert } = require('chai')

describe("Tests", () => {
  it("test", () => {
  assert.equal(generateHashtag(""), false, "Expected an empty string to return false")
  assert.equal(generateHashtag(" ".repeat(200)), false, "Still an empty string")
  assert.equal(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
  assert.equal(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
  assert.equal(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
  assert.equal(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
  assert.equal(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
  assert.equal(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
  assert.equal(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
  assert.equal(generateHashtag("a".repeat(140)), false, "Too long")
});
})