'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given a sequence of integers as an array, determine whether it's
 *  possible to obtain a strictly increasing sequence by removing no more
 * than one element from the array.
 */

/** SOLUTION */

var almostIncreasingSequence = function(sequence) {
  let index
  var countFails = (sequence) => {
      var count = 0
      sequence.reduce((a, b, i) => {
          if (a < b){
              return b
          }
          if (!index)
              index = i
          count++
          return a
      });
      return count;
  }

  return ((sequence) => {
      var count, aux
      if (!countFails(sequence.slice(1))) return true
      count = countFails(sequence)
      if (count) {
          aux = sequence.slice(0)
          aux.splice(index, 1)
          if (!countFails(aux)) return true
          aux = sequence.slice(0)
          aux.splice(index+1, 1)
          if (!countFails(aux)) return true
      }
      return false
  }) (sequence)
}

/** TESTS */

describe('almostIncreasingSequence', () => {
  it('input [1, 3, 2, 1] => false ', () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).to.be.false
  })
  it('input [1, 3, 2] => true ', () => {
    expect(almostIncreasingSequence([1, 3, 2])).to.be.true
  })
  it('input [1, 2, 3, 4, 99, 5, 6] => true ', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])).to.be.true
  })
  it('input [1, 2, 6, 4, 99, 5, 6] => true ', () => {
    expect(almostIncreasingSequence([1, 2, 6, 4, 99, 5, 6])).to.be.false
  })
  it('input [1, 2, 3, 4, 3, 6] => true ', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).to.be.true
  }) 
})