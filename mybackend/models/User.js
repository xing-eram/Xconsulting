const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
  // Aquí puedes añadir más campos como nombre, contraseña, etc.
});

module.exports = mongoose.model('User', userSchema);
