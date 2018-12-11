const PersonBuilder = require('./PersonBuilder')

// Employees
// The Builder pattern helps us to set the properties of the Person instance
const sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build()
const bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build()
const phil = new PersonBuilder('Phil').makeEmployee().build()

// Shoppers
// We use the same builder
// But get the instance of the Person
// with different set of attributes.
const charles = new PersonBuilder('Charles')
  .withMoney(500)
  .withList(['jeans', 'sunglasses'])
  .build()

const tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build()

// It is important, the sets of attributes
// for for Employee and Shopper are different.
console.log('Employees')
console.log(sue.toString())
console.log(bill.toString())
console.log(phil.toString())
console.log('-----------------------')
console.log('Shoppers')
console.log(charles.toString())
console.log(tabbitha.toString())
