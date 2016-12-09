'use strict'

const str = `cat mat bat Hat ?at 0at`
// note that within sets, although ? is a meta-char, no need to esc. it
const regex = /[^a-zA-Z?]at/g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))
