require('dotenv').config();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

class Crawler {
  static async parse(link) {
    const dom = await JSDOM.fromURL(link);
    dom.window.document.querySelectorAll('.list-item-events .item-body a.title').forEach((event) => {
      console.log(event.textContent);
    });
  }
}

Crawler.parse(process.argv[2] || process.env.DEFAULT_PARSE_URL);
