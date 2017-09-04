'use strict';

const math = require('./lib/arithmetic');
const greet = require('./lib/greet');

console.log('should return Hello World!', greet('World!'));
console.log('should return 4', math.add(2, 2));
console.log('should return 2', math.sub(6, 4));
