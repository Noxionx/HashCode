const R = require('ramda')

/**
 * Split data and return an array of all their lines
 * @param {string} data String contains all datas
 */
const getLines = data => R.split('\n', data)
module.exports.getLines = getLines

/**
 * Return the first line of specific data
 */
const getFirstLine = R.compose(R.head, getLines)
module.exports.getFirstLine = getFirstLine
