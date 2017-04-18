'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Determines if leftString is a permutation (rearrangement of characters) 
 * of the rightString. If so, return true; otherwise return false.
 */

/** SOLUTION */
let s = x => [...x].sort().join()
let isPermutationOf = (l, r) => s(l) == s(r)


/** TESTS */

describe('isPermutationOf', () => {
  it('input "abc", "bca" => output true', () => {
    expect(isPermutationOf('abc', 'bca')).to.be.true
  })
  it('input "abc", "def" => output false', () => {
    expect(isPermutationOf('abc', 'def')).to.be.false
  })
  it('input "alphabet", "tpaealhb" => output true', () => {
    expect(isPermutationOf('alphabet', 'tpaealhb')).to.be.true
  })
  it('input "aabbcc", "abccbab" => output false', () => {
    expect(isPermutationOf('aabbcc', 'abccbab')).to.be.false
  })
  it('input "aBcD", "AbCd" => output false', () => {
    expect(isPermutationOf('aBcD', 'AbCd')).to.be.false
  })
  it('input "pineapple", "pilpaeepn" => output true', () => {
    expect(isPermutationOf('pineapple', 'pilpaeepn')).to.be.true
  })
})