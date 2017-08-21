'use strict'

let greetThing = module.exports = {}

greetThing.hello = function(name){
  return 'hello ' + name + '!'
}
