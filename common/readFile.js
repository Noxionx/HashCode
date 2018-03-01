const fs = require('fs')

/**
 * Read data of a specific file
 * @param {string} path Path of the file to read
 */

const readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      return err ? reject(err) : resolve(data)
    })
  })
}

module.exports = { readFile }
