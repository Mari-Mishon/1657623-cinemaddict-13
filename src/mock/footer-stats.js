import {getRandomInteger} from "../utils/common.js";

export const generateFooterStats = () => {
  const firstNumber = getRandomInteger(100000, 900000);
  return firstNumber.toLocaleString();
};
