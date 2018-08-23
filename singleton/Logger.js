class Logger {
  constructor () {
    this.logs = []
  }

  get count () {
    return this.logs.length
  }

  log (message) {
    const timestamp = new Date().toISOString()
    this.logs.push({ message, timestamp })
    console.log(`${timestamp} - ${message}`)
  }
}

class Singleton {
  constructor () {
    if (!Singleton.instanse) {
      Singleton.instanse = new Logger()
    }
  }

  getInstacse () {
    return Singleton.instanse
  }
}

module.exports = Singleton
