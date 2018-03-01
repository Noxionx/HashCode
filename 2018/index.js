const { start, done } = require('../common/timeAll')
const { processAll } = require('../common/processAll')
const { main } = require('./main')

// Process all files in inputs directory
// with "pizzas" transformation function.
// Return results in outputs directory
start(processAll)(main).then(done)
