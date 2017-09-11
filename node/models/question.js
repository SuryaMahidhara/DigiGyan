var mongoose = require('mongoose');

var User = mongoose.model("User");

var QuestionSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  user: Object
});

module.exports = mongoose.model('Question', QuestionSchema);