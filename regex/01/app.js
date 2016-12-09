'use strict'

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str => `<span>${str}</span>`)
}

const str = `Is this This?`
const regex = /is/gi

output(str, regex, document.querySelector('pre'))

// NOTES

//var str = `Is this This?`
//var regex = /is/gi

// these two are identical:
// var regex = new RegExp('is')
// var regex = /is/g

// can use .test, but .exec gives us more info
// regex is state-aware; we can run and it remembers last run
//console.log(regex.exec(str))
//console.log(regex.exec(str))

// returns null when it doesn't find 3rd one
//console.log(regex.exec(str))
// also, would loop on the 4th invocation
//console.log(regex.exec(str))

//console.log(str.match(regex))

// replace doesn't mutate original string
//console.log(str.replace(regex, str => 'xx'))

// search returns the index of what it finds
//console.log(str.search(regex))



