const scoutPrototype = require('./scoutPrototype')

// The classes below share some set of properties.
// For such properties, a common prototype is used.

const alex = scoutPrototype.clone()
alex.name = 'Alex Banks'
alex.addItemToList('slingshot')

var eve = scoutPrototype.clone()
eve.name = 'Eve Porcello'
eve.addItemToList('reading light')

console.log(`${alex.name}: ${alex.shoppingList}`)
console.log(`${eve.name}: ${eve.shoppingList}`)
