import { createFilmCardTemplate } from "./view/film-card.js";
import { createFilterTemplate } from "./view/filter.js";
import { createMoreButton } from "./view/more-button.js";
import { createRankTemplate } from "./view/rank.js";
import { createSortTemplate } from "./view/sort.js";
import { createFooterStatsTemplate } from "./view/footer-stats.js";

const FILM_CARDS_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(".header");
render(headerElement, createRankTemplate(), `beforeend`);

const siteMainElement = document.querySelector(".main");
render(siteMainElement, createFilterTemplate(), `afterbegin`);
render(siteMainElement, createSortTemplate(), `afterbegin`);

const filmsElement = document.querySelector(".films-list");
render(filmsElement, createMoreButton(), 'beforeend');

const filmListContainerElement = document.querySelector(
  ".films-list__container"
);

for (let  i = 0; i < FILM_CARDS_COUNT; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

const footerElement = document.querySelector(".footer__statistics");
render(footerElement, createFooterStatsTemplate(), `beforeend`);
