var fs = require('fs-extra')

module.exports = {
  // copy one file
  copyOne(from, to) {
    try {
      fs.copySync(from, to)
    } catch (err) {
      console.error(err)
      return false
    }
    return true
  },
  // @param Array from [{from, to}]
  copyList(list) {
    try {
      list.forEach(i => {
        fs.copySync(i.from, i.to)
      })
    } catch (err) {
      console.error(err)
      return false
    }
    return true
  }
}
