'use strict';

const greet = require('./lib/greet.js');

describe('greet.js', function() {
  test('returns greeting with name', () => {
    expect(greet('Tim').toEqual('Hello Tim'))
  })
})
