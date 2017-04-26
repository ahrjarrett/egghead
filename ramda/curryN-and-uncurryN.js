// curryN allows us to be explicit about how many
// parameters the curried function expects to take

// uncurryN is useful when you’re working with manually-
// curried functions that you don’t have control of,
// and you want to be able to pass it all args at once.


const R = require('ramda')

const add = R.curryN(2, (a, b) => a + b)
const mult = a => b => a * b
const multiply = R.uncurryN(2, mult)
const inc = add(1)

const test1 = add(1)(3)
const test2 = add(1, 10)
const test3 = inc(5)
const test4 = multiply(9, 7)

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
