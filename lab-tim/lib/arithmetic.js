'use strict';

let DoMath = module.exports = {};

DoMath.add = function(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'Please enter 2 numbers'
  }
}

DoMath.sub = function(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 - num2
  } else {
    return 'Please enter 2 numbers'
  }
}
