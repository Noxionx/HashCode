const message = require('./message')
const title = 'Duration'

/**
 * Start the main chrono then return the main function
 * @param {function} fn Main function to call after chrono started
 */

const start = fn => {
  console.time(title)
  return fn
}

/**
 * Terminate and log the main chrono
 * @param {string[]} files Results for all files
 */

const done = files => {
  console.log(message.done(files))
  console.timeEnd(title)
}

module.exports = { start, done }
