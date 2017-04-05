'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Assume the key is repeated for the length of the text, character by character.
 * Note that some implementations repeat the key over characters only if they are
 * part of the alphabet, and that is not the case here.
 * The shift is derived by applying a Caesar shift to a character with the corresponding
 * index of the key in the alphabet.
 */

/** SOLUTION */
function VigenereCipher(key, abc) {
  let _key = [...key].map(char =>
    abc.indexOf(char))

  let _nextKey = index =>
    _key[index % _key.length]

  let checkAlphabet = (x, f) => 
    abc.indexOf(x) >= 0 ? f(x) : x

  this.encode = str =>
    str.replace(/./g, (x, i) =>
      checkAlphabet(x, x => abc[(abc.indexOf(x) + _nextKey(i)) % abc.length]))

  this.decode = str =>
    str.replace(/./g, (x, i) =>
      checkAlphabet(x, x => abc[(abc.indexOf(x) - _nextKey(i) + abc.length) % abc.length]))
}


/** TESTS */
describe('adjacentElementsProduct', () => {
  describe('simple password', () => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let key = 'password'
    let cipher = new VigenereCipher(key, abc);
    it('input "codewars" => output "rovwsoiv"', () => {
      expect(cipher.encode('codewars')).to.be.equal('rovwsoiv')
    })
    it('input "rovwsoiv" => output "codewars"', () => {
      expect(cipher.decode('rovwsoiv')).to.be.equal('codewars')
    })
    it('input "srawedoc" => output "hrsoarff"', () => {
      expect(cipher.encode('srawedoc')).to.be.equal('hrsoarff')
    })
    it('input "hrsoarff" => output "srawedoc"', () => {
      expect(cipher.decode('hrsoarff')).to.be.equal('srawedoc')
    })
  })

  describe('unexpected chars', () => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let key = 'password'
    let cipher = new VigenereCipher(key, abc);
    it('input "codewars" => output "rovwsoiv"', () => {
      expect(cipher.encode('codewars123')).to.be.equal('rovwsoiv123')
    })
    it('input "rovwsoiv" => output "codewars"', () => {
      expect(cipher.decode('rovwsoiv123')).to.be.equal('codewars123')
    })
    it('input "srawedoc" => output "hrsoarff"', () => {
      expect(cipher.encode('srawedoc123')).to.be.equal('hrsoarff123')
    })
    it('input "hrsoarff" => output "srawedoc"', () => {
      expect(cipher.decode('hrsoarff123')).to.be.equal('srawedoc123')
    })
  })

  describe('unexpected dictionary', () => {
    let abc = '123456789'
    let key = '8875986'
    let cipher = new VigenereCipher(key, abc);
    it('input "codewars" => output "rovwsoiv"', () => {
      expect(cipher.encode('codewars-123')).to.be.equal('codewars-762')
    })
    it('input "codewars" => output "rovwsoiv"', () => {
      expect(cipher.decode('codewars-762')).to.be.equal('codewars-123')
    })
  })
})