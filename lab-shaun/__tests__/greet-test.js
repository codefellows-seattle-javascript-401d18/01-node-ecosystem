'use strict';

const greet = require('../lib/greet.js');


// describe('../lib/greet.js', function() {
//   describe('default properties', () => {
//     test('should return hello world', () => {
//       expect(greet.hello('world!')).toEqual('hello world!');
//     });
//     test('should return null', ()=>{
//       expect(greet(1)).toBeNull();
//     });
//   });
// });


describe('index.js', function() {

  describe('Default properties', () => {
    test('should return hello concatenated with the argument', () => {
      expect(greet('world')).toEqual('hello world.');
    });

    test('should return null if arg not a string', () => {
      expect(greet(1)).toBeNull();
    });
  });
});
