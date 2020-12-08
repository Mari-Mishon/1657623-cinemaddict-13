const cardToFilterMap = {
  all: (filmCards) => {
    return filmCards.length;
  },
  watchlist: (filmCards) =>
    filmCards.filter((filmCard) => filmCard.watchList).length,
  history: (filmCards) =>
    filmCards.filter((filmCard) => filmCard.watched).length,
  favorites: (filmCards) =>
    filmCards.filter((filmCard) => filmCard.favorite).length,
};

export const generateFilters = (filmCards) => {
  return Object.entries(cardToFilterMap).map(([filterName, filterFunction]) => {
    return {
      name: filterName,
      count: filterFunction(filmCards),
    };
  });
};
