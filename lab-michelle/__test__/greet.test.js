'use strict';

const greet = require('../lib/greet');

describe('greet.js', function() {
  describe('default properties', () => {
    test('Should return hello world', () => {
      expect(greet.hello('world')).toEqual('hello world!');
    });
    test('Should return hello Bob', () => {
      expect(greet.hello('Bob')).toEqual('hello Bob!');
    });
    test('Should return null', () => {
      expect(greet.hello(NaN)).toEqual(null);
    });
    test('Should return null', () => {
      expect(greet.hello(200)).toEqual(null);
    });
  });
});
