import {generateFooterStats} from "../mock/footer-stats.js";
import AbstractView from "./abstract.js";

const createFooterStatsTemplate = () => {
  const footerStats = generateFooterStats();
  return `
    <p>${footerStats} movies inside</p>
  `;
};

export default class FooterStats extends AbstractView {
  getTemplate() {
    return createFooterStatsTemplate();
  }
}
