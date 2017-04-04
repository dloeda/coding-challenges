'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * calculates the sum of numbers in range from lower to upper inclusive
 * using a famous ProgramRights platform. However, his function hangs for
 *  no apparent reason.
 *
 * Morti is pretty sure that something is wrong with the platform:
 * it is probably either IDE or compiler issue. Your task is to prove
 * Morti wrong by writing a function that will run without a problem in
 * any environment.
 *
 * Given numbers lower and upper, calculate the sum of numbers in the
 * range [lower, upper].
 */

/** SOLUTION */
let addInRange = (l, u) => (u * (u + 1) - l * l + l) / 2


/** TESTS */

describe('addInRange', () => {
  it('input 1, 1 => output 1', () => {
    expect(addInRange(1, 1)).to.be.equal(1)
  })
  it('input 0, 3 => output 6', () => {
    expect(addInRange(0, 3)).to.be.equal(6)
  })
  it('input 1, 10 => output 55', () => {
    expect(addInRange(1, 10)).to.be.equal(55)
  })
  it('input 1, 100 => output 5050', () => {
    expect(addInRange(1, 100)).to.be.equal(5050)
  })
  it('input -10, 20 => output 155', () => {
    expect(addInRange(-10, 20)).to.be.equal(155)
  })
})