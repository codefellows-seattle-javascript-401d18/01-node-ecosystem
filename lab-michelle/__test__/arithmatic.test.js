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
    test('Addition should not work', () => {
      expect(math.add('Davy Crockett', 'Jimmy')).toEqual('Hey, that is not a number!!!!');
    });
    test('Subtraction should not work', () => {
      expect(math.sub('hey hey we are the monkeys', 'bananas')).toEqual('PUT IN A NUMBER YOU FOOL');
    });
  });
});
