// BACKGROUND
// There is a message that is circulating via public media that claims a reader
// can easily read a message where the inner letters of each words is scrambled, 
// as long as the first and last letters remain the same and the word contains 
// allthe letters. Another example shows that it is quite difficult to read the
// text where all the letters are reversed rather than scrambled. 

// In this kata we will make a generator that generates text in a similar pattern, 
// but instead of scrambled or reversed, ours will be sorted alphabetically

// RULES
// INPUT: a string
// OUTPUT: a string where:
  // -the first and last characters remain in original place for each word
  // -characters between the first and last characters must be sorted alphabetically
  // -punctuation should remain at the same place as it started
  // -punctuation does not take the position of the non special characters 
  // -puctuation is limited to hyphen(-), apostrophe('), comma(,) and period(.)
  // -words are seperated by single spaces
  // -only spaces separate words
  // ignore capitalisation
  // for reference: http://en.wikipedia.org/wiki/Typoglycemia

  // EXAMPLES:
  // shan't -> sahn't
  // tik-tak -> tai-ktk
  // -dcba -> -dbca


// SOLUTION
function ScrambleWords(str) {
  // initialize punctuation characters
  const regexp = /[-',.]/
  // create array of words from the input string
  const words = str.split(' ')
  
  // iterate over the words array and transform each word as required
  const scrambledWords = words.map( word => {
    
    // return word immediately if it is one or less characters
    if ( word.length <= 2) {
      return word
    }
    
    // create an array of all characters in the word
    let chars = word.split('')
    
    // find and remove any prefix or suffix punctuation and
    // store in appropriate variables
    const prefix = chars.slice(0, 1)[0].match(regexp) ? chars.shift() : ''
    const suffix = chars.slice(-1)[0].match(regexp) ? chars.pop() : ''
    
    // recreate base word
    word = chars.join('')
    
    // create an array of all inner characters from base word
    const charsUnsorted = word.slice(1, -1)
                          .split('')
    
    // create an array of sorted 'letter' characters from base word
    let charsSorted = charsUnsorted
                      .filter( char => char.match(/[a-z]/) )
                      .sort()
                         
    // initialize innerStr
    let innerStr = ''
    
    // iterate over the unsorted characters to preserve punctuation order
    // populate innerStr with each character from the sorted chars array in order
    charsUnsorted.forEach( char => { 
      if ( char.match(regexp) ) {
        innerStr += char
      } else {
        innerStr += charsSorted.shift()
      }
    })  
    
    // return the fully assembled word
    return prefix + word.slice(0, 1) + innerStr + word.slice(-1) + suffix
  })
  
  // return all fully assembled words as a joined string
  return scrambledWords.join(' ')
};

module.exports = ScrambleWords