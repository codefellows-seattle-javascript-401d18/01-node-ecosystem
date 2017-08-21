'use-strict';
const greet = require('../lib/greet');



describe('greet.js', function() {

  describe('default properties', () => {
    test('should have hello concatenated with the input', () => {

      expect(greet('world')).toEqual('hello world.');
    });
  });
});
