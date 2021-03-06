'use strict';

const arithmetic = require('../lib/arithmetic');

describe('arithmetic.js', function(){
  describe('default properties', () =>  {//describe('#add', ()=>{})
    test('should return the sum of 4 and 2 which is 6', () => {
      expect(arithmetic.add(2, 4)).toEqual(6);//
    });
    test('should return null');//should return NaN if args are not numbers
     //expect(math.add(2,2)).toEqual(4)
  });
});

describe('arithmetic.js', function(){
  describe('default properties', () =>  {
    test('should return the difference of 4 and 2 which is 2', () => {
      expect(arithmetic.sub(4, 2)).toEqual(2);
    });
    test('should return null');
  });
});
