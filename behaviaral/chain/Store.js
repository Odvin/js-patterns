const Storage = require('./Storage')

class Store {
  constructor (name, inventory = []) {
    this.name = name

    const floor = new Storage('store floor', inventory.floor)
    const backroom = new Storage('store backroom', inventory.backroom)
    const localStore = new Storage('nearby store', inventory.localStore, 1)
    const warehouse = new Storage('warehouse', inventory.warehouse, 5)

    // This is the chain of responsibility

    // The first place we looking for
    floor.setNext(backroom)
    // The second place we want to look
    backroom.setNext(localStore)
    // The next one
    localStore.setNext(warehouse)

    this.storage = floor
  }

  find (itemName) {
    return this.storage.find(itemName)
  }
}

module.exports = Store
