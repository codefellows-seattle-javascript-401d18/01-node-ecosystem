'use strict';


const arithmetic = require('../lib/arithmetic');


describe('Testing arithmetic.js', function() {
  describe('#add', () => {

    test('should add two numbers', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
    test('Should raise error if one of the inputs is NAN', function() {
      expect(() => arithmetic.add('0',-2)).toThrowError('Both arguments must be numbers');
    });
  });

  describe('#sub', () => {
    test('should subtract two numbers', () => {
      expect(arithmetic.sub(3, 2)).toEqual(1);
    });
    test('Should raise an error if one of the inputs is NAN', function() {
      expect(() => arithmetic.sub('0',-2)).toThrowError('Both arguments must be numbers');
      expect(() => arithmetic.sub('0','-2')).toThrowError('Both arguments must be numbers');
    });
  });
});
