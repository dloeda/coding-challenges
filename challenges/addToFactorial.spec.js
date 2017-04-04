'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * This is a reverse challenge. No hints given :)
 */

/** SOLUTION */
let f = x => x ? x * f(x - 1) : 1
let addToFactorial = x =>
  f(x) + x * (x + 1) / 2


/** TESTS */

describe('addToFactorial', () => {
  it('input 1 => output 2', () => {
    expect(addToFactorial(1)).to.be.equal(2)
  })
  it('input 2 => output 5', () => {
    expect(addToFactorial(2)).to.be.equal(5)
  })
  it('input 3 => output 12', () => {
    expect(addToFactorial(3)).to.be.equal(12)
  })
  it('input 4 => output 34', () => {
    expect(addToFactorial(4)).to.be.equal(34)
  })
  it('input 5 => output 135', () => {
    expect(addToFactorial(5)).to.be.equal(135)
  })
  it('input 6 => output 741', () => {
    expect(addToFactorial(6)).to.be.equal(741)
  })
})