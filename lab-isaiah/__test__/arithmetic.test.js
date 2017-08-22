'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function() {
  describe('#add', () => {
    test('Should return the sum of two integers', () => {
      expect(arithmetic.add(1, 2)).toEqual(3);
    });
  });
  describe('#sub', () => {
    test('Should return the sum of two integers', () => {
      expect(arithmetic.sub(3, 1)).toEqual(2);
    });
  });
});
