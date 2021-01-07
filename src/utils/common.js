export const getRandomBoolean = () => {
  return getRandomInteger(0, 1) === 1;
};
export const getRandomFloat = (a = 0, b = 1.0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const updateItem = (items, itemToUpdate) => {
  const index = items.findIndex((item) => item.id === itemToUpdate.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    itemToUpdate,
    ...items.slice(index + 1)
  ];
};
