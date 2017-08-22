'use strict'

const greet = require('../lib/greet')
const arithmetic = require('../lib/arithmetic')

describe('../lib/greet.js', function() {
  describe('default properties', () => {
    test('should return hello world', () => {
      expect(greet.hello('world!')).toEqual('hello world!')
    })
    test('should return null', ()=>{
      expect(greet.hello(200)).toEqual(null)
    })
  })
})

describe('../lib/arithmetic.js', function(){
  describe('#add', () => {
    test('should return 6', () => {
      expect(arithmetic.add(4, 2)).toEqual(6)
    })
    test('should return blahblah', () => {
      expect(arithmetic.add('blah', 'blah')).toEqual('blahblah')
    })
  })
  describe('#sub', () => {
    test('should return 2', () => {
      expect(arithmetic.sub(4, 2)).toEqual(2)
    })
  })
})
