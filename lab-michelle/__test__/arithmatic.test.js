'use strict';

const math = require('../lib/arithmatic');

describe('arithmatic.js', function() {
  describe('default properties', () => {
    test('Should return sum', () => {
      expect(math.add(100, 100)).toEqual(200);
    });
    test('Should return subtracted total', () => {
      expect(math.sub(2, 1)).toEqual(1);
    });
  });
});
