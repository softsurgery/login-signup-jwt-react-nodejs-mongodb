const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
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

clientSchema.plugin(mongoosePaginate);
const Client = mongoose.model('Client', clientSchema);

module.exports = Client;