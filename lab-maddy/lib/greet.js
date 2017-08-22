'use strict';
//this is where the greet module will live


let newName = module.exports = {};
// module.exports = function(){ //npm run test
//  return 'Hello Scott.' //npm run test after each new added piece of code 
//}

newName.hello = function(name){
  if((typeof name) === 'string') {
    return `hello ${name}`;
  } else {
    return null;
  }
};

console.log('This should throw a null:', newName.hello(8));
