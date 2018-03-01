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

module.exports.log = log

/**
 * Return a string to display how many files processed
 * @param {string[][]} files array contains files data
 */

const doneMessage = files => `${R.length(files)} files processed`

module.exports.done = doneMessage
