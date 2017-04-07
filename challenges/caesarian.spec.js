'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Caesarian shift (Caesar cipher) is a method used in cryptography where
 * a string message is encrypted by shifting the letters n times.
 * You are given an integer n, which can be positive, negative or zero.
 * Positive values indicate right shifts, and negative values indicate left shifts.
 * Given a message and n, return message encrypted by the shift n
 */

/** SOLUTION */

let caesarian = (m, n) => 
  m.replace(/\w/g, x => String.fromCharCode(
    (x.charCodeAt() + n % 26 + 33) % 26 + 97))

/** TESTS */

describe('caesarian', () => {
  it('input "abc" => output "def"', () => {
    expect(caesarian('abc', 3)).to.be.equal('def')
  })
  it('input "egg" => output "dff"', () => {
    expect(caesarian('egg', -1)).to.be.equal('dff')
  })
  it('input "super" => output "tvqfs"', () => {
    expect(caesarian('super', 27)).to.be.equal('tvqfs')
  })
  it('input "internationally" => output "joufsobujpobmmz"', () => {
    expect(caesarian('internationally', 12039)).to.be.equal('joufsobujpobmmz')
  })
  it('input "stargazing" => output "lmtkztsbgz"', () => {
    expect(caesarian('stargazing', -3023)).to.be.equal('lmtkztsbgz')
  })
  it('input "polarequation" => output "febqhugkqjyed"', () => {
    expect(caesarian('polarequation', 16)).to.be.equal('febqhugkqjyed')
  })
  it('input "codefights" => output "pbqrsvtugf"', () => {
    expect(caesarian('codefights', -1001)).to.be.equal('pbqrsvtugf')
  })
  it('input "caesarian" => output "aycqypgyl"', () => {
    expect(caesarian('caesarian', 2000000000)).to.be.equal('aycqypgyl')
  })
})