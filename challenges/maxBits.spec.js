'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given an integer n, find the largest positive integer
 * that has the same number of 0s and 1s in its binary representation
 */

/** SOLUTION */

let maxBits = (n) =>
  parseInt((n >>> 0)
    .toString(2)
    .split('')
    .sort()
    .reduce(function(a, b) {
        return b + a
    }), 2)

/** TESTS */

describe('maxBits', () => {
  it('input 5 => output 6', () => {
    expect(maxBits(5)).to.be.equal(6)
  })
  it('input 15 => output 15', () => {
    expect(maxBits(15)).to.be.equal(15)
  })
  it('input 37 => output 56', () => {
    expect(maxBits(37)).to.be.equal(56)
  })
  it('input 937 => output 1008', () => {
    expect(maxBits(937)).to.be.equal(1008)
  })
  it('input 25 => output 28', () => {
    expect(maxBits(25)).to.be.equal(28)
  })
})