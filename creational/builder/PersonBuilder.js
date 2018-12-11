const Person = require('./Person')

class PersonBuilder {
  constructor (name) {
    this.name = name
  }

  makeEmployee () {
    this.isEmployee = true
    // We have to return the instance on the class
    return this
  }

  makeManager (hours = 40) {
    this.isManager = true
    this.hours = hours
    return this
  }

  makePartTime (hours = 20) {
    this.hours = hours
    return this
  }

  withMoney (money = 0) {
    this.money = money
    return this
  }

  withList (list = []) {
    this.shoppingLisnt = list
    return this
  }

  build () {
    // Create the instance of the Person
    return new Person(this)
  }
}

module.exports = PersonBuilder
