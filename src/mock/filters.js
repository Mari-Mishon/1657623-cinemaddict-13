const cardToFilterMap = {
  Watchlist: (filmCards) =>
    filmCards.filter((filmCard) => filmCard.watchList).length,
  History: (filmCards) =>
    filmCards.filter((filmCard) => filmCard.watched).length,
  Favorites: (filmCards) =>
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
