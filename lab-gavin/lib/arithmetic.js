'use-strict';


let CoolMath = module.exports = {};


CoolMath.add = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    throw new Error('Both arguments must be numbers');
  }
};

CoolMath.sub = function (c, d) {
  if (typeof c === 'number' && typeof d === 'number'){
    return c - d;
  } else {
    throw new Error('Both arguments must be numbers');
  }
};
