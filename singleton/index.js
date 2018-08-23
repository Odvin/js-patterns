const Logger = require('./Logger')
const Store = require('./Store')
const Shopper = require('./Shopper')

const logger = new Logger().getInstacse()

logger.log('Start app ...')
const alex = new Shopper('alex', 500)
const skiShop = new Store('Good Supplies', [
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

console.log(`Shopper: ${alex.name} goes to ${skiShop.name}`)

logger.log('Finishing app ....')

console.log(`${logger.count} logs total`)
logger.logs.map(log => console.log(` ${log.message}`))
