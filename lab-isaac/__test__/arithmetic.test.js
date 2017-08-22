'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function() {
  describe('#add', () => {
    test('should return sum of two integ', () => {
      expect(arithmetic.add(1,2)).toEqual(3);
    })
  })

  describe('#sub', () => {
    test('should return diff of two integ', () => {
      expect(arithmetic.sub(3,2)).toEqual(1);
    })
  })
})
