import FilmList from "./presenter/film-list.js";
import RankView from "./view/rank.js";
import FooterStatsView from "./view/footer-stats.js";
import {generateFilmCard} from "./mock/film-card.js";
import {render, RenderPosition} from "./utils/render.js";

const FILM_CARDS_COUNT = 20;
const filmCards = new Array(FILM_CARDS_COUNT).fill().map(generateFilmCard);
const siteMainElement = document.querySelector(`.main`);

const filmList = new FilmList(siteMainElement, filmCards);
filmList.init(filmCards);

const headerElement = document.querySelector(`.header`);
render(headerElement, new RankView().getElement(), RenderPosition.BEFOREEND);

const footerElement = document.querySelector(`.footer__statistics`);
render(
    footerElement,
    new FooterStatsView().getElement(),
    RenderPosition.BEFOREEND
);
