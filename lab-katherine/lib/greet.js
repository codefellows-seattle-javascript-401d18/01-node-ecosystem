'use strict'

let greetThing = module.exports = {}

greetThing.hello = function(name){
  if ((typeof name) === 'string') {
    return 'hello ' + name
  } else {
    return null
  }
}
