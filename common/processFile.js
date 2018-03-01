const readFile = require('./readFile')
const writeFile = require('./writeFile')
const processDataWith = require('./processData')

const withoutExtension = name => name.split('.')[0]

/**
 * Process a specific file with a specific function
 * @param {*} fn Function to use to process the file
 * @param {string} name Name of the file to process
 */

const processFile = fn => name => {
  const clearName = withoutExtension(name)
  const processData = processDataWith(fn)
  const readInput = readFile(`./inputs/${clearName}.in`)
  const writeOutput = writeFile(`./outputs/${clearName}.out`)

  return new Promise((resolve, reject) => {
    readInput
      .then(processData)
      .then(writeOutput)
      .then(resolve)
      .catch(reject)
  })
}

module.exports = processFile
