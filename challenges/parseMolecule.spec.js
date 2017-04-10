'use strict'

const chai = require('chai')
const expect = chai.expect
const sinonChai = require("sinon-chai")

chai.use(sinonChai)

/** DESCRIPTION
 * For a given chemical formula represented by a string, count the number
 * of atoms of each element contained in the molecule and return an object.
 */

/** SOLUTION */
let repeat = (regex, form, num) =>
  new Array(parseInt(num || 1)).fill(form).join('')

let parseMolecule = formula => {
  let result = {}
  formula
    .replace(/\{([A-Za-z\(\)\[\]\d]*)\}(\d+)?/g, repeat)
    .replace(/\[([A-Za-z\(\)\d]*)\](\d+)?/g, repeat)
    .replace(/\(([A-Za-z\d]*)\)(\d+)?/g, repeat)
    .replace(/([A-Z][a-z]?)(\d+)?/g, (regex, form, num) => {
      result[form] = result[form] || 0
      result[form] += parseInt(num || 1)
    })
  return result
}


/** TESTS */

describe('parseMolecule', () => {
  it('input water ', () => {
    expect(parseMolecule('H2O')).to.be.deep.equal({H: 2, O: 1})
  })
  it('input magnesium hydroxide: Mg(OH)2', () => {
    expect(parseMolecule('Mg(OH)2')).to.be.deep.equal({Mg: 1, O: 2, H: 2})
  })
  it('input Fremy\'s salt: K4[ON(SO3)2]2', () => {
    expect(parseMolecule('K4[ON(SO3)2]2')).to.be.deep.equal({K: 4, O: 14, N: 2, S: 4})
  })
  it('input weird molecule As2{Be4C5[BCo3(CO2)3]2}4Cu5', () => {
    expect(parseMolecule('As2{Be4C5[BCo3(CO2)3]2}4Cu5')).to.be.deep.equal({ As: 2, B: 8, Be: 16, C: 44, Co: 24, Cu: 5, O: 48 })
  })
  
})