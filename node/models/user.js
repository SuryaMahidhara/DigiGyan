var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  tags: Array,
  isActive: Boolean
});

module.exports = mongoose.model('User', UserSchema);