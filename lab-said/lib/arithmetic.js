'use strict';

let Arith = module.exports = {};
Arith.add = function(num1,num2) {
  return ('the sum is' , num1 + num2 );
};

Arith.sub = function(num1,num2) {
  return ('the sub is ' , num2 - num1);
};
