'use-strict';
const arithmetic = require('../lib/arithmetic');



describe('arithmetic.js', function() {
  describe('default properties', () => {

    test('should sum two numbers', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
    test('Should raise an error if one of the inputs is not a number', function() {
      expect(() => arithmetic.add('0',-2)).toThrowError('Both arguments must be numbers');
    });

    test('should subtract two numbers', () => {
      expect(arithmetic.sub(3, 2)).toEqual(1);
    });
    test('Should raise an error if one of the inputs is not a number', function() {
      expect(() => arithmetic.sub('0',-2)).toThrowError('Both arguments must be numbers');
    });
  });
});
