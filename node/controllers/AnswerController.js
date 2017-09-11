var mongoose = require("mongoose"),
    AnswerModel = require('./../models/answer.js');

var Answer = mongoose.model("Answer");

var answerController = {};

answerController.save = function(req, res) {
  var answer = new Answer(req.body),
      result = {};

  console.log(req.body);

  answer.save(function(err, data) {
    if(err) {
      console.log(err);
      res.send({"status": false});
    } else {
      console.log("Successfully created a Answer.");
      console.log(data);     
      res.send({"status": true});
    }
  });
};

answerController.updateLike = function(req, res) {

  console.log(req.body);

  AnswerModel.findByIdAndUpdate(
    {_id: req.body.answerId},
    { $inc: { likes: 1 } }, 
    function(err, data) {
        if(err) {
        console.log(err);
        res.send({"status": false});
        } else {
        console.log("Update Likes.");
        console.log(data);     
        res.send({"status": true});
        }
  });
};

answerController.getAnswers = function(req, res) {
  
  var answers = [];

  console.log(req.body);

  AnswerModel.find({"question":req.body.questionId}, function(err, data) {
        var answer = {};
        if(err) {
            console.log(err);
            res.send({"status": false});
        } else {
            res.send({"status": true, "result": {"answers": data}});
        }
  });
};

module.exports = answerController;