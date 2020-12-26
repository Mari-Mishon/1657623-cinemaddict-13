import {createElement} from "../utils/render.js";

export default class AbstractView {
  constructor() {
    this._element = null;
    this._callback = {};

    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
  }
  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate!`);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
