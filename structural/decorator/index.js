const Shopper = require('./Shopper')
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem')

const alex = new Shopper('Alex', 7000)

// This are the base class
const walkman = new InventoryItem('Walkman', 29.99)
const necklace = new InventoryItem('Necklace', 9.99)

// We want to add some specific features for the base class.
// So the decorator will be implemented.
const goldNecklace = new GoldenInventoryItem(necklace)

// This is decorator above another decorator.
const diamondGoldNecklace = new DiamondInventoryItem(goldNecklace)

// Decorator for base class
const diamondWalkman = new DiamondInventoryItem(walkman)

// Base class implementation
alex.purchase(necklace)
alex.purchase(walkman)

alex.printStatus()

console.log('++++++++++++++++++++++++++')

// Base class with decorators
alex.purchase(diamondGoldNecklace)
alex.purchase(diamondWalkman)

alex.printStatus()
