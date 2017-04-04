'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * You are given two non-negative integers, number1 and number2,
 * given in bases base1 and base2, respectively. Each base can be in
 *  range from Binary (2) to Hexatridecimal (36).
 *
 * Your task is to sum the given numbers and return them in one of
 * the given bases. Here's how the base of the returned value is determined:
 *
 *    if number1 ≠ number2, the base of the largest number should be chosen;
 *    if number1 = number2, the largest base from the given should be chosen.
 *
 * Note, that characters used in bases greater than 10 are given in the lowercase.
 * For your convenience, you can check out this base number converter or this converter.
 */

/** SOLUTION */
let BaseAdd = (a, m, b, n) => {
  let c = parseInt(a, m)
  let d = parseInt(b, n)
  return (c + d).toString(c < d ? n : c > d | m > n ? m : n)
}

/** TESTS */

describe('BaseAdd', () => {
  it('input "11", 2, "10", 10 => output "13', () => {
    expect(BaseAdd("11", 2, "10", 10)).to.be.equal("13")
  })
  it('input "11111100000", 2, "7e0", 16 => output "fc0', () => {
    expect(BaseAdd("11111100000", 2, "7e0", 16)).to.be.equal("fc0")
  })
  it('input "7e0", 16, "11101101100", 2 => output "f4c', () => {
    expect(BaseAdd("7e0", 16, "11101101100", 2)).to.be.equal("f4c")
  })
  it('input "1k0", 36, "3e7", 16 => output "2br', () => {
    expect(BaseAdd("1k0", 36, "3e7", 16)).to.be.equal("2br")
  })
  it('input "1022634", 7, "765533", 9 => output "1073846', () => {
    expect(BaseAdd("1022634", 7, "765533", 9)).to.be.equal("1073846")
  })
})