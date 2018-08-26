// Method 1
// const Logger = require('./Logger')
// const logger = new Logger().getInstacse()

// Method 2
const logger = require('./Logger')

class Shopper {
  constructor (name, money = 0) {
    this.name = name
    this.money = money
    logger.log(`New Shopper: ${name} has ${money} in their account.`)
  }
}

module.exports = Shopper
