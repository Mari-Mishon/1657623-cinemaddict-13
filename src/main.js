import {createFilmCardTemplate} from "./view/film-card.js";
import {createFilterTemplate} from "./view/filter.js";
import {createMoreButton} from "./view/more-button.js";
import {createRankTemplate} from "./view/rank.js";
import {createSortTemplate} from "./view/sort.js";
import {createFooterStatsTemplate} from "./view/footer-stats.js";
import {createFilmPopupTemplate} from "./view/film-popup.js";
import {generateFilters} from "./mock/filters.js";
import {generateFilmCard} from "./mock/film-card.js";

const FILM_CARDS_COUNT = 20;
const FILM_CARDS_COUNT_INLINE = 5;
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

const filmListContainerElement = document.querySelector(
    `.films-list__container`
);

const filmsElement = document.querySelector(`.films-list`);
for (let i = 0; i < Math.min(filmCards.length, FILM_CARDS_COUNT_INLINE); i++) {
  render(
      filmListContainerElement,
      createFilmCardTemplate(filmCards[i]),
      `beforeend`
  );
}

if (FILM_CARDS_COUNT_INLINE < filmCards.length) {
  let renderedFilmCount = FILM_CARDS_COUNT_INLINE;
  render(filmsElement, createMoreButton(), `beforeend`);

  const moreButton = filmsElement.querySelector(`.films-list__show-more`);
  moreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmCards
      .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT_INLINE)
      .forEach((filmCard) =>
        render(
            filmListContainerElement,
            createFilmCardTemplate(filmCard),
            `beforeend`
        )
      );

    renderedFilmCount += FILM_CARDS_COUNT_INLINE;

    if (renderedFilmCount >= filmCards.length) {
      moreButton.remove();
    }
  });
}

const filmCardPosters = document.querySelectorAll(`.film-card__poster`);
for (const filmCardPoster of filmCardPosters) {
  filmCardPoster.addEventListener(`click`, () => {
    render(siteMainElement, createFilmPopupTemplate(), `beforeend`);
  });
}

const footerElement = document.querySelector(`.footer__statistics`);
render(footerElement, createFooterStatsTemplate(), `beforeend`);
