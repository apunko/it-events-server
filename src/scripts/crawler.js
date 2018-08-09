require('dotenv').config();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

class Crawler {
  static async parse(link) {
    const dom = await JSDOM.fromURL(link);
    console.log(dom);
  }
}

Crawler.parse(process.argv.slice(-1)[0] || process.env.DEFAULT_PARSE_URL);
