
import FilmCardPresenter from "./film-card.js";
import {render, RenderPosition} from "../utils/render.js";
import {updateItem} from "../utils/common.js";
import FilterView from "../view/filter.js";
import MoreButtonView from "../view/more-button.js";
import SortView from "../view/sort.js";

const FILM_CARDS_COUNT_INLINE = 5;

export default class FilmList {
  constructor(mainContainer) {
    this._filmCardPresenters = {};

    this._mainContainer = mainContainer;
    this._filmsContainer = mainContainer.querySelector(`.films-list`);
    this._filmListContainerElement = mainContainer.querySelector(
        `.films-list__container`
    );
    this._handleFilmCardChange = this._handleFilmCardChange.bind(this);
  }

  init(filmCards) {
    this._filterView = new FilterView(filmCards);
    this._sortView = new SortView();
    this._moreButtonView = new MoreButtonView();

    this._filmCards = filmCards;
    this._renderFilmsList(filmCards);
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

  _handleFilmCardChange(updatedFilmCard) {
    this.filmCards = updateItem(this._filmCards, updatedFilmCard);
    this._filmCardPresenters[updatedFilmCard.id].init(updatedFilmCard);
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
        this._filmListContainerElement,
        this._handleFilmCardChange
    );
    filmCardPresenter.init(filmCard);
    this._filmCardPresenters[filmCard.id] = filmCardPresenter;
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
}
