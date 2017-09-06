'use strict';

const greet = require('../lib/greet');

describe('Testing: greet.js', function(){
  describe('#greet', () => {
    test('should return Hello and a name passed as an argument', () => {
      expect(greet('World!')).toEqual('Hello World!');
      expect(greet('Aaron!')).toEqual('Hello Aaron!');
    });
    test('should return null if argument is not a string', () => {
      expect(greet(1)).toBeNull();
      expect(greet(true)).toEqual(null);
    });
  });
});
