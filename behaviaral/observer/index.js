const Store = require('./Store')
const Shopper = require('./Shopper')
const Mall = require('./Mall')

// Tow stores may have discounts
// We want to know about this
// So this classes are observable
const catsAndThings = new Store('Cats & Things')
const insAndOuts = new Store('Ins and Outs')

// Thees classes are observer they are tracking changes in store (in observable class)
const alex = new Shopper('Alex')
const eve = new Shopper('Eve')
const sharon = new Shopper('Sharon')
const mike = new Shopper('Mike')

// This class is observer it tracks changes in both observable instances of observable classes
const valleyMall = new Mall()

// We subscribe objects to listen to changes of another object
// Instance of the observer tracking some instance of observable
// Waiting fro sales in catsAndThings
catsAndThings.subscribe(alex)
catsAndThings.subscribe(eve)
catsAndThings.subscribe(mike)
catsAndThings.subscribe(valleyMall)
// Waiting fro sales in insAndOuts
insAndOuts.subscribe(sharon)
insAndOuts.subscribe(valleyMall)

// The state of store is changed
// All subscribed objects have to know about this
// Sales comes
catsAndThings.sale(20)
insAndOuts.sale(50)

// valleyMall has to know about all sales
console.log(valleyMall.sales)
