'use strict';

const greet = require('../lib/greet');

describe('index.js', function() {
  describe('arg', () => {
    test('Should return hello world!', () => {
      expect(greet('world')).toEqual('hello world!');
    });
  });
});
