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

// Logger has to be a singleton
// That's why the instance of Logger is exported

// it is important to export instance of the class
// ---> module.exports = new Logger() <--- use this for singleton
// but not the class Logger
//  ---> module.exports = Logger <--- don't use this for singleton

module.exports = new Logger()
