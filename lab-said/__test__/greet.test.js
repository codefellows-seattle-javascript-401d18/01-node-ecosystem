'use strict';

const greet = require('../lib/greet');
describe('greet.js', function(){
  test('should return ', () => {
    expect(greet.waw('world')).toEqual('Hello world');
  });
});
