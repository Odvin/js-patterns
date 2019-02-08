// The Scout class is used as common prototype
const Scout = require('./Scout')

// Shared properties
const scout = new Scout()
scout.addItemToList('camping knife')
scout.addItemToList('tent')
scout.addItemToList('backpack')
scout.addItemToList('map')

module.exports = scout
