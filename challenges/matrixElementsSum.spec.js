'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * After becoming famous, CodeBots decided to move to a new building
 * and live together. The building is represented by a rectangular
 * matrix of rooms, each cell containing an integer - the price of
 * the room. Some rooms are free (their cost is 0), but that's probably
 * because they are haunted, so all the bots are afraid of them. That is
 * why any room that is free or is located anywhere below a free room in
 * the same column is not considered suitable for the bots.
 */

/** SOLUTION */

let matrixElementsSum = (matrix) => {
    let sum = 0
    let frees = []
    matrix.forEach((line, i) => {
        line.forEach((item, j) => {
            if (!item) frees.push(j)
            else sum += (frees.indexOf(j) < 0 ? item : 0)
        })
    })
    return sum
}


/** TESTS */

describe('matrixElementsSum', () => {
  it('input case 1', () => {
    expect(matrixElementsSum([[0,1,1,2], [0,5,0,0], [2,0,3,3]])).to.be.equal(9)
  })
  it('input case 2', () => {
    expect(matrixElementsSum([[1,1,1,0], [0,5,0,1], [2,1,3,10]])).to.be.equal(9)
  })
  it('input case 3', () => {
    expect(matrixElementsSum([[1,1,1], [2,2,2], [3,3,3]])).to.be.equal(18)
  })
  it('input case 4', () => {
    expect(matrixElementsSum([[0]])).to.be.equal(0)
  })
  it('input case 5', () => {
    expect(matrixElementsSum([[0], [1]])).to.be.equal(0)
  })
})