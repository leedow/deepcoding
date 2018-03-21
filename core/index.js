var mry = require('./memory')

module.exports = {
  // @param config {name, files, content}
  remember(config) {
    let test = new mry(config)
    test.create()
    return test
  },
  // @param {string} name, to
  copyto(name, to) {

  }
}
