import FilmCardView from "../view/film-card.js";
import FilmPopupView from "../view/film-popup.js";
import {remove, render, RenderPosition, replace} from "../utils/render.js";

export default class FilmCard {
  constructor(filmsContainer, updateInitHandler) {
    this.filmsContainer = filmsContainer;
    this._updateInitHandler = updateInitHandler;

    this._filmCardView = null;

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleAlreadyWatchedClick = this._handleAlreadyWatchedClick.bind(
        this
    );
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);

    this._handlePopupClick = this._handlePopupClick.bind(this);
  }

  init(filmCard) {
    const prevFilmCardView = this._filmCardView;
    this._filmCard = filmCard;

    this._filmPopupView = new FilmPopupView();

    this._filmCardView = new FilmCardView(filmCard);

    this._filmCardView.setWatchlistHandler(this._handleWatchlistClick);
    this._filmCardView.setAlreadyWatchedHandler(
        this._handleAlreadyWatchedClick
    );
    this._filmCardView.setFavoriteHandler(this._handleFavoriteClick);

    this._filmCardView.addPopupEvent(
        [`.film-card__title`, `.film-card__poster`, `.film-card__comments`],
        this._handlePopupClick
    );

    this._filmPopupView.setCloseClickHandler(() => {
      document.querySelector(`.film-details`).remove();
      document.body.classList.remove(`hide-overflow`);
    });

    this._filmPopupView.setEscClickHandler(() => {
      document.querySelector(`.film-details`).remove();
      document.body.classList.remove(`hide-overflow`);
    });

    if (prevFilmCardView === null) {
      render(this.filmsContainer, this._filmCardView, RenderPosition.BEFOREEND);
      return;
    }

    if (this.filmsContainer.contains(prevFilmCardView.getElement())) {
      replace(this._filmCardView, prevFilmCardView);
    }

    remove(prevFilmCardView);
  }

  destroy() {
    remove(this._filmCardView);
  }

  _renderPopup() {
    this._filmPopupView.init();

    document.body.classList.add(`hide-overflow`);

    render(
        document.body,
        this._filmPopupView.getElement(),
        RenderPosition.BEFOREEND
    );
  }

  _handlePopupClick() {
    if (document.querySelector(`.film-details`) !== null) {
      this._filmPopupView.closePopup();
    }
    return this._renderPopup();
  }

  _handleWatchlistClick() {
    this._updateInitHandler(
        Object.assign({}, this._filmCard, {
          watchList: !this._filmCard.watchList,
        })
    );
  }

  _handleAlreadyWatchedClick() {
    this._updateInitHandler(
        Object.assign({}, this._filmCard, {
          watched: !this._filmCard.watched,
        })
    );
  }

  _handleFavoriteClick() {
    this._updateInitHandler(
        Object.assign({}, this._filmCard, {
          favorite: !this._filmCard.favorite,
        })
    );
  }
}
