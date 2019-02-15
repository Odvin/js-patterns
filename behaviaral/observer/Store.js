class Store {
  constructor (name) {
    this.name = name
    this.subscribers = []
  }

  // Keep information about subscribes
  subscribe (observer) {
    this.subscribers.push(observer)
  }

  // Inform subscribes (observer) about sales
  sale (discount) {
    this.subscribers.forEach(observer => observer.notify(this.name, discount))
  }
}

module.exports = Store
