const mongoose = require('mongoose');
const Crawler = require('./crawler');
const Event = require('../models/event');
const logger = require('../helpers/logger')(__filename);

mongoose.connect('mongodb://localhost/it-events');

Crawler.parse(process.argv[2] || process.env.DEFAULT_PARSE_URL)
  .then(async eventNodes => {
    const events = await Event.create(eventNodes);
    logger.info(`Next events(${events.length}) were saved: ${events}`);
    mongoose.disconnect();
  })
  .catch(error => {
    logger.error(`Error during link parsing: ${error}`);
    mongoose.disconnect();
  });
