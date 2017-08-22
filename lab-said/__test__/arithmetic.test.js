const arithmetic = require('../lib/arithmetic');
describe('arithetic.js', function() {
  describe('default properties', () => {
    test('should return ', () => {
      expect(arithmetic.add(2,4)).toEqual(6);
    });
    test('should return ', () => {
      expect(arithmetic.sub(2,4)).toEqual(2);
    });
  });
});
