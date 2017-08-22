'use strict';

let math = module.exports = {};

math.add = function(a, b) {
  if ((typeof a) && (typeof b) === 'number') {
    let sum = a + b;
    return sum;
  } else {
    return 'Hey, that is not a number!!!!';
  }
};

math.sub = (a, b) => {
  if ((typeof a) && (typeof b) === 'number') {
    let minusAmount = a - b;
    return minusAmount;
  } else {
    return 'PUT IN A NUMBER YOU FOOL';
  }
};
