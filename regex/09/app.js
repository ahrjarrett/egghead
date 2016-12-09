'use strict'

// BACK REFERENCES
// USE CASE: stripping out html tags
const str = `<b>Bold</b><i>Italics</i>`
const regex = /<(\w+)>(.*)<\/\1>/g

// USE CASE: removing typos
// testRegex looks for any words that are “double-tapped”
const testStr = `it was the the thing thing`
const testRegex = /(\w+)\s?(?=\1)/g

// and this removes them
console.log(str.replace(regex, '$2\n'))


const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))


// \1 represents what we captured in 1st capture group
// remember ?= is a lookahead
//const regex = /(the)\s?(?=\1)/g

// `it was the thing` is printed (second `the ` is removed)
//console.log(str.replace(regex, ''))

