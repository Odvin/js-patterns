const logger = require('./Logger')
// The instance of logger is imported

class Store {
  constructor (name, inventory = []) {
    this.name = name
    this.inventory = inventory
    // We work with the same instance of Logger in the different classes
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`)
  }
}

module.exports = Store
