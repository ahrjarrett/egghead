/* Box:
 * gives us both `map` and clever `inspect` option
 * inspect reminds me of toString()
 * fold removes value from the Box
 * note: the weird formatting with the arrow
 * function returning an object w/in parens
 */

module.exports = (x) =>
({
  map: (f) => Box(f(x)),
  fold: (f) => Box(f(x)),
  inspect: () => `Box(${x})`
})
