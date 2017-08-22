'use-strict';
const greet = require('../lib/greet');



// describe('greet.js', function() {
//
//   describe('default properties', () => {
//     test('should have hello concatenated with the input', () => {
//
//       expect(greet('world')).toEqual('hello world.');
//     });
//   });
// });



describe('index.js', function() {

  describe('Default properties', () => {
    test('should return hello concatenated with the argument', () => {

      expect(greet('world')).toEqual('hello world.');
    });
  });
});
