'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Check if all digits of the given integer are even.
 */

/** SOLUTION */
let evenDigitsOnly = (n) =>
    [1].concat([...n + '']).reduce((a, b) => a && b % 2 == 0)

/** TESTS */

describe('evenDigitsOnly', () => {
  it('input 246802 => output true', () => {
    expect(evenDigitsOnly(246802)).to.be.true
  })
  it('input 246302 => output true', () => {
    expect(evenDigitsOnly(246302)).to.be.false
  })
  it('input 2468022242 => output true', () => {
    expect(evenDigitsOnly(2468022242)).to.be.true
  })
  it('input 246802 => output true', () => {
    expect(evenDigitsOnly(0)).to.be.true
  })
  it('input 135 => output true', () => {
    expect(evenDigitsOnly(135)).to.be.false
  })
})