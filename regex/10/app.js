'use strict'

const str = `12/1/16
11/12/16
12-12-2016
12-16-13`

// only get dates in December 2016
const regex = /^12.+16$/gm

// outside of character class, ^ is used as line-beginning operator
// but this regex doesn't behave as expected w/o the `m` flag (multiline)
//const regex = /^12/gm
// basically says “The definition of a line includes a line break (e.g. \n)”

console.log(regex.exec(str))

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))
