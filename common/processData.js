/**
 * Return processed data with specified function
 * @param {function} fn The transformation function
 * @param {any} data Data to transform
 */

const processData = fn => data => {
  return new Promise((resolve, reject) => {
    try {
      resolve(fn(data))
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = { processData }
