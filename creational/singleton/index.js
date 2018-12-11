const Store = require('./Store')
const Shopper = require('./Shopper')
// The instance of logger is imported
// Singleton lets us to work with the same instance of the Logger
const logger = require('./Logger')

// First time we use singleton
logger.log('Start app ...')

// Inside class constructor Shopper the same instance of logger is used
const firstCustomer = new Shopper('Vladyslav', 500)
const secondCustomer = new Shopper('Jeck', 100)

// Inside class constructor Store the same instance of logger is used
const someShop = new Store('Good Supplies', [
  {
    item: 'First item mane',
    qty: 5,
    price: 750
  },
  {
    item: 'Second item name',
    qty: 20,
    price: 5
  }
])

// default logger
console.log(`Shopper: ${firstCustomer.name} goes to ${someShop.name}`)
console.log(`Shopper: ${secondCustomer.name} goes to ${someShop.name}`)

// custom logger
logger.log('Finishing app ....')

// how many times singleton was used
console.log(`${logger.count} logs total`)
// all singleton's messages
logger.logs.map(log => console.log(` ${log.message}`))
