const fs = require('fs')

/**
 * Write data to a specific file
 * @param {string} path Path of the file to write
 * @param {any} data Data to write on the file
 */

const writeFile = path => data => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, { encoding: 'utf8' }, err => {
      return err ? reject(err) : resolve(data)
    })
  })
}

module.exports = writeFile
