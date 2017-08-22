'use strict';
//this is where unit tests will live
//this module should have add and sub methods

let math = module.exports = {};

math.add = function(a, b){
  if((typeof a) && (typeof b) === 'number') {
    let sum = a + b;
    return sum;
  }else{
    return NaN;
  }
};

console.log('should throw a NaN:', math.add('a', 'b'));

math.sub = function(a, b) {
  if((typeof a) && (typeof b) === 'number') {
    let difference = a - b;
    return difference;
  }else{
    return 'Please put in a real number!';
  }
};
