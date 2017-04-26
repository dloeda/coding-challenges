'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Try to solve this task in O(n) time using O(1) additional space,
 * where n is the number of elements in l, since this is what you'll
 * be asked to do during an interview.
 *
 * Given a singly linked list of integers, determine whether or not it's a palindrome.
 */


/** SOLUTION */
const f = (a, i) =>
    1*a[a.length - i] || 0

const addBinaryStrings = (a, b) => {
    let carry = 0
    let length = a.length > b.length ? a.length : b.length
    let solution = []
    for (let i=1; i<=length; i++) {
        let aux = f(a, i) + f(b, i) + carry
        solution[i] = aux % 2
        carry = aux > 1
    }
    if (carry) {
        solution.push(1)
    }
    return solution.reverse().join('')
}



/** TESTS */
describe('addBinaryStrings', () => {
  it('input 1000, 111 => 1111', () => {
      expect(addBinaryStrings('1000', '111')).to.be.equal('1111')
  })
  it('input 1, 1 => 10', () => {
      expect(addBinaryStrings('1', '1')).to.be.equal('10')
  })
  it('input 1010, 1110 => 11000', () => {
      expect(addBinaryStrings('1010', '1110')).to.be.equal('11000')
  })
  it('input 1000, 111 => 1111', () => {
      expect(addBinaryStrings('1000', '111')).to.be.equal('1111')
  })
  it('input large numbers', () => {
      expect(addBinaryStrings(
        '1111001101011000001011000111100011101011110100101010010001110101011101010100101000001101000010000110001110100010011101011111111110110101100101110001010101011110001010000010111110011011'
      , '111101101000010111101000101010001010010010010110011010100001000010110110110000110001101'))
      .to.be.equal('1111001101011000001011000111100011101011110100101010010001110101011101010100101000001101000010001101111011100101011010100101010000000111111000100100101001100110100000111001000100101000')
  })
  it('input large numbers', () => {
      expect(addBinaryStrings(
        '1111101000010010100100111110011000110100101010000111100011101001011101101100101010101110100000100010110100111010101000010110100110001011110010000100111100111010010110'
      , '1110101011110001101110011101011000001000010111000011001001011000000100000111100001101011111101100110100101111'))
      .to.be.equal('1111101000010010100100111110011000110100101010000111100101011110111011111010011110011001100001100101101101010011110011010111000111000111111111100100101001101111000101')
  })
})