'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Check if the word is a palindrome
 */

/** SOLUTION */
let clean = w => w.replace(/\W/g,'')
let checkPalindrome =  a => clean(a) === clean([...a].reverse().join(''))

/** TESTS */

describe('checkPalindrome', () => {
  it('input "a" => output true', () => {
    expect(checkPalindrome('a')).to.be.true
  })
  it('input "ab" => output false', () => {
    expect(checkPalindrome('ab')).to.be.false
  })
  it('input "aba" => output true', () => {
    expect(checkPalindrome('aba')).to.be.true
  })
  it('input "Palindrome" => output false', () => {
    expect(checkPalindrome('Palindrome')).to.be.false
  })
  it('input "lisa bonet ate no basil" => output true', () => {
    expect(checkPalindrome('lisa bonet ate no basil')).to.be.true
  })
})