'use strict';

// create an add (2 integers) and sub (2 integers) method
// return the sum or difference respectively
// if arguments are not numbers, return error

const doMath = module.exports = {};

doMath.add = function(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'Please enter 2 numbers'
  }
}

doMath.sub = function(num1, num2) {
  return Number(num1) - Number(num2)
}
