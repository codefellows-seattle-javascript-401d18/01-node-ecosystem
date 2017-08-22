'use strict';

// write a function that takes a string as an argument
// returns 'hello ' + name
// return null if argument is not a string

const greet = require('../lib/greet');

describe('Testing greet.js', function() {
  describe('#greet', () => {
    test('should return Hello and the name passed as argument', () => {
      expect(greet('Tim')).toEqual('Hello Tim')
    })
    test('should return null if non-string values', () => {
      expect(greet(456)).toEqual(null)
    })
  })
})
