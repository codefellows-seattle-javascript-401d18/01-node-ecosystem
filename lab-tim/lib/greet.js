'use strict';

let Say = module.exports = {};

Say.hello = function(name) {
  if (typeof name === 'string') {
    return `Hello ${name}`
  } else {
    return null
  }
};
