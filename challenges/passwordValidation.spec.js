'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * You need to write regex that will validate a password to make sure it meets the following criteria:
 *
 *    At least six characters long
 *    contains a lowercase letter
 *    contains an uppercase letter
 *    contains a number
 *
 * Valid passwords will only be alphanumeric characters.
 */

/** SOLUTION */
function validate(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)
}

/** TESTS */

describe('validatePassword', () => {
  it('input "djI38D55" => output fasle', () => {
    expect(validate('djI38D55')).to.be.true
  })
  it('input "d412" => output fasle', () => {
    expect(validate('a2.d412')).to.be.false
  })
  it('input "JHD5FJ53" => output fasle', () => {
    expect(validate('JHD5FJ53')).to.be.false
  })
  it('input "fdjn345" => output fasle', () => {
    expect(validate('!fdjn345')).to.be.false
  })
  it('input "123" => output fasle', () => {
    expect(validate('123')).to.be.false
  })
  it('input "abc" => output fasle', () => {
    expect(validate('abc')).to.be.false
  })
  it('input "Password123" => output fasle', () => {
    expect(validate('Password123')).to.be.true
  })
})