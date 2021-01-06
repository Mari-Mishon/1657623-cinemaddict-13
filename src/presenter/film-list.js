import FilterView from "../view/filter.js";
import MoreButtonView from "../view/more-button.js";
import SortView from "../view/sort.js";
import FilmCardPresenter from "./film-card.js";
import {render, RenderPosition} from "../utils/render.js";

const FILM_CARDS_COUNT_INLINE = 5;

export default class FilmList {
  constructor(mainContainer) {
    this._mainContainer = mainContainer;
    this._filmsContainer = mainContainer.querySelector(`.films-list`);
    this._filmListContainerElement = mainContainer.querySelector(
        `.films-list__container`
    );
  }

  init(filmCards) {
    this._filmCards = filmCards;
    this._filterView = new FilterView(filmCards);
    this._sortView = new SortView();
    this._moreButtonView = new MoreButtonView();
    this._renderFilmsList(filmCards);
  }

  _renderFilmCards() {
    for (
      let i = 0;
      i < Math.min(this._filmCards.length, FILM_CARDS_COUNT_INLINE);
      i++
    ) {
      this._renderFilmCard(this._filmCards[i]);
    }
  }

  _renderFilmCard(filmCard) {
    const filmCardPresenter = new FilmCardPresenter(
        this._filmListContainerElement
    );
    filmCardPresenter.init(filmCard);
  }

  _renderFilter() {
    render(
        this._mainContainer,
        this._filterView.getElement(),
        RenderPosition.AFTERBEGIN
    );
  }

  _renderSort() {
    render(
        this._mainContainer,
        this._sortView.getElement(),
        RenderPosition.AFTERBEGIN
    );
  }
  _renderMoreButton() {
    render(
        this._filmsContainer,
        this._moreButtonView.getElement(),
        RenderPosition.BEFOREEND
    );
  }

  _renderFilmsList(filmCards) {
    this._renderSort();
    this._renderFilter(filmCards);
    this._renderFilmCards(filmCards);
    if (FILM_CARDS_COUNT_INLINE < filmCards.length) {
      let renderedFilmCount = FILM_CARDS_COUNT_INLINE;
      this._renderMoreButton();

      this._moreButtonView.setClickHandler(() => {
        filmCards
          .slice(renderedFilmCount, renderedFilmCount + FILM_CARDS_COUNT_INLINE)
          .forEach((filmCard) => this._renderFilmCard(filmCard));

        renderedFilmCount += FILM_CARDS_COUNT_INLINE;

        if (renderedFilmCount >= filmCards.length) {
          this._moreButtonView.getElement().remove();
          this._moreButtonView.removeElement();
        }
      });
    }
  }
}
