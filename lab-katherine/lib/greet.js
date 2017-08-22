'use strict'

let greetThing = module.exports = {}

greetThing.hello = function(name){
  if (name) {
    return 'hello ' + name
  } else {
    return null
  }
}
