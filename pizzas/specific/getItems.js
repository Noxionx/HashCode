const R = require('ramda')

/**
 * Return a specific item of an array
 * @param {number} index index of the item to return
 * @param {any[]} arr a specific array
 */
const nItem = index => arr => arr[index]
module.exports.nItem = nItem

/**
 * Return the first item of an array
 */
const firstItem = R.head
module.exports.firstItem = firstItem

/**
 * Return an array with all items but not the first one
 * @param {any[]} arr a specific array
 */
const skipFirstItem = R.tail
module.exports.skipFirstItem = skipFirstItem
