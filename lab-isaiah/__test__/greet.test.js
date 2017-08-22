'use strict';

const greet = require('../lib/greet');

describe('greet.js', function() {
  test('Should have a default greeting of hello world', () => {
    expect(greet.howdy('world')).toEqual('hello world');
  });
});
