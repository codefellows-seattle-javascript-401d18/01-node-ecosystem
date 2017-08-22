'use strict';

let arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  let num1 = Number(a);
  let num2 = Number(b);
  return (num1 + num2);
}

arithmetic.sub = (a, b) => {
  let num1 = Number(a);
  let num2 = Number(b);
  return (num1 - num2);
}
