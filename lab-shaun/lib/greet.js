'use strict'

let greet = module.exports = {}

greet.hello = function(name){
  if (typeof name === 'string') {
    return 'hello ' + name + '.';
  } else {
    return null;
  }
};
