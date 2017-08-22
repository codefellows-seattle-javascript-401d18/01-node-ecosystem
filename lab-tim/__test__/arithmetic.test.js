'use strict';

// create an add (2 integers) and sub (2 integers) method
// return the sum or difference respectively
// if arguments are not numbers, return error

const arithmetic = require('../lib/arithmetic');

describe('Testing arithmetic.js', function() {
  describe('#add', () => {
    test('should return numbers added', () => {
      expect(arithmetic.add(10, 5)).toEqual(15)
    })
    test('should return error if arguments are not numbers', () => {
      expect(arithmetic.add('bob', 'jim')).toEqual('Please enter 2 numbers')
    })
  })
  describe('#sub', () => {
    test('should return numbers subtracted', () => {
      expect(arithmetic.sub(10, 5)).toEqual(5)
    })
    test('should return NaN if arguments are not numbers', () => {
      expect(arithmetic.sub('bob', 'jim')).toEqual(NaN)
    })
  })
})
