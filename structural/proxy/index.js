// fs will be controlled by proxy
// const fs = require('fs')
const path = require('path')
const FsProxy = require('./FsProxy')
const fs = new FsProxy(require('fs'))

const txtFile = path.join(__dirname, 'Readme.txt')
const mdFile = path.join(__dirname, 'Readme.md')

// The code lets us read two files
// But we want to restrict access to the .txt file
// Proxy will control the restriction
const result = (error, contents) => {
  if (error) {
    console.log('\x07')
    console.error(error)
    process.exit(0)
  }

  console.log('reading file...')
  console.log(contents)
}

// Proxy does not let us read txt file
// Comment next line to read md file
fs.readFile(txtFile, 'UTF-8', result)
fs.readFile(mdFile, 'UTF-8', result)
