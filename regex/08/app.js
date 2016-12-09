'use strict'

// word boundaries: \b || \B to negate (or NOT beginning of the word)
const str = `This island is his, it is`

const regex = /\bis\b/g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))
