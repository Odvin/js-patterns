const logger = require('./Logger')
// The instance of logger is imported

class Shopper {
  constructor (name, money = 0) {
    this.name = name
    this.money = money
    // We work with the same instance of Logger in the different classes
    logger.log(`New Shopper: ${name} has ${money} in their account.`)
  }
}

module.exports = Shopper
