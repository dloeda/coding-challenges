'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given a positive integer k, your task is to count all the numbers in the
 * range from 1 to k (inclusive) that have the same number of set bits in
 * their binary representation as k does.
 */

/** SOLUTION */
let f = a => a.toString(2).split(1).length
let g = (a, b) => b && (f(a) == f(b)) + g(a, b - 1)
let totalSameOnes = k => g(k, k)


/** TESTS */

describe('totalSameOnes', () => {
  it('input 1 => output 1', () => {
    expect(totalSameOnes(1)).to.be.equal(1)
  })
  it('input 2 => output 2', () => {
    expect(totalSameOnes(2)).to.be.equal(2)
  })
  it('input 3 => output 1', () => {
    expect(totalSameOnes(3)).to.be.equal(1)
  })
  it('input 4 => output 3', () => {
    expect(totalSameOnes(4)).to.be.equal(3)
  })
  it('input 5 => output 2', () => {
    expect(totalSameOnes(5)).to.be.equal(2)
  })
  it('input 2017 => output 326', () => {
    expect(totalSameOnes(2017)).to.be.equal(326)
  })
  it('input 9999 => output 1548', () => {
    expect(totalSameOnes(9999)).to.be.equal(1548)
  })
})