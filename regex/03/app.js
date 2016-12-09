'use strict'

const str = `http://sunraypoolstx.com
not a web address
http://
https://sunraypoolstx dot com
https://www.sunraypoolstx.com`

// notie that 4th line matches b/c it's greedy...need to make lazy
const regex = /https?:\/\/.+/g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))

//const regex = /a{4}/g

// leaving off the max value means until infinity:
//const regex = /a{5,}/g

// shortcut for /x{0,}/ is below:
//const regex = /a*/

// shortcut for /x{1,}/
//const regex = /a+/

// shortcut for /x{0,1/ (0 or 1 matches of x)
//const regex = /a?/g
