'use strict';

const arithmetic = require('../lib/arithmetic');

describe('index.js', function() {
  describe('#plus', () => {
    test('The answer should be 16', () =>{
      expect(arithmetic.plus(8, 8)).toEqual(16);
    })
  })
})

describe('index.js', function() {
  describe('#minus', () => {
    test('The answer should be 4', () =>{
      expect(arithmetic.minus(8, 4)).toEqual(4);
    })
  })
})
