'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * You're given two integers, n and m. Find position of the rightmost
 * pair of equal bits in their binary representations (it is guaranteed
 * that such a pair exists), counting from right to left. Return the value
 * of 2^position_of_the_found_pair (0-based).
 */

/** SOLUTION */
const isValidCoordinates = coor =>
    /^-?([0-8]?\d(\.\d+)?|90),\ ?-?((1[0-7]\d|\d{1,2})(\.\d+)?|180)$/.test(coor)

/** TESTS */
const ValidCoordinates = [
  '-23, 25',
  '4, -3',
  '24.53525235, 23.45235',
  '04, -23.234235',
  '43.91343345, 143'
];

var InvalidCoordinates = [
  '23.234, - 23.4234',
  '2342.43536, 34.324236',
  'N23.43345, E32.6457',
  '99.234, 12.324',
  '6.325624, 43.34345.345',
  '0, 1,2',
  '0.342q0832, 1.2324',
  '23.245, 1e1'
];

describe('isValidCoordinates', () => {
  describe('valid coordinates', () => {
    ValidCoordinates.forEach(coor =>
      it('input ' + coor + ' => true', () => {
        expect(isValidCoordinates(coor)).to.be.true
      }))
  })

  describe('invalid coordinates', () => {
    InvalidCoordinates.forEach(coor =>
      it('input ' + coor + ' => true', () => {
        expect(isValidCoordinates(coor)).to.be.false
      }))
  })
})