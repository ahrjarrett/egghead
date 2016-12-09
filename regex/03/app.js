'use strict'

const str = `Cat
sat on
the hat.`
const regex = /.../g

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, (str) =>
      `<span>${str}</span>`
    )
}

output(str, regex, document.querySelector('pre'))

