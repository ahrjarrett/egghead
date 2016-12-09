'use strict'

// using a 'look ahead' :: `?=` or `?!` inside a capture group
const str = `foo
foobar
foobaz
fooboo`

// ?= means match foo only if followed by bar or boo
const regex = /foo(?=bar|boo)/g

// ?! means match foo only if it's NOT followed by bar or boo
//const regex = /foo(?!bar|boo)/g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))
