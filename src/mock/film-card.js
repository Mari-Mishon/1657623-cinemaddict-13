import dayjs from "dayjs";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateTitle = () => {
  const titles = [
    `Престиж`,
    `Эквиллибриум`,
    `Служебный роман`,
    `Тайна Коко`,
    `Унесенные ветром`,
  ];

  const randomIndex = getrandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxYearsGap = 40;
  const yearsGap = getRandomInteger(-maxYearsGap, 0);

  return dayjs().add(yearsGap, `year`).toDate();
};

export const generateFilmCard = () => {
  return {
    title: generateTitle(),
    poster: `public/images/sagebrush-trail.jpg`,
    description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    releaseDate: generateDate(),
    commentsAmount: 9,
    rating: 8.3,
    genre: `musical`,
  };
};
