'use strict';

const greet = require('./lib/greet');
const arithmetic = require('./lib/arithmetic');

let message = greet('world');
let add = arithmetic.add();
let sub = arithmetic.sub();

console.log(message);
console.log(add(1,2));
console.log(sub(3,2));
