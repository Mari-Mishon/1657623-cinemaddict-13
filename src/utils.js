import dayjs from "dayjs";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

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
export const isTaskExpired = (dueDate) => {
  return dueDate === null ? false : dayjs().isAfter(dueDate, `D`);
};
export const isTaskExpiringToday = (dueDate) => {
  return dueDate === null ? false : dayjs(dueDate).isSame(dayjs(), `D`);
};
export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};
export const humanizeTaskDueDate = (dueDate) => {
  return dayjs(dueDate).format(`D MMMM`);
};
