'use strict'

let greet = module.exports = {}

greet.hello = function(name){
  if (name) {
    return 'hello ' + name
  } else {
    return null
  }
}
