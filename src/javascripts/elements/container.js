import Element from "./element"
import Paragraph from "./paragraph"

export default class Container extends Element {
  constructor(container) {
    super(container)
    this._element.contentEditable = true

    this._onChange = this._onChange.bind(this)
    this._element.addEventListener("keyup", this._onChange)
    this.addChild(new Paragraph())
  }
}
