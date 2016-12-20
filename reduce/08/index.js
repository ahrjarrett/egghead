
const luke = {
  name: "luke skywalker",
  jedi: true,
  parents: {
    father: {
      jedi: true
    },
    mother: {
      jedi: false
    }
  }
}

const han = {
  name: "han solo",
  jedi: false,
  parents: {
    father: {
      jedi: false
    },
    mother: {
      jedi: false
    }
  }
}

const anakin = {
  name: "anakin skywalker",
  jedi: true,
  parents: {
    mother: {
      jedi: false
    }
  }
}

const characters = [luke, han, anakin]

// problem here is that anakin has no father,
// could lead to undefined exception, e.g.:
//characters.forEach(function(character) {
//  console.log(`${character.name}'s father was a jedi: ${character.parents.father.jedi}`)
//})

// this is a cool function, read thru once more
const fatherWasJedi = (char) => {
  let path = 'parents.father.jedi'
  return path.split('.').reduce((obj, field) => {
    if(obj) return obj[field]
    return false
  }, char)
}

// now fatherWasJedi lets us inspect object safely, w/o throwing exception
characters.forEach((character) => {
  console.log(`${character.name}'s father was a jedi: ` + fatherWasJedi(character))
})
