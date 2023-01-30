//Problem
  //Input: a string
  //Output: a string with no spaces and a hash at the beginning
  //Rules:
    // - must start with a hashtag
    // - all words capitalized
    // - return false if final result longer than 140 chars
    // - return false if input string is empty

//Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//Data Structures
// string

//Algorithm
  // if the string is empty return false
  // turn the input string into an array of capitalized words.
    // accept an input string as an argument
    // split the input string into an array of words
    // filter the array of strings
    // capitalize each word in the array
  // join all the words together
  // add a # at the start of the word
  // return false if the final string is greater than 140 chars

//Code

function generateHashtag (str) {
  if (str.trim().length === 0) {
    return false
  }
  
  let split = str.split(' ')
  let words = split.filter( word => word.length > 0)
  let caps = words.map( word => word[0].toUpperCase() + word.slice(1) )
  let outputString = caps.join("")
  outputString = "#" + outputString

  
  if (outputString.length > 140) {
    return false
  }
  
  return outputString
}

module.exports = generateHashtag