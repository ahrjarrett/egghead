/*
 * nextCharForNumberString:
 * first, it puts str in a box, which
 * allows us to map, or lift it out
 * of its container to perform operations
 * operations on it
 */

// nextCharForNumberString : String -> [String]
const nextCharForNumberString = (str) =>
  [str].
  map(s => s.trim()).
  map(s => parseInt(s)).
  map(i => i + 1).
  map(i => String.fromCharCode(i))


const result = nextCharForNumberString('  64  ')

//// old code:

//const nextCharForNumberString = (str) =>
//  String.fromCharCode(parseInt(str.trim()) + 1)

//const nextCharForNumberString = (str) => {
//  const trimmed = str.trim()
//  const number = parseInt(trimmed)
//  const nextNumber = number + 1
//  return String.fromCharCode(nextNumber)
//}

console.log(result)
