const ScrambleWords = require('../typoglycemiaGenerator')

const { assert } = require("chai");

// describe("Basic tests", function(){
//       it("Should pass sample tests", () => {
//       assert.equal(ScrambleWords('professionals'), 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
//       assert.equal(ScrambleWords('i'), 'i', 'Must handle single charater words')
//       assert.equal(ScrambleWords('me'), 'me', 'Must handle 2 charater words')
//       assert.equal(ScrambleWords('you'), 'you', 'Must handle 3 charater words')
//       assert.equal(ScrambleWords('card-carrying'), 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
//       assert.equal(ScrambleWords("shan't"), "sahn't", 'Punctuation should remain at the same place as it started')
//       assert.equal(ScrambleWords('-dcba'), '-dbca', 'Must handle special character at the start')
//       assert.equal(ScrambleWords('dcba.'), 'dbca.', 'Must handle special character at the end')
//       assert.equal(ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
//       })
// })

// Individual Tests Broken Down
test( 'The first and last letters of a word should reamin in place with the inner letters sorted', 
      ()=> expect( ScrambleWords('professionals') ).toBe('paefilnoorsss')
)

test(  'Must handle single character words', 
      ()=> expect( ScrambleWords('i') ).toBe( 'i')
)

test( 'Must handle 2 character words', 
      ()=> expect( ScrambleWords('me') ).toBe( 'me')
)

test( 'Must handle 3 character words',
      ()=> expect( ScrambleWords('you') ).toBe( 'you')
)

test( 'Only spaces separate words and punctuation should remain at the same place as it started', 
      ()=> expect( ScrambleWords('card-carrying') ).toBe( 'caac-dinrrryg')
)

test( 'Punctuation should remain at the same place as it started', 
      ()=> expect( ScrambleWords("shan't") ).toBe( "sahn't")
)

test( 'Must handle special character at the start', 
      ()=> expect( ScrambleWords('-dcba') ).toBe( '-dbca')
)

test( 'Must handle special character at the end', 
      ()=> expect( ScrambleWords('dcba.') ).toBe( 'dbca.')
)

test( 'Must handle a full sentence', 
      ()=> expect( ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") ).toBe( "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.")
)