'use strict';

const greet = require('../lib/greet.js');


describe('../lib/greet.js', function() {
  describe('default properties', () => {
    test('should return hello world', () => {
      expect(greet.hello('world!')).toEqual('hello world!');
    });
    test('should return null', ()=>{
      expect(greet.hello('')).toEqual(null);
    });
  });
});
