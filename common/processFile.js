const R = require('ramda')
const { readFile } = require('./readFile')
const { processData } = require('./processData')
const { writeFile } = require('./writeFile')

const withoutExtension = R.compose(R.head, R.split('.'))

/**
 * Process a specific file with a specific function
 * @param {function} fn Function to use to process the file
 * @param {string} name Name of the file to process
 */

const processFile = fn => name => {
  const clearName = withoutExtension(name)
  const readInput = readFile(`./inputs/${clearName}.txt`)
  const writeOutput = writeFile(`./outputs/${clearName}.out`)

  return new Promise((resolve, reject) => {
    readInput
      .then(processData(fn))
      .then(writeOutput)
      .then(resolve)
      .catch(reject)
  })
}

module.exports = { processFile }
