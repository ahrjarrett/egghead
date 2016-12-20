const data = [[2,3,4], [6,5,7], [9, 10, 11]]

// flattens list to one-dimensional array
const flattenedData = data.reduce((acc, curr) => {
  return acc.concat(curr)
}, [])

console.log(flattenedData)

