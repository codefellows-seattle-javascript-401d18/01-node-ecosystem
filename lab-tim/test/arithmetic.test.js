'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function() {
  test('returns numbers added/subtracted', () => {
    expect(arithmetic.add(10, 5)).toEqual(15)
    expect(arithmetic.sub(10, 5)).toEqual(5)
  })
})
