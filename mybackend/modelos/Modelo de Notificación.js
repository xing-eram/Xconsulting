const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
