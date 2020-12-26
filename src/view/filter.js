import AbstractView from "./abstract.js";

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

export default class Filter extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
