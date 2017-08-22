'use strict';
//this is where modules will live

let newName = module.exports = {};

newName.hello = function(name){
  if((typeof name) === 'string') {
    return `hello ${name}`;
  } else {
    return null;
  }
};

console.log('This should throw a null:', newName.hello(8));
