'use strict'

const str = `800-456-7890
(555) 456-7890
4564567890
303.456.7890`

// this is what you need for filtering phone #s!
const regex = /\(?(\d{3})\)?[\s\.-]?(\d{3})[\s\.-]?(\d{4})/g

console.log(str.replace(regex, '$1$2$3'))

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))


//const str = `foo
//foobar
//foobaz
//fooboo`

/* diff btwn char class and capture group, characters
   are not optional and have to be in this order */
//const regex = /foo(bar|boo)/g

// use $1 to reference index 1 of capture group (non-0 index!)
//console.log(str.replace(regex, '$1'))
//console.log(str.replace(regex, '**$1**'))

// optimization: if you don't want to store $1 in memory, add ?: inside
//const regex = \/\(?(?:\d{3})\)?[\s\.-]?\d{3}[\s\.-]?\d{4}/g
