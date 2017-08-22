'use strict';

const arithmetic = require('../lib/arithmetic');

describe('index.js', function() {
  describe('sum', () => {
    test('Should be 3', () =>{
      expect(arithmetic.add(1,2)).toEqual(3);
    });
  });
});

describe('index.js', function() {
  describe('minus', () => {
    test('Should be 1', () =>{
      expect(arithmetic.sub(3,2)).toEqual(1);
    });
  });
});
