// PROBLEM
// Complete the function scramble(str1, str2) that returns true if a portion of
// str1 characters can be rearranged to match str2, otherwise returns false.

// RULES
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered (ie. for large input strings)

// EXAMPLES
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False



// For this solution - it is necessary to iterate over only the
// unique characters from the second input string.  This is because
// when given large input sets of tens of thousands of characters
// the difference might be between 7 or 10,000 iterations

function scramble(str1, str2) {
  return uniqCharacters(str2).every( char => {
    return countCharacters(str1, char) >= countCharacters(str2, char)
  })
}

// return array of all unique characters from a string
const uniqCharacters = ( str ) => [...new Set(str.split(''))]

// return the count of a given character in a string
const countCharacters = ( str, char ) => str.split(char).length

module.exports = scramble