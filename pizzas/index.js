const { start, done } = require('../common/timeAll')
const processAll = require('../common/processAll')
const pizzas = require('./pizzas')

// Process all files in inputs directory
// with "pizzas" transformation function.
// Return results in outputs directory
start(processAll)(pizzas).then(done)
