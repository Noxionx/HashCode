const { compose } = require('functional.js')
const { getLines } = require('./getLines')

const R = require('ramda')

/**
 * Get the main content (all lines without the first one)
 */
const getPizza = R.compose(R.tail, getLines)

module.exports.getPizza = getPizza
