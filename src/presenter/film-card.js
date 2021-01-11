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
    this._handleSubmitComment = this._handleSubmitComment.bind(this);
    this._handleDeleteComment = this._handleDeleteComment.bind(this);
  }

  init(filmCard) {
    const prevFilmCardView = this._filmCardView;
    this._filmCard = filmCard;

    this._filmCardView = new FilmCardView(filmCard);
    this._filmPopupView = new FilmPopupView(filmCard);

    this._filmCardView.setWatchlistHandler(this._handleWatchlistClick);
    this._filmCardView.setAlreadyWatchedHandler(
        this._handleAlreadyWatchedClick
    );
    this._filmCardView.setFavoriteHandler(this._handleFavoriteClick);

    this._filmPopupView.setSubmitClickHandler(this._handleSubmitComment);
    this._filmPopupView.setDeleteClickHandler(this._handleDeleteComment);

    this._filmCardView.setPopupHandler(
        filmCard,
        [`.film-card__title`, `.film-card__poster`, `.film-card__comments`],
        this._handlePopupClick
    );

    if (prevFilmCardView === null) {
      render(this.filmsContainer, this._filmCardView, RenderPosition.BEFOREEND);
      return;
    }
    if (this.filmsContainer.contains(prevFilmCardView.getElement())) {
      replace(this._filmCardView, prevFilmCardView);
    }
    remove(prevFilmCardView);
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

  _handleSubmitComment(comment) {
    this._updateInitHandler(
        Object.assign({}, this._filmCard, {
          comments: this._filmCard.comments.concat(comment),
        })
    );
  }

  _handleDeleteComment(id) {
    this._updateInitHandler(
        Object.assign({}, this._filmCard, {
          comments: this._filmCard.comments.filter((comment) => comment.id != id),
        })
    );
  }

  _renderPopup(filmCard) {
    this._filmPopupView.init(filmCard);
    document.body.classList.add(`hide-overflow`);
    render(
        document.body,
        this._filmPopupView.getElement(),
        RenderPosition.BEFOREEND
    );
    this._filmPopupView.restoreHandlers();
  }

  _handlePopupClick(filmCard) {
    if (document.querySelector(`.film-details`) !== null) {
      this._filmPopupView.closePopup();
    }
    return this._renderPopup(filmCard);
  }

  destroy() {
    remove(this._filmCardView);
  }
}
