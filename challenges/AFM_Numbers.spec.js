'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * This is a reverse challenge, have fun!
 */

/** SOLUTION */
const f = b => b ? (1 << b) - 1 - f(b - 1) : 0
const AFM_numbers = b => [f(b - 1), f(b)]


/** TESTS */

const TestCases = [
  [0, 1],
  [1, 2],
  [2, 5],
  [5, 10],
  [10, 21],
  [21, 42],
  [42, 85],
  [85, 170],
  [170, 341],
  [341, 682],
  [682, 1365],
  [1365, 2730]
];

describe('AFM_numbers', () => {
  TestCases.forEach((item, i) =>
    it('input ' + (i + 1) + ' => ' + item, () => {
      expect(AFM_numbers(i + 1)).to.be.deep.equal(item)
    }))
})