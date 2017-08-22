'use strict';

let arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  let num1 = Number(a);
  let num2 = Number(b);
  return (num1 + num2);
};

console.log('Should throw a NaN:',arithmetic.add('a', 'b'));

arithmetic.sub = (a, b) => {
  let num1 = Number(a);
  let num2 = Number(b);
  return (num1 - num2);
};

console.log('Should throw a NaN:', arithmetic.sub('a', 'b'));
