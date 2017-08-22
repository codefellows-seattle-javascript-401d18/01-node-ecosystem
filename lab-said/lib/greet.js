'use strict';

let greet = module.exports = {};
greet.waw = function(yourString) {
  if (typeof yourString ==='string'){
    return `Hello ${yourString}`;
  } else{
    return null;
  }
};
