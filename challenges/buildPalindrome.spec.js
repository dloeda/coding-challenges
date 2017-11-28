'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given a string, find the shortest possible string which can be achieved
 * by adding characters to the end of initial string to make it a palindrome
 */

/** SOLUTION */
const reverse = s => [...s].reverse().join('')
const checkPalindrome = a => a == reverse(a)
const getLimit = (s, i = 0) => checkPalindrome(s.substr(i)) ? i : getLimit(s, i + 1)

const buildPalindrome = s =>
  s + reverse(s.substr(0, getLimit(s)))

/** TESTS */
const TestCases = {
  'aab': 'aabaa',
  'abaa': 'abaaba',
  'aabbb': 'aabbbaa',
  'aabbc': 'aabbcbbaa',
  'abcdc': 'abcdcba',
  'ababab': 'abababa',
  'abba': 'abba'
}

describe('buildPalindrome', () => {
  Object.keys(TestCases).forEach(key =>
    it('input ' + key + ' => ' + TestCases[key], () => {
      expect(buildPalindrome(key)).to.be.equal(TestCases[key])
    }))
})