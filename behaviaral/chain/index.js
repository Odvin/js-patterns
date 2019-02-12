const Store = require('./Store')
// Local DB
const inventory = require('./inventory')

// Store implements Storage
// Storage implements chain pattern
const skiShop = new Store('Steep and Deep', inventory)

const searchItem = 'ski poles'
const results = skiShop.find(searchItem)

console.log(results)
