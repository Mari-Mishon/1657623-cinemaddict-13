import {generateFooterStats} from "../mock/footer-stats.js";
import {createElement} from "../utils.js";

const createFooterStatsTemplate = () => {
  const footerStats = generateFooterStats();
  return `
    <p>${footerStats} movies inside</p>
  `;
};

export default class FooterStats {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createFooterStatsTemplate();
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

