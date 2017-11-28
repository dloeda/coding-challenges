'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * A spider is standing at the origin (0, 0) of a Cartesian plane and
 * wants to move to the point (X,Y). At each step, the spider can only
 * move one square in two of the four directions: U(up), D(down,), L(left),
 * R(right), depending on where it is heading:
 *
 *    if X ≥ 0, Y ≥ 0. The spider can only go U or R.
 *    if X ≥ 0, Y ≤ 0. The spider can only go D or R.
 *    if X ≤ 0, Y ≥ 0. The spider can only go U or L.
 *    if X ≤ 0, Y ≤ 0. The spider can only go D or L.
 */

/** SOLUTION */
let spiderMove = (m, n) =>
  m && n ? spiderMove(m < 0 ? m + 1 : m - 1, n)
    + spiderMove(m, n < 0 ? n + 1 : n - 1) : 1

/** TESTS */

describe('spiderMove', () => {
  it('input 2, -2 => output 6', () => {
    expect(spiderMove(2, -2)).to.be.equal(6)
  })
  it('input -3, 0 => output 1', () => {
    expect(spiderMove(-3, 0)).to.be.equal(1)
  })
  it('input 0, 0 => output 1', () => {
    expect(spiderMove(0, 0)).to.be.equal(1)
  })
  it('input 0, 10 => output 1', () => {
    expect(spiderMove(0, 10)).to.be.equal(1)
  })
  it('input 5, 7 => output 792', () => {
    expect(spiderMove(5, 7)).to.be.equal(792)
  })
})