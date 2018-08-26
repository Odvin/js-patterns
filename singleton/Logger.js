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

// Method 1. Creating singleton throw new class
// class Singleton {
//   constructor () {
//     if (!Singleton.instanse) {
//       Singleton.instanse = new Logger()
//     }
//   }

//   getInstacse () {
//     return Singleton.instanse
//   }
// }

// module.exports = Singleton

// Method 2. Exporting instance. It is created when the file is running then cashed.
module.exports = new Logger()
