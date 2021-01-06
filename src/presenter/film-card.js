import FilmCardView from "../view/film-card.js";
import FilmPopupView from "../view/film-popup.js";
import {render, RenderPosition} from "../utils/render.js";

export default class FilmCard {
  constructor(filmsContainer) {
    this._filmsContainer = filmsContainer;

    this._handleWatchlistClick = this._handleWatchlistClick.bind(this);
    this._handleAlreadyWathedClick = this._handleAlreadyWathedClick.bind(this);
    this._handleFavouriteClick = this._handleFavouriteClick.bind(this);

    this._handlePopupClick = this._handlePopupClick.bind(this);
  }

  init(filmCard) {
    this._filmPopupView = new FilmPopupView();

    this._filmCardView = new FilmCardView(filmCard);

    this._filmCardView.setWatchlistHandler(this._handleWatchlistClick);
    this._filmCardView.setAlreadyWatchedHandler(this._handleAlreadyWathedClick);
    this._filmCardView.setFavouriteHandler(this._handleFavouriteClick);

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

    render(this._filmsContainer, this._filmCardView, RenderPosition.BEFOREEND);
  }

  _renderPopup() {
    this._filmPopupView.init();
    render(
        document.body,
        this._filmPopupView.getElement(),
        RenderPosition.BEFOREEND
    );
  }

  _handlePopupClick() {
    return this._renderPopup();
  }

  _handleWatchlistClick() {
    // Логика при нажатии на watchlist
  }
  _handleAlreadyWathedClick() {}
  _handleFavouriteClick() {}
}
