'use strict';

const greet = require('../lib/greet');

describe('greet.js', function() {
  test('returns greeting with name', () => {
    expect(greet.hello('Tim')).toEqual('Hello Tim')
  })
  test('return null if non-string values', () => {
    expect(greet.hello(456)).toEqual(null)
  })
})
