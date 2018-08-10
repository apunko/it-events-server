require('dotenv').config();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

class Crawler {
  static async parse(link) {
    const dom = await JSDOM.fromURL(link);
    const eventNodes = dom.window.document.querySelectorAll('.list-item-events .item-body a.title');

    return Array.from(eventNodes).map((event) => (
      { title: event.textContent }
    ));
  }
}

module.exports = Crawler;
