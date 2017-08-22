'use strict';

const greet = require('../lib/greet')

greet

describe('greet.js', function() {
  describe('default properties', () => {
    test('should have a default name of Isaac', () => {
      expect(greet.sayHello('World')).toEqual('Hello World!')
    })
  })
})
