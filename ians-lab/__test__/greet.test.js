'use strict';

const greet = require('../lib/greet');

describe('greet.js', function() {
  describe('default properties', () => {
    test('Should return hello world!', () => {
      expect(greet.welcome('world')).toEqual('hello world!');
    })
  })
})
