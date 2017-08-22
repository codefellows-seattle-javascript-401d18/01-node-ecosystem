'use strict';

let greet = module.exports = {};

greet.howdy = function(name) {
  if((typeof name) === 'string') {
    return `hello ${name}`;
  } else {
    return null;
  }
};

console.log('Should through null:', greet.howdy(4));
