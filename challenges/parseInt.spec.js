'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * In this kata we want to convert a string into an integer.
 * The strings simply represent the numbers in words.
 */

/** SOLUTION */
const diccNumbers = {
  'zero': 0,    'ten': 10,
  'one': 1,     'eleven': 11,
  'two': 2,     'twelve': 12,       'twenty': 20,
  'three': 3,   'thirteen': 13,     'thirty': 30,
  'four': 4,    'fourteen': 14,     'forty': 40,
  'five': 5,    'fifteen': 15,      'fifty': 50,
  'six': 6,     'sixteen': 16,      'sixty': 60,
  'seven': 7,   'seventeen': 17,    'seventy': 70,
  'eight': 8,   'eighteen': 18,     'eighty': 80,
  'nine': 9,    'nineteen': 19,     'ninety': 90
}

const diccMultipliers = {
  'hundred': 1e+2,
  'thousand': 1e+3,
  'million': 1e+6,
  'billion': 1e+9,
  'trillion': 1e+12,
  'quadrillion': 1e+15,
  'quintillion': 1e+18,
  'sextillion': 1e+21
}

const parseInt = (string, mult = 1) =>
  string.split(/\ and\ |-|\ /).concat([0])
    .map(x => isNaN(diccNumbers[x]) ? x : diccNumbers[x])
    .map(x => diccMultipliers[x] ? diccMultipliers[x] : x)
    .reverse()
    .reduce((a, b) => ((b > 90) ? (b > mult) ? mult = b : mult *= b : a += b * mult) && a)

// TODO: use 2 multipliers to parse european millions (mult1 {1,100,1000}, mult2: {*illion})

/** TESTS */
const TestCases = {
  'zero': 0,
  'one': 1,
  'twenty': 20,
  'two hundred forty-six': 246,
  'five hundred thousand': 500000,
  'five hundred thousand three hundred': 500300,
  'five hundred forty-six thousand three hundred': 546300,
  'twenty-two million five hundred forty-six thousand three hundred': 22546300,
  'five hundred forty-six billion three hundred million five hundred forty-six thousand three hundred': 546300546300,
  'two hundred five sextillion': 2.05e+23
}

describe('parseInt', () => {
  Object.keys(TestCases).forEach( key =>
    it('input ' + key + ' => ' + TestCases[key], () => {
      expect(parseInt(key)).to.be.equal(TestCases[key])
    }))
})