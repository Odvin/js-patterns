const logger = require('./Logger')

// Default strategy :: logs to console
// It is possible to change in config.json
logger.log('Hello World')
logger.log('Hi World')
logger.log('Yo World')

// We want to change strategy to logs massages to the file
logger.changeStrategy('toFile')

// Now messages are logging to the file
// So it is possible dynamical change strategy
logger.log('Hello World')
logger.log('Hi World')
logger.log('Yo World')
