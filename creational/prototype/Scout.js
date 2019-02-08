class Scout {
  constructor (name = 'unnamed person') {
    this._name = name
    this._shoppingList = []
  }

  set name (value) {
    this._name = value
  }

  get name () {
    return this._name
  }

  get shoppingList () {
    return this._shoppingList.join(', ')
  }

  addItemToList (item) {
    this._shoppingList.push(item)
  }

  clone () {
    // Get all methods of the class
    // "or ger this class prototype"
    const proto = Object.getPrototypeOf(this)

    // Create object with defined prototype
    const cloned = Object.create(proto)

    // Copy all attributes
    cloned._name = this._name
    cloned._shoppingList = [...this._shoppingList]

    return cloned
  }
}

module.exports = Scout
