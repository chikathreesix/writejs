import Container from "./elements/container"

//require('../stylesheets/write.styl')

export default class Write {
  constructor(query) {
    this._query = query
  }

  init() {
    if (document.readyState == "complete"
      || document.readyState == "loaded"
      || document.readyState == "interactive") {
      this.start()
    } else {
      window.addEventListener('load', (e) => {
        this.start()
      })
    }
  }

  start() {
    this._containers = []
    let containers = document.querySelectorAll(this._query)
    for (let i = 0, len = containers.length; i < len; i++) {
      console.log(containers[i])
      this._containers.push(new Container(containers[i]))
    }
  }
}

var write = new Write(".wj-container")
write.init()
