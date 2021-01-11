import SmartView from "./smart.js";
import {generateId} from "../mock/film-card.js";
const transformDataToTemplate = (comment) => {
  return `
  <li class="film-details__comment">
    <span class="film-details__comment-emoji">
    <img src="${comment.emoji}" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
    <p class="film-details__comment-text">${comment.message}</p>
    <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.authorName}</span>
        <span class="film-details__comment-day">${comment.messageDate}</span>
        <button class="film-details__comment-delete" id="${comment.id}">Delete</button>
    </p>
    </div>
</li>
`;
};

const createFilmPopupTemplate = (filmCard, data) => {
  console.log(data)
  const commentsList = data.comments;
  // console.log(commentsList);
  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button
              class="film-details__close-btn"
              type="button"
            >
              close
            </button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img
                class="film-details__poster-img"
                src="${filmCard.poster}"
                alt=""
              />
              <p class="film-details__age">${filmCard.age}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${filmCard.title}</h3>
                  <p class="film-details__title-original">
                    Original: ${filmCard.title}
                  </p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${filmCard.rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">Anthony Mann</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">
                    Anne Wigton, Heinz Herald, Richard Weil
                  </td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">
                    Erich von Stroheim, Mary Beth Hughes, Dan Duryea
                  </td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${filmCard.releaseDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${filmCard.duringTime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">USA</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">Drama</span>
                    <span class="film-details__genre">Film-Noir</span>
                    <span class="film-details__genre">Mystery</span>
                  </td>
                </tr>
              </table>

              <p class="film-details__film-description">${
  filmCard.description
}</p>
            </div>
          </div>

          <section class="film-details__controls">
            <input
              type="checkbox"
              class="film-details__control-input visually-hidden"
              id="watchlist"
              name="watchlist"
            />
            <label
              for="watchlist"
              class="film-details__control-label film-details__control-label--watchlist"
              >Add to watchlist</label
            >

            <input
              type="checkbox"
              class="film-details__control-input visually-hidden"
              id="watched"
              name="watched"
            />
            <label
              for="watched"
              class="film-details__control-label film-details__control-label--watched"
              >Already watched</label
            >

            <input
              type="checkbox"
              class="film-details__control-input visually-hidden"
              id="favorite"
              name="favorite"
            />
            <label
              for="favorite"
              class="film-details__control-label film-details__control-label--favorite"
              >Add to favorites</label
            >
          </section>
        </div>

        <div class="film-details__bottom-container"> 
        <section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">
    Comments
    <span class="film-details__comments-count">${commentsList.length}</span>
  </h3>

  <ul class="film-details__comments-list">
    ${commentsList
      .map((comment) => transformDataToTemplate(comment))
      .join(`\n`)}
  </ul>

  <div class="film-details__new-comment">
    <div class="film-details__add-emoji-label">
    ${
  data.emoji
    ? `<img src="./images/emoji/${data.emoji}.png" width ="55" height = "55">`
    : ``
}
    </div>

    <label class="film-details__comment-label">
      <textarea
        class="film-details__comment-input"
        placeholder="Select reaction below and write comment here"
        name="comment"
      >${data.textarea}</textarea>
    </label>

    <div class="film-details__emoji-list">
      <input
        class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-smile"
        value="smile"
      />
      <label class="film-details__emoji-label" for="emoji-smile">
        <img
          src="./images/emoji/smile.png"
          width="30"
          height="30"
          alt="emoji"
        />
      </label>

      <input
        class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-sleeping"
        value="sleeping"
      />
      <label class="film-details__emoji-label" for="emoji-sleeping">
        <img
          src="./images/emoji/sleeping.png"
          width="30"
          height="30"
          alt="emoji"
        />
      </label>

      <input
        class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-puke"
        value="puke"
      />
      <label class="film-details__emoji-label" for="emoji-puke">
        <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" />
      </label>

      <input
        class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-angry"
        value="angry"
      />
      <label class="film-details__emoji-label" for="emoji-angry">
        <img
          src="./images/emoji/angry.png"
          width="30"
          height="30"
          alt="emoji"
        />
      </label>
    </div>
  </div>
</section>

        </div>
    </form>
    </section>
  `;
};

export default class Popup extends SmartView {
  constructor(filmCard) {
    super();
    this.filmCard = filmCard;
    this._data = {
      emoji: null,
      textarea: ``,
      comments: filmCard.comments,
    };
    window._data = this._data;
    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this._submitClickHandler = this._submitClickHandler.bind(this);
    this._textInputHandler = this._textInputHandler.bind(this);
    this._deleteClickHandler = this._deleteClickHandler.bind(this);
  }

  init(filmCard) {
    this.filmCard = filmCard;
    this.restoreHandlers();
  }

  getTemplate() {
    return createFilmPopupTemplate(this.filmCard, this._data);
  }

  _handleCloseClick() {
    this.getElement()
      .querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._closeClickHandler);
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this.closePopup();
  }

  _handleEscClick() {
    document.addEventListener(`keydown`, this._closeEscHandler);
  }

  _closeEscHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      document.querySelector(`.film-details`).remove();
      document.removeEventListener(`keydown`, this._closeEscHandler);
      document.body.classList.remove(`hide-overflow`);
    }
  }

  closePopup() {
    document.querySelector(`.film-details`).remove();
    document.removeEventListener(`keydown`, this._closeEscHandler);
    document.body.classList.remove(`hide-overflow`);
  }

  _emojiClickHandler(evt) {
    evt.preventDefault();
    this.updateData({emoji: evt.target.value});
  }

  _handleEmojiClick() {
    let elements = document.querySelectorAll(`.film-details__emoji-item`);
    elements.forEach((element) =>
      element.addEventListener(`click`, this._emojiClickHandler)
    );
  }

  setInnerHandlers() {
    this._handleCloseClick();
    this._handleEscClick();
    this._handleEmojiClick();
    this._handleTextInput();
  }

  restoreHandlers() {
    this.setInnerHandlers();
    this.setSubmitClickHandler(this._callback._handleSubmitClick);
    this.setDeleteClickHandler(this._callback._handleDeleteClick);
  }

  _textInputHandler(evt) {
    evt.preventDefault();
    this.updateData({textarea: evt.target.value}, true);
  }

  _handleTextInput() {
    this.getElement()
      .querySelector(`.film-details__comment-input`)
      .addEventListener(`input`, this._textInputHandler);
  }

  _submitClickHandler(evt) {
    if (evt.ctrlKey && (evt.keyCode === 0xa || evt.keyCode === 0xd)) {
      const comment = {
        id: generateId(),
        emoji: `./images/emoji/` + this._data.emoji + `.png`,
        message: this._data.textarea,
        authorName: `OEOE`,
        messageDate: `DD YY`,
      };
      evt.preventDefault();
      this._callback._handleSubmitClick(comment);
      this.updateData({comments: this.filmCard.comments.concat(comment)});
    }
  }

  setSubmitClickHandler(callback) {
    this._callback._handleSubmitClick = callback;
    document.addEventListener(`keydown`, this._submitClickHandler);
  }

  setDeleteClickHandler(callback) {
    this._callback._handleDeleteClick = callback;
    this.getElement()
      .querySelectorAll(`.film-details__comment-delete`)
      .forEach((element) =>
        element.addEventListener(`click`, this._deleteClickHandler)
      );
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._callback._handleDeleteClick(evt.target.id);

    this.updateData({
      comments: this._data.comments.filter(
          (comment) => comment.id != evt.target.id
      ),
    });
  }
}
