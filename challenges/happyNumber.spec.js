'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Try to solve this task in O(n) time using O(1) additional space,
 * where n is the number of elements in l, since this is what you'll
 * be asked to do during an interview.
 *
 * Given a singly linked list of integers, determine whether or not it's a palindrome.
 */


/** SOLUTION */
const happyNumber = n =>
     n < 10 && n != 7 ? n == 1 : happyNumber([ 0 ].concat([...('' + n)]).reduce((a, b) => a + b * b))



/** TESTS */
const TestCases = {
  1: true,
  10: true,
  11: false,
  19: true,
  70: true,
  71: false,
  115: false,
  881: true,
  882: false,
  914: false,
  5854: true,
  6390: false,
  6703: true,
  8399: false,
  19141: true,
  111111: false,
  1111111: true
}

describe('happyNumber', () => {
  Object.keys(TestCases).forEach( key =>
    it('input ' + key + ' => ' + TestCases[key], () => {
      expect(happyNumber(key)).to.be.equal(TestCases[key])
    }))
})