const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Event', eventSchema);
