'use strict';

let TheMath = module.exports = {};

TheMath.plus = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'Please make sure you are entering a number!'
  }
}

TheMath.minus = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    return 'Please make sure you are entering a number!'
  }
}
