const data = [[6,5,7], [2,3,4], [9, 10, 11]]

// flattens list to one-dimensional array
const flattenedData = data.reduce((acc, curr) => {
return acc.concat(curr)
}, [])

const input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
]

// going to flat map all actors into single set (no dups)

// nieve implementation (dups included)
const starsNieve = input.reduce((acc, value) => {
  return acc.concat(value.cast)
}, [])

// remember, Array.prototype.indexOf returns index of sought value
const stars = input.reduce((acc, value) => {
  value.cast.forEach((star) => {
    if(acc.indexOf(star) === -1) acc.push(star)
  })

  return acc
}, [])

console.log(stars)

