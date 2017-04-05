'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given an array of integers, find the pair of adjacent
 * elements that has the largest product and return that product.
 */

/** SOLUTION */
let adjacentElementsProduct = (A) =>
    Math.max.apply(0, A.map((e, i) => e * A[i + 1]).slice(0, -1))


/** TESTS */

describe('adjacentElementsProduct', () => {
  it('input [3, 6, -2, -5, 7, 3] => output 21', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).to.be.equal(21)
  })
  it('input [-1, -2] => output 2', () => {
    expect(adjacentElementsProduct([-1, -2])).to.be.equal(2)
  })
  it('input [9, 5, 10, 2, 24, -1, -48] => output 50', () => {
    expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).to.be.equal(50)
  })
  it('input [-23, 4, -3, 8, -12] => output -12', () => {
    expect(adjacentElementsProduct([-23, 4, -3, 8, -12])).to.be.equal(-12)
  })
  it('input [4, 1, 2, 3, 1, 5] => output 6', () => {
    expect(adjacentElementsProduct([4, 1, 2, 3, 1, 5])).to.be.equal(6)
  })
})