const R = require('ramda')

/**
 * Log the parameter then return it without any change
 * Act like a log decorator
 * @param {any} x
 */
const log = x => {
  console.log(x)
  return x
}

/**
 * Return a string to display how many files processed
 * @param {string[][]} files array contains files data
 */

const done = files => `${R.length(files)} files processed`

module.exports = { log, done }
