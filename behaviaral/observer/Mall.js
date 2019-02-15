class Mall {
  constructor () {
    this.sales = []
  }

  // Save information about all sales
  // Tracking all observable instances
  notify (storeName, discount) {
    this.sales.push({ storeName, discount })
  }
}

module.exports = Mall
