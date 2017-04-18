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
var s = (a, s) =>
    a.map(x => x < 0 ? x : s.shift(0));

var sortByHeight = a =>
    s(a, a.filter(x => x > 0).sort((a, b) => parseInt(a) > b))



/** TESTS */

describe('sortByHeight', () => {
  it('input [-1, 150, 190, 170, -1, -1, 160, 180] => true', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).to.be.deep
      .equal([-1, 150, 160, 170, -1, -1, 180, 190])
  })
  it('input [4, 2, 9, 11, 2, 16] => true', () => {
    expect(sortByHeight([4, 2, 9, 11, 2, 16])).to.be.deep
      .equal([2, 2, 4, 9, 11, 16])
  })
  it('input [-1, -1, -1] => true', () => {
    expect(sortByHeight([-1, -1, -1])).to.be.deep
      .equal([-1, -1, -1])
  })
})