/* NOTES


  * R.INVERT
  * R.invert takes a data structure that looks like this:

  * {
  *   'a' : 9,
  *   'and' : 9,
  *   'be' : 10,
  *   ...
  * }

  * ...and turns it into one that looks like this:
  * {
  *   '9': [
        'a',
        'and'
      ],
      '10': [
        'be'
      ],
      ...
  * }

  * Translated into words, that’s the equivalent of saying:
  * “The word ‘a’ and ‘and’ occur 9 times.”
  * “The word ‘b’ occurs 10 times.”

  * ...and changing the structure to be:
  * “There are 9 instances of the following words: ‘a’, ‘and’, ...”
  * “There are 10 instances of the following words: ‘be’...”


  * R.MAP
  * From the Ramda docs:
  * R.map takes a function and a functor,
  * applies the function to each of the functor's values,
  * and returns a functor of the same shape.
  *

  * We use R.map in this case to apply a function
  * (R.sortBy)
  * to an object of whose keys correspong to arrays

  * TODO: make a better test than a console.log

  */

// Reference: Two contactenated paragraphs from “Bloody Meridian” by Cormac McCarthy
const text = `The truth about the world,
  he said, is that anything is possible.
  Had you not seen it all from birth and
  thereby bled it of its strangeness it
  would appear to you for what it is, a
  hat trick in a medicine show, a fevered
  dream, a trance bepopulate with chimeras
  having neither analogue nor precedent,
  an itinerant carnival, a migratory
  tentshow whose ultimate destination after
  many a pitch in many a mudded field is
  unspeakable and calamitous beyond reckoning.
  The universe is no narrow thing and the
  order within it is not constrained by any
  latitude in its conception to repeat what
  exists in one part in any other part.
  Even in this world more things exist
  without our knowledge than with it and
  the order in creation which you see is
  that which you have put there, like a
  string in a maze, so that you shall not
  lose your way. For existence has its own
  order and that no man’s mind can compass,
  that mind itself being but a fact among
  others.” `

const R = require('ramda')


// countWords : Text -> Object
const countWords = R.compose(
  R.map(R.sortBy(R.identity)),
  R.invert,
  R.countBy(R.toLower),
// a reusable regular expression is /\w+/g, below:
  R.match(/\w+/g)
)

// example usage:
console.log(countWords(text))
module.exports = countWords

// Tip: Start with regular expression,
// then move on to a composition pipeline
