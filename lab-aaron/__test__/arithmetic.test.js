'use strict';

const arithmetic = require('../lib/arithmetic');
describe('arithmetic.js', function(){
  describe('default properties', () => {
    test('should return Maths!', () => {
      expect(arithmetic.add(2, 3)).toEqual(5);
    });
  });
  describe('default properties', () => {
    test('should return Maths!', () => {
      expect(arithmetic.sub(4, 3)).toEqual(1);
    });
  });
});
