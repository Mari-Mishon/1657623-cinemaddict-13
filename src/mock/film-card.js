import dayjs from "dayjs";
import {getRandomInteger} from "../utils/common.js";
import {getRandomBoolean} from "../utils/common.js";
import {getRandomFloat} from "../utils/common.js";

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);


const generateTitle = () => {
  const titles = [
    `Престиж`,
    `Эквиллибриум`,
    `Служебный роман`,
    `Тайна Коко`,
    `Унесенные ветром`,
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generatePoster = () => {
  const posters = [
    `./images/posters/made-for-each-other.png`,
    `./images/posters/popeye-meets-sinbad.png`,
    `./images/posters/sagebrush-trail.jpg`,
    `./images/posters/santa-claus-conquers-the-martians.jpg`,
    `./images/posters/the-dance-of-life.jpg`,
    `./images/posters/the-great-flamarion.jpg`,
    `./images/posters/the-man-with-the-golden-arm.jpg`,
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDate = () => {
  const maxYearsGap = 40;
  const yearsGap = getRandomInteger(-maxYearsGap, 0);

  return dayjs().add(yearsGap, `year`).format(`YYYY`);
};

const generateDuration = () => {
  const hour = getRandomInteger(1, 4);
  const firstPartMinutes = getRandomInteger(0, 5);
  const secondPartMinutes = getRandomInteger(0, 9);

  return `${hour}h ${firstPartMinutes}${secondPartMinutes}m`;
};

const generateRaiting = () => {
  const raiting = getRandomFloat(1.0, 10.0);
  return raiting.toPrecision(2);
};

const generateGenre = () => {
  const genres = [`Musical`, `Adventure`, `Horror`, `Western`, `Action`];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateCommentsAmount = () => {
  const comments = getRandomInteger(0, 10);
  return comments;
};

const generateWatchList = () => {
  return getRandomBoolean();
};

const generateWatched = (watchList) => {
  const watched = watchList === true ? false : getRandomBoolean();
  return watched;
};

export const generateFilmCard = () => {
  const watchList = generateWatchList();
  return {
    id: generateId(),
    title: generateTitle(),
    poster: generatePoster(),
    releaseDate: generateDate(),
    duringTime: generateDuration(),
    rating: generateRaiting(),
    genre: generateGenre(),
    description: generateDescription(),
    commentsAmount: generateCommentsAmount(),
    watchList,
    watched: generateWatched(watchList),
    favorite: getRandomBoolean(),
  };
};
