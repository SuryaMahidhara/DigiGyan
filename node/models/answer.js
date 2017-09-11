var mongoose = require("mongoose");

var User = mongoose.model("User"),
    Question = mongoose.model("Question");

var AnswerSchema = new mongoose.Schema({
  answer: String,
  question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
  likes: Number,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Answer', AnswerSchema);