import FilmCardView from "./view/film-card.js";
import FilterView from "./view/filter.js";
import MoreButtonView from "./view/more-button.js";
import RankView from "./view/rank.js";
import SortView from "./view/sort.js";
import FooterStatsView from "./view/footer-stats.js";
import FilmPopupView from "./view/film-popup.js";
import {generateFilters} from "./mock/filters.js";
import {generateFilmCard} from "./mock/film-card.js";
import {render, RenderPosition} from "./utils.js";

const FILM_CARDS_COUNT = 20;
const FILM_CARDS_COUNT_INLINE = 5;
const filmCards = new Array(FILM_CARDS_COUNT).fill().map(generateFilmCard);
const filters = generateFilters(filmCards);

const headerElement = document.querySelector(`.header`);
render(headerElement, new RankView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
render(
    siteMainElement,
    new FilterView(filters).getElement(),
    RenderPosition.AFTERBEGIN
);

render(siteMainElement, new SortView().getElement(), RenderPosition.AFTERBEGIN);

const renderPopup = () => {
  const filmPopupView = new FilmPopupView();
  filmPopupView
    .getElement()
    .querySelector(`.film-details__close-btn`)
    .addEventListener(`click`, () => {
      filmPopupView.removeElement();
      document.body.classList.remove(`hide-overflow`);
    });
  document.addEventListener(`keydown`, onEscDown);
  document.body.classList.add(`hide-overflow`);
  render(document.body, filmPopupView.getElement(), RenderPosition.BEFOREEND);
};

const filmListContainerElement = document.querySelector(
    `.films-list__container`
);

const onEscDown = (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    evt.preventDefault();
    document.querySelector(`.film-details`).remove();
    document.removeEventListener(`keydown`, onEscDown);
    document.body.classList.remove(`hide-overflow`);
  }
};

const addPopupEvent = (view, queryClass) => {
  view
    .getElement()
    .querySelector(queryClass)
    .addEventListener(`click`, () => {
      renderPopup();
    });
};

const renderFilmCard = (filmCard) => {
  const filmCardView = new FilmCardView(filmCard);
  addPopupEvent(filmCardView, `.film-card__poster`);
  addPopupEvent(filmCardView, `.film-card__title`);
  addPopupEvent(filmCardView, `.film-card__comments`);

  render(
      filmListContainerElement,
      filmCardView.getElement(),
      RenderPosition.BEFOREEND
  );
};

const filmsElement = document.querySelector(`.films-list`);
for (let i = 0; i < Math.min(filmCards.length, FILM_CARDS_COUNT_INLINE); i++) {
  renderFilmCard(filmCards[i]);
}

if (FILM_CARDS_COUNT_INLINE < filmCards.length) {
  let renderedFilmCount = FILM_CARDS_COUNT_INLINE;
  const showMoreButton = new MoreButtonView();
  render(filmsElement, showMoreButton.getElement(), RenderPosition.BEFOREEND);

  showMoreButton.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmCards
      .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT_INLINE)
      .forEach((filmCard) => renderFilmCard(filmCard));

    renderedFilmCount += FILM_CARDS_COUNT_INLINE;

    if (renderedFilmCount >= filmCards.length) {
      showMoreButton.getElement().remove();
      showMoreButton.removeElement();
    }
  });
}

const footerElement = document.querySelector(`.footer__statistics`);
render(
    footerElement,
    new FooterStatsView().getElement(),
    RenderPosition.BEFOREEND
);
