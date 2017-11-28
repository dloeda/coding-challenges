'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

/** DESCRIPTION
 * A string is said to be beautiful if b occurs in it no more times than a;
 * c occurs in it no more times than b; etc.
 *
 * Given a string, check whether it is beautiful.
 */

/** SOLUTION */
let f;
const isBeautifulString = s => (
  f = a => s.split(a).length,
  [ ...'abcdefghijklmnopqrstuvwxyz' ]
    .reduce((a, b) =>
      a >= f(b) && f(b),
    99))

/** TESTS */
const TestCases = {
  'aab': true,
  'aabb': true,
  'aabbb': false,
  'aabbc': true,
  'aabbccc': false,
  'abcdefghijklmnopqrstuvwxyz': true,
  'abcdefghijklmnopqrstuvwxyzz': false,
  'fyudhrygiuhdfeis': false
}

describe('isBeautifulString', () => {
  Object.keys(TestCases).forEach(key =>
    it('input ' + key + ' => ' + TestCases[key], () => {
      let test = expect(isBeautifulString(key)).to.be;
      TestCases[key] ? test.truthy : test.falsy
    }))
})