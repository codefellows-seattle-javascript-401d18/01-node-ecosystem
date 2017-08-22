'use strict';

// write a function that takes a string as an argument
// returns 'hello ' + name
// return null if argument is not a string

module.exports = function(name) {
  if (typeof name === 'string') {
    return `Hello ${name}`
  } else {
    return null
  }
};
