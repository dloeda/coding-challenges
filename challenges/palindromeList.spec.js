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

/** HELPERS */
const print = (l, curr = l, res = []) => {
  while (curr) {
    res.push(curr.value)
    curr = curr.next
  }
  return res
}

const create = (array, list = { value: null, next: null }, pointer = list) => {
  array.forEach( x => {
    pointer.next = { value: x }
    pointer = pointer.next
  })
  return list.next
}

/** SOLUTION */
const reverse = (l, prev = null, curr = l, next = null) => {
  while (curr) {
    next  = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

const isListPalindrome = l => {
  if (l && l.next) {
    let length = 1
    let pointer = l
    let middleLength

    while (pointer = pointer.next) {
      length++
    }

    middleLength = (length)/2
    length = 0
    pointer = l

    while (length < middleLength) {
      pointer = pointer.next
      length++
    }

    let reversedList = reverse(pointer)

    while (reversedList && l) {
      if (reversedList.value !== l.value) {
        return false
      }
      reversedList = reversedList.next
      l = l.next
    }
  }
  return true
}


// TODO: use 2 multipliers to parse european millions (mult1 {1,100,1000}, mult2: {*illion})

/** TESTS */

describe('simplifyPath', () => {
  it('input  [1, 2, 3, 4] => false', () => {
    expect(isListPalindrome(create([1, 2, 3, 4]))).to.be.false
  })
  it('input  [1, 2, 2, 1] => true', () => {
    expect(isListPalindrome(create([1, 2, 2, 1]))).to.be.true
  })
  it('input  [] => true', () => {
    expect(isListPalindrome(create([]))).to.be.true
  })
  it('input  [0, 1, 0] => true', () => {
    expect(isListPalindrome(create([0, 1, 0]))).to.be.true
  })
  it('input  [[1, 2, 3, 3, 2]] => false', () => {
    expect(isListPalindrome(create([1, 2, 3, 3, 2]))).to.be.false
  })
  it('input  [1, 1000000000, -1000000000, -1000000000, 1000000000, 1] => true', () => {
    expect(isListPalindrome(create([1, 1000000000, -1000000000, -1000000000, 1000000000, 1]))).to.be.true
  })
})