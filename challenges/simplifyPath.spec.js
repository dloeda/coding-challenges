'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * Given an absolute file path (Unix-style), shorten it to the format
 */

/** SOLUTION */
let simplifyPath = path =>
    '/' + [[]].concat(path.split('/')).reduce((a, b) => {
      if (b == '..')
          a.pop()
      else if (!b.match(/^(\.)?$/))
          a.push(b)
      return a
    }).join('/')

// TODO: use 2 multipliers to parse european millions (mult1 {1,100,1000}, mult2: {*illion})

/** TESTS */
const TestCases = {
  '/home/a/./x/../b//c/': '/home/a/b/c',
  '/a/b/c/../..': '/a',
  '//a//b//./././c': '/a/b/c',
  '/../': '/',
  '/////../a': '/a',
  'a/../../b/': '/b',
  'a/b/../c/d/../../e/../../': '/'
}

describe('simplifyPath', () => {
  Object.keys(TestCases).forEach(key =>
    it('input ' + key + ' => ' + TestCases[key], () => {
      expect(simplifyPath(key)).to.be.equal(TestCases[key])
    }))
})