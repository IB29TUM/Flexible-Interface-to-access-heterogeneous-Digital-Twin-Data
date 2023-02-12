const mongoose = require('mongoose');

const ClientSchem = new mongoose.Schema({
  Buildings: {
    type: String,
  },
});

module.exports = mongoose.model('Client', ClientSchem);