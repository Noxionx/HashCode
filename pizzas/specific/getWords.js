const R = require('ramda')

/**
 * Return an array of words of a specific string
 * @param {string} string a string to split into words array
 */
const getWords = string => R.split(' ', string)

module.exports.getWords = getWords
