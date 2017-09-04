'use strict';

const math = require('../lib/arithmetic');

describe('Testing arithmetic.js', function(){
  describe('#add', () => {
    test('shoud take two numbers and return the sum of both', () => {
      expect(math.add(2, 2)).toEqual(4);
    });
    // test('should return Nan if given arguments that are not numbers', () => {
    //   expect(math.add('a', 'b')).toBeNaN();
    //   expect(math.add(1, 'b')).toBeNaN();
    // });
  });

  describe('#sub', () => {
    test('should accept two numbers and return the diffrence', () => {
      expect(math.sub(6, 2)).toEqual(4);
    });
    test('should return NaN if given arguments that are not numbers', () => {
      expect(math.sub('a', 'b')).toBeNaN();
      expect(math.sub(1, 'b')).toBeNaN();
    });
  });
});
