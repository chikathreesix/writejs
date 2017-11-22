import Element from "./element"

export default class Paragraph extends Element {
  constructor() {
    super()
    console.log("paragraph created!")
  }

  _createElement() {
    let element = document.createElement("p")
    element.innerHTML = "<br>"
    return element
  }
}
