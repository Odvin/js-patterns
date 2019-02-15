class Shopper {
  constructor (name) {
    this.name = name
  }

  // Notify the shopper about sales (observable instance change)
  notify (storeName, discount) {
    console.log(`${this.name} this is a sale at ${storeName}! ${discount}% of everything`)
  }
}

module.exports = Shopper
