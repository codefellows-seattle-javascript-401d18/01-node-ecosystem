'use strict';
//write a function that takes in a string as an argument
//returns 'hello '+ name
//returns null if not a string

const greet = require('../lib/greet');//bringing in this module

describe('greet.js', function(){ //describe('Testing: index.js', function)
  describe('default properties', () =>  {
    test('should return hello and the name passed as argument!', () => {
      expect(greet.hello('world!')).toEqual('hello world!');//greet('scott')
    });
    //test('should return null if arg not a string')
    //  expect(greet(1)).toBeNull()
  });
});
