const increment = (input) => input += 1
const decrement = (input) => input -= 1
const double = (input) => input *= 2
const halve = (input) => input /= 2

const init_val = 1

// this is pretty elegant: create array of fns, use reduce to call
// in succession (using init_val as 2nd arg to reduce)
const pipeline = [
  increment,
  double,
  decrement
]

const final_val = pipeline.reduce((acc, fn) => fn(acc), init_val)

console.log(final_val) // 3

