'use strict';

let greeting = module.exports = {}

greeting.welcome = function(name) {
  if (typeof name === 'string') {
    return `hello ${name}!`
  } else {
    return null
  }
}
