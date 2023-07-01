const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;