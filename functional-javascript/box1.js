/*
 * Box:
 * gives us both `map` and clever `inspect` option
 * inspect reminds me of toString()
 * fold removes value from the Box
 * note: the weird formatting with the arrow
 * function returning an object w/in parens

 * nextCharForNumberString:
 * first, it puts str in a box, which
 * allows us to map, or lift it out
 * of its container to perform operations
 * operations on it

 */

// Box : [...]
const Box = (x) =>
({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  inspect: () => `Box(${x})`
})

// nextCharForNumberString : String -> [String]
const nextCharForNumberString = (str) =>
  Box(str).
  map((s) => s.trim()).
  map((s) => new Number(s)).
  map((i) => i + 1).
  map((i) => String.fromCharCode(i)).
  fold((c) => c.toLowerCase())

const result = nextCharForNumberString('  64  ')

console.log(result)


//// refactored code:

//const nextCharForNumberString = (str) =>
//  String.fromCharCode(parseInt(str.trim()) + 1)

//const nextCharForNumberString = (str) => {
//  const trimmed = str.trim()
//  const number = parseInt(trimmed)
//  const nextNumber = number + 1
//  return String.fromCharCode(nextNumber)
//}

