'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function() {
  test('returns numbers added/subtracted', () => {
    expect(arithmetic.add(10, 5)).toEqual(15)
    expect(arithmetic.sub(10, 5)).toEqual(5)
  })
  test('if not numbers return error message', () => {
    expect(arithmetic.add('bob', 'jim')).toEqual('Please enter 2 numbers')
    expect(arithmetic.sub('bob', 'jim')).toEqual('Please enter 2 numbers')
  })
})
