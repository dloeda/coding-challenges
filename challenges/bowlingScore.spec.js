'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * You and your friends love to play bowling at the end of a long week. 
 * You play by your very own rules. Each team has an even number of rolls
 * to make, two rolls in a row. A pair of consecutive rolls is called a
 * frame.
 *
 * Each frame 10 pins are placed on a lane. If a player manages to
 * knock down all 10 pins, he gets 30 points, and can try to knock down
 * another 10 pins in the next roll. If he knocks them down again, he gets
 * another 30 points. Otherwise the number of points he gains is equal to
 * the number of pins he knocked down. If a player doesn't knock down all
 * the pins in the first roll of a frame, by the end of the frame he gets
 * the number of points equal to the number of pins knocked down in that frame.
 *
 * You are given the results of the rolls your team played. Return the total
 * number of points you received this game.
 */

/** SOLUTION */
let f = 0
let bowlingScore = r => [ 0 ].concat(r).reduce((x, y, i)=> (
  f = y == 10 && (i % 2 || f) ? 20 : 0,
    x + y + f
  )
)


/** TESTS */

describe('bowlingScore', () => {
  it('input [10, 10, 10, 4, 9, 1, 0, 10, 3, 3] => output 120', () => {
    expect(bowlingScore([10, 10, 10, 4, 9, 1, 0, 10, 3, 3])).to.be.equal(120)
  })
  it('input [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0] => output 90', () => {
    expect(bowlingScore([9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0])).to.be.equal(90)
  })
  it('input [8, 2, 10, 8, 1, 0, 10, 1, 0, 0] => output 80', () => {
    expect(bowlingScore([8, 2, 10, 8, 1, 0, 10, 1, 0, 0])).to.be.equal(80)
  })
  it('input [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] => output 360', () => {
    expect(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).to.be.equal(360)
  })
  it('input [10, 2, 10, 2, 10, 2, 10, 5, 10, 2] => output 163', () => {
    expect(bowlingScore([10, 2, 10, 2, 10, 2, 10, 5, 10, 2])).to.be.equal(163)
  })
  it('input [10, 2] => output 32', () => {
    expect(bowlingScore([10, 2])).to.be.equal(32)
  })
  it('input [7, 10] => output 17', () => {
    expect(bowlingScore([7, 10])).to.be.equal(17)
  })
  it('input [9, 0, 10, 0, 8, 2, 10, 5, 3, 6, 2, 1, 10, 7] => output 133', () => {
    expect(bowlingScore([9, 0, 10, 0, 8, 2, 10, 5, 3, 6, 2, 1, 10, 7])).to.be.equal(133)
  })
})