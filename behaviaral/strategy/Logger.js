const LogStrategy = require('./LogStrategy')
const config = require('./config.json')

// Logger can use deferent strategy to logs information
class Logger {
  constructor (strategy = 'toConsole') {
    this.logs = []
    this.strategy = LogStrategy[strategy]
  }

  get count () {
    return this.logs.length
  }

  changeStrategy (newStrategy) {
    this.strategy = LogStrategy[newStrategy]
  }

  log (message) {
    const timestamp = new Date().toISOString()
    this.logs.push({ message, timestamp })
    this.strategy(timestamp, message)
  }
}

// The default strategy for the Logger was taken from config file
module.exports = new Logger(config.logs.strategy)
