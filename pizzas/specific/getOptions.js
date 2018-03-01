const { getFirstLine } = require('./getLines')
const { getWords } = require('./getWords')
const { nItem } = require('./getItems')

const R = require('ramda')

const getOptions = n => R.compose(Number, nItem(n), getWords, getFirstLine)

const getRowsCounts = getOptions(0)
module.exports.getRowsCounts = getRowsCounts

const getColsCounts = getOptions(1)
module.exports.getColsCounts = getColsCounts

const getMinBySlice = getOptions(2)
module.exports.getMinBySlice = getMinBySlice

const getMaxBySlice = getOptions(3)
module.exports.getMaxBySlice = getMaxBySlice
