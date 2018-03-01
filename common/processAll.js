const R = require('ramda')
const fs = require('fs')

const processFile = require('./processFile')

/**
 * Process all files in inputs directory
 * @param {*} fn Function used to process files
 */

const processAll = fn => {
  const filesToPromise = R.map(processFile(fn))

  return new Promise((resolve, reject) => {
    fs.readdir('./inputs/', (err, files) => {
      if (err) return reject(err)

      Promise.all(filesToPromise(files))
        .then(resolve)
        .catch(reject)
    })
  })
}

module.exports = processAll
