const scoutPrototype = require('./scoutPrototype')

const alex = scoutPrototype.clone()
alex.name = 'Alex Banks'
alex.addItemToList('slingshot')

var eve = scoutPrototype.clone()
eve.name = 'Eve Porcello'
eve.addItemToList('reading light')

console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eve.name}: ${eve.shoppingList}`)
