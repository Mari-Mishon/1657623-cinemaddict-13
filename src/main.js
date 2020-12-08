import { createFilmCardTemplate } from "./view/film-card.js";
import { createFilterTemplate } from "./view/filter.js";
import { createMoreButton } from "./view/more-button.js";
import { createRankTemplate } from "./view/rank.js";
import { createSortTemplate } from "./view/sort.js";
import { createFooterStatsTemplate } from "./view/footer-stats.js";
import { createFilmPopupTemplate } from "./view/film-popup.js";
import { generateFilters } from "./mock/filters.js";
import { generateFilmCard } from "./mock/film-card.js";

const FILM_CARDS_COUNT = 5;
const filmCards = new Array(FILM_CARDS_COUNT).fill().map(generateFilmCard);
const filters = generateFilters(filmCards);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.header`);
render(headerElement, createRankTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createFilterTemplate(filters), `afterbegin`);
render(siteMainElement, createSortTemplate(), `afterbegin`);

const filmsElement = document.querySelector(`.films-list`);
render(filmsElement, createMoreButton(), `beforeend`);

const filmListContainerElement = document.querySelector(
  `.films-list__container`
);

for (let filmCard of filmCards) {
  render(filmListContainerElement, createFilmCardTemplate(filmCard), `beforeend`);
}

const filmCardPosters = document.querySelectorAll(`.film-card__poster`);
for (const filmCardPoster of filmCardPosters) {
  filmCardPoster.addEventListener(`click`, () => {
    render(siteMainElement, createFilmPopupTemplate(), `beforeend`);
  });
}

const footerElement = document.querySelector(`.footer__statistics`);
render(footerElement, createFooterStatsTemplate(), `beforeend`);
