const mongoose = require('mongoose');
const Crawler = require('./crawler');
const Event = require('../models/event');

mongoose.connect('mongodb://localhost/it-events');

Crawler.parse(process.argv[2] || process.env.DEFAULT_PARSE_URL).then(async eventNodes => {
  const events = await Event.create(eventNodes);
  console.log(events);
});
