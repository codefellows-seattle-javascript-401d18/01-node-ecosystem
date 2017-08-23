'use strict'

let arithmetic = module.exports = {}

arithmetic.add = function(a, b){
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
} else {
  throw new Error('Both arguments must be numbers'){
  }
};

arithmetic.sub = function(c, d){
  if (typeof a === 'number' && typeof b === 'number')
    return c - d;
} else {
  throw new Error('Both arguments must be numbers'){
  }
};
