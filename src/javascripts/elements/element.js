import EventDispatcher from "../utils/event_dispatcher"

export default class Element extends EventDispatcher {
  constructor(element) {
    super()

    if (element != null) {
      this._element = element;
    } else {
      this._element = this._createElement()
    }

    //TODO fix on CSS
    this._element.style.cursor = "text"
  }

  _createElement() {
  }

  _onChange() {
    console.log(this._element.innerHTML)
  }

  addChild(child) {
    console.log(child)
    this._element.appendChild(child.element)
    child.element.focus()
  }

  get element() {
    return this._element
  }
}
