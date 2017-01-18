const Box = require('./Box')

const moneyToFloat = (str) =>
  Box(str)
  .map((s) => s.replace(/\$/g, ''))
  .map((i) => parseFloat(i))

const percentToFloat = (str) =>
  Box(str.replace(/\%/g, ''))
  .map((replaced) => parseFloat(replaced))
  .map((number) => number * 0.01)

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFloat(discount)
    .fold(savings =>
      cost - cost * savings))

const result = applyDiscount('$100.40', '31.1%')
console.log(result)


//// old refactored code:
// parseFloat(str.replace(/\$/g, ''))

//const percentToFloat = (str) => {
//  const replaced = str.replace(/\%/g, '')
//  const number = parseFloat(replaced)
//  return number * 0.01
//}

//const applyDiscount = (price, discount) => {
//  const cost = moneyToFloat(price)
//  const savings = percentToFloat(discount)
//  return cost - cost * savings
//}

