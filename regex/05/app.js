'use strict'

const str = `Aeiou $100 55.5%`
const regex = /\S/g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))

// these are exactly the same
//const regex = /[a-zA-z0-9]/
//const regex = /\w/

/* KEY */
// \s = shite wpace
// \w = [a-zA-z0-9]
// \d = [0-9]

/* NEGATIONS */
// [^\w] = \W
// [^\s] = \S
// [^\d] = \D
