'use strict';

const arithmetic = require('../lib/arithmetic.js');


describe('../lib/arithmetic.js', function(){
  describe('#add', () => {
    test('should return 6', () => {
      expect(arithmetic.add(4, 2)).toEqual(6);
    });
    test('should return forah', () => {
      expect(arithmetic.add('fo', 'rah')).toEqual('forah');
    });
  });
  describe('#sub', () => {
    test('should return 2', () => {
      expect(arithmetic.sub(4, 2)).toEqual(2);
    });
  });
});
