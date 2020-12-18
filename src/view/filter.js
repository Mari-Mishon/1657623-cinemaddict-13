import {createElement} from "../utils.js";

const createFilterItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;
  return `
      <div class="main-navigation__items">
        <a href="#${name}" class="main-navigation__item">${name}
        <span class="main-navigation__item-count" ${isChecked ? `checked` : ``}
        ${count === 0 ? `disabled` : ``}>${count}</span></a>
      </div> 
  `;
};

export const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join(``);

  return `<nav class="main-navigation">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All</a>
  ${filterItemsTemplate} 
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `;
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
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
