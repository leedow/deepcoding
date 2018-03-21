var files = require('../files')

module.exports = class Memory {
  constructor(config) {
    this.name = config.name
    this.configFile = `${config.name}.config.js`
    this.content = config.content||''
    this.from = config.from||'' // 源文件基础路径
    this.files = config.files||[] // [str] 相对from各文件路径
  }

  _pathTemp(path) {
    let p = path?`/${path}`:''
    return `/Users/leedow/www/deepcoding/temp/${this.name}${p}`
  }

  _pathFrom(path) {
    return  `${this.from}/${path}`
  }

  create() {
    files.mkdir(this._pathTemp())
    files.createJson(this._pathTemp(this.configFile), {
      name: this.name,
      content: this.content,
      files: this.files,
      from: this.from
    })
    this.files.forEach(i => {
      files.copyOne(this._pathFrom(i), this._pathTemp(i))
    })
  }

  copyto(to, map) {
    this.files.forEach(i => {
      let aim = i
      try{
        if(typeof map[i] !== 'undefined'){
          aim = map[i]
        }
      } catch(e) {
        //console.error(e)
      }

      files.copyOne(this._pathTemp(i), `${to}/${aim}`)
    })
  }

  getFiles() {
    return this.files
  }
}
