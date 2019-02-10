// The class for a particular item, a leaf of the tree
const CatalogItem = require('./CatalogItem')
// The class lets us work with the group of the items (leaves), a branch of a tree.
const CatalogGroup = require('./CatalogGroup')

const boots = new CatalogItem('Leather Boots', 79.99)
const sneakers = new CatalogItem('Kicks', 39.99)
const flipFlops = new CatalogItem('California work boots', 19.99)

// Information about some leaf of the tree
boots.print()
sneakers.print()

// This methods works with particular item
console.log('boots total: ', `$${boots.total}`)

// ---------------------------------------------

// CatalogGroup let's work with the group of the items exactly us with one of them
// We work with the tree of leaves
const groupShoes = new CatalogGroup('Shoes and Such', [boots, sneakers, flipFlops])

// Information about group of items
groupShoes.print()
console.log('shoes total: ', `$${groupShoes.total}`)

// ----------------------------------------------

const groupFood = new CatalogGroup('Food for while you try on clothes', [
  new CatalogItem('Milkshake', 5.99),
  new CatalogItem('French Fries', 3.99)
])

const keychain = new CatalogItem('Key Chain', .99)

// This group consists of the another group (branch) and an item (leaf)
const catalog = new CatalogGroup('Clothes and Food', [keychain, groupShoes, groupFood])

catalog.print()
console.log(`$${catalog.total}`)
