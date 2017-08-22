'use strict';

let math = module.exports = {};

math.add = function(a, b) {
  let sum = a + b;
  return sum;
};

math.sub = (a, b) => {
  return a - b;
};

//this module should have add and sub methods
// the add method should contain 2 parameters
// these parameters should be numbers and the method should return the sum of the 2 numbers
// the sub method should contain 2 parameters
// these parameters should be numbers and the method should return the first number minus the second number
// decide on the expected behavior for non-number inputs//
