'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given two strings, find the number of common characters between them.
 */

/** SOLUTION */

let commonCharacterCount = (s1, s2) => {
    var count = 0
    var index
    [...s1].forEach(c => {
        index = s2.indexOf(c)
        if (index !== -1) {
            count++
            s2 = s2.substr(0, index) + s2.substr(index + 1, s2.length)
        }
    })
    return count
}



/** TESTS */

describe('commonCharacterCount', () => {
  it('input aabcc, adcaa => 3', () => {
    expect(commonCharacterCount('aabcc', 'adcaa')).to.be.equal(3)
  })
  it('input aaa, aaaaa => 3', () => {
    expect(commonCharacterCount('aaa', 'aaaaa')).to.be.equal(3)
  })
  it('input abcde, edczba => 3', () => {
    expect(commonCharacterCount('abcde', 'edczba')).to.be.equal(5)
  })
})