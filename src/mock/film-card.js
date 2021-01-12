import dayjs from "dayjs";
import {getRandomInteger} from "../utils/common.js";
import {getRandomBoolean} from "../utils/common.js";
import {getRandomFloat} from "../utils/common.js";

export const generateId = () =>
  Date.now() + parseInt(Math.random() * 10000, 10);

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

const generateFullDate = () => {
  const maxDaysGap = 5400;
  const DaysGap = getRandomInteger(-maxDaysGap, 0);

  return dayjs().add(DaysGap, `day`).format(`DD MMMM YYYY`);
};

const generateDate = (fullDate) => {
  return dayjs(fullDate).format(`YYYY`);
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

const generateAge = () => {
  const age = getRandomInteger(0, 18);
  return age;
};

export const generateCommentName = () => {
  const names = [
    `Yoda`,
    `Jack Sparrow`,
    `Captain Kirk`,
    `Spock`,
    `Optimus Prime`,
    `Gandalf`,
    `Inigo Montoya`,
    `Magneto`,
    `Tony Stark`,
    `Bilbo Baggins`,
    `Legolas`,
    `Inspector Clouseau`,
    `Obi Wan`,
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);

  return names[randomIndex];
};

const generateListComments = () => {
  return [
    {
      id: generateId(),
      emoji: `./images/emoji/sleeping.png`,
      message: `Hello.world!`,
      authorName: `Peter Jackson`,
      messageDate: dayjs().format(`YYYY/MM/DD HH:mm`),
    },
    {
      id: generateId(),
      emoji: `./images/emoji/puke.png`,
      message: `Hello.world2!`,
      authorName: `Petedasdasdr Jackson`,
      messageDate: dayjs().format(`YYYY/MM/DD HH:mm`),
    },
    {
      id: generateId(),
      emoji: `./images/emoji/angry.png`,
      message: `Hello.world4!`,
      authorName: `Peter Jagfgfckson`,
      messageDate: dayjs().format(`YYYY/MM/DD HH:mm`),
    },
    {
      id: generateId(),
      emoji: `./images/emoji/smile.png`,
      message: `Hello.world3!`,
      authorName: `Peter Jackson`,
      messageDate: dayjs().format(`YYYY/MM/DD HH:mm`),
    },
  ];
};

export const generateFilmCard = () => {
  const watchList = generateWatchList();
  const fullDate = generateFullDate();
  return {
    id: generateId(),
    title: generateTitle(),
    poster: generatePoster(),
    releaseDate: generateDate(fullDate),
    releaseFullDate: fullDate,
    duringTime: generateDuration(),
    rating: generateRaiting(),
    genre: generateGenre(),
    description: generateDescription(),
    commentsAmount: generateCommentsAmount(),
    age: generateAge(),
    watchList,
    watched: generateWatched(watchList),
    favorite: getRandomBoolean(),
    comments: generateListComments(),
    name: generateCommentName(),
  };
};
