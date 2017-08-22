'use strict';

const greet = require('../lib/greet');
describe('greet.js', function(){
  describe('default properties', () => {
    test('should return Hello World!', () => {
      expect(greet.hello('World!')).toEqual('Hello World!');
    });
  });
});
