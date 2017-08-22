'use strict';

const greet = require('../lib/greet');

describe('greet.js', function(){
  describe('default properties', () =>  {
    test('should return hello world!', () => {
      expect(greet.hello('world!')).toEqual('hello world!');
    });
  });
});
