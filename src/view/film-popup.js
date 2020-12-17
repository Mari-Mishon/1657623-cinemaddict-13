import {generateFilmPopup} from "../mock/film-popup";
import {createElement} from "../utils.js";

const createFilmPopupTemplate = () => {
  const filmPopup = generateFilmPopup();
  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button
              class="film-details__close-btn"
              type="button"
              onclick="document.querySelector('.film-details').remove()='none'"
            >
              close
            </button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img
                class="film-details__poster-img"
                src="${filmPopup.poster}"
                alt=""
              />
              <p class="film-details__age">${filmPopup.age}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${filmPopup.title}</h3>
                  <p class="film-details__title-original">
                    Original: ${filmPopup.title}
                  </p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${filmPopup.rating}</p>
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
                  <td class="film-details__cell">${filmPopup.releaseDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${filmPopup.duringTime}</td>
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

              <p class="film-details__film-description">${filmPopup.description}</p>
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
      </form>
    </section>

  `;
};

export default class Popup {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmPopupTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
