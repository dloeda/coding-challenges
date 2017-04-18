'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Ticket numbers usually consist of an even number of digits.
 * A ticket number is considered lucky if the sum of the first
 * half of the digits is equal to the sum of the second half.
 * Given a ticket number n, determine if it's lucky or not.
 */

/** SOLUTION */
let p = parseInt
let f = a => [...a].reduce((a, b) => p(a) + p(b))
let g = (s, l) => f(s.substr(0, l)) ==  f(s.substr(l))
let isLucky = (n) => g(n + '', (n + '').length/2)




/** TESTS */

describe('isLucky', () => {
  it('input 1423 => true', () => {
    expect(isLucky(1423)).to.be.true
  })
  it('input 1234 => false', () => {
    expect(isLucky(1234)).to.be.false
  })
  it('input 9081 => true', () => {
    expect(isLucky(9081)).to.be.true
  })
  it('input 123456654321 => true', () => {
    expect(isLucky(123456654321)).to.be.true
  })
  it('input 11 => true', () => {
    expect(isLucky(11)).to.be.true
  })
})