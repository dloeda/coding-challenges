'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * You're given two integers, n and m. Find position of the rightmost
 * pair of equal bits in their binary representations (it is guaranteed
 * that such a pair exists), counting from right to left. Return the value
 * of 2^position_of_the_found_pair (0-based).
 */

/** SOLUTION */
let x
let equalPairOfBits = (n, m) =>
  (x = (n ^ m).toString(2), 1 << (x.length - 1 - x.lastIndexOf(0)))


/** TESTS */

describe('equalPairOfBits', () => {
  it('input 10, 11 => output 2', () => {
    expect(equalPairOfBits(10, 11)).to.be.equal(2)
  })
  it('input 0, 0 => output 1', () => {
    expect(equalPairOfBits(0, 0)).to.be.equal(1)
  })
  it('input 28, 27 => output 8', () => {
    expect(equalPairOfBits(28, 27)).to.be.equal(8)
  })
  it('input 895, 928 => output 32', () => {
    expect(equalPairOfBits(895, 928)).to.be.equal(32)
  })
  it('input 1073741824, 1006895103 => output 262144', () => {
    expect(equalPairOfBits(1073741824, 1006895103)).to.be.equal(262144)
  })
})