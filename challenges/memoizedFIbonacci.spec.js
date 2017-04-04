'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * We want to implement the memoization solution. This will be cool because it
 * will let us keep using the tree recursion algorithm while still keeping it
 * sufficiently optimized to get an answer very rapidly.
 */

/** SOLUTION */
let valuesMap = {}
var fibonacci = function(n) {
    if(n === 0 || n === 1)
        return n
    if (!valuesMap[n]) 
      valuesMap[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return valuesMap[n]
}


/** TESTS */

describe('fibonacci', () => {
  it('input 70 => output 190392490709135', () => {
    expect(fibonacci(70)).to.be.equal(190392490709135)
  })
  it('input 60 => output 1548008755920', () => {
    expect(fibonacci(60)).to.be.equal(1548008755920)
  })
  it('input 50 => output 12586269025', () => {
    expect(fibonacci(50)).to.be.equal(12586269025)
  })
})