'use strict';

// create an add (2 integers) and sub (2 integers) method
// return the sum or difference respectively
// if arguments are not numbers, return error

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function() {
  describe('#add', () => {
    test('returns numbers added', () => {
      expect(arithmetic.add(10, 5)).toEqual(15)
    })
    test('returns error message if arguments are not numbers', () => {
      expect(arithmetic.add('bob', 'jim')).toEqual('Please enter 2 numbers')
    })
  })
  describe('#sub', () => {
    test('returns numbers subtracted', () => {
      expect(arithmetic.sub(10, 5)).toEqual(5)
    })
    test('returns NaN if arguments are not numbers', () => {
      expect(arithmetic.sub('bob', 'jim')).toEqual(NaN)
    })
  })
})
