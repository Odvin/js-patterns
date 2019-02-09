// To  prevent access to *.txt files on the system

class FsProxy {
  constructor (fsSubject) {
    this.fs = fsSubject
  }
  // Overriding fs method
  readFile (path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`))
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error)
        return callback(error)
      }

      callback(null, contents)
    })
  // Proxy must have exact methods as fs
  // It is not necessary to override all of them
  // it is possible to clone rest of the methods
  }
}

module.exports = FsProxy
