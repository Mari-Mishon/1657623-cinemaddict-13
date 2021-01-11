import AbstractView from "./abstract.js";
const createFilmCardTemplate = (filmCard) => {
  return `
    <article class="film-card">
      <h3 class="film-card__title">${filmCard.title}</h3>
      <p class="film-card__rating">${filmCard.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmCard.releaseDate}</span>
        <span class="film-card__duration">${filmCard.duringTime}</span>
        <span class="film-card__genre">${filmCard.genre}</span>
      </p>
      <img src="${filmCard.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${filmCard.description}</p>
      <a class="film-card__comments">${filmCard.commentsAmount} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button ${
  filmCard.watchList ? `film-card__controls-item--active` : ``
} film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button ${
  filmCard.watched ? `film-card__controls-item--active` : ``
} film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item button ${
  filmCard.favorite ? `film-card__controls-item--active` : ``
} film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
  `;
};

export default class FilmCard extends AbstractView {
  constructor(filmCard) {
    super();
    this._filmCard = filmCard;
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._alreadyWatchedClickHandler = this._alreadyWatchedClickHandler.bind(
        this
    );
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._popupClickHandler = this._popupClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._filmCard);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback._handleWatchlistClick();
  }

  setWatchlistHandler(callback) {
    this._callback._handleWatchlistClick = callback;
    this.getElement()
      .querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, this._watchlistClickHandler);
  }

  _alreadyWatchedClickHandler(evt) {
    evt.preventDefault();
    this._callback._handleAlreadyWatchedClick();
  }

  setAlreadyWatchedHandler(callback) {
    this._callback._handleAlreadyWatchedClick = callback;
    this.getElement()
      .querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, this._alreadyWatchedClickHandler);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback._handleFavoriteClick();
  }

  setFavoriteHandler(callback) {
    this._callback._handleFavoriteClick = callback;
    this.getElement()
      .querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, this._favoriteClickHandler);
  }

  _popupClickHandler(evt, filmCard) {
    evt.preventDefault();
    this._callback.renderPopup(filmCard);
  }

  setPopupHandler(filmCard, queryClasses, callback) {
    this._callback.renderPopup = callback;
    for (let queryClass of queryClasses) {
      this.getElement()
        .querySelector(queryClass)
        .addEventListener(`click`, (evt) => this._popupClickHandler(evt, filmCard));
    }
  }
}
