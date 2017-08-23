'use strict';

const greet = require('../lib/greet.js');


describe('index.js', function() {

  describe('Default properties', () => {
    test('should return hello concatenated with the argument', () => {
      expect(greet('world')).toEqual('hello world.');
    });

    test('should return null if not a string', () => {
      expect(greet(1)).toBeNull();
    });
  });
});
