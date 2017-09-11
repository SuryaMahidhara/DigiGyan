var mongoose = require("mongoose"),
    QuestionModel = require('./../models/question.js'),
    AnswerModel = require('./../models/question.js'),
    _lodash = require("lodash");

var Question = mongoose.model("Question");

var questionController = {};

questionController.save = function(req, res) {
  var question = new Question(req.body),
      result = {};

  console.log(req.body);

  question.save(function(err, data) {
    if(err) {
      console.log(err);
      res.send({"status": false});
    } else {
      console.log("Successfully created a Question.");
      console.log(data);
      result = {
          id : data._id,
          title : data.title,
          description : data.description,
          tags : data.tags
      }
      res.send({"status": true, result: result});
    }
  });
};

questionController.getQuestions = function(req, res) {
  
  var questions = [];

  console.log(req.body);

  QuestionModel.find({}, function(err, data) {
        var question = {};
        if(err) {
            console.log(err);
            res.send({"status": false});
        } else {
            console.log("Fetch Tags.");                        
            for (var i = 0, len = data.length; i < len; i++) {
                question = {};                ;
                if(_lodash.difference(req.body.tags, data[i].tags).length <  req.body.tags.length) {
                    question.questionId = data[i]._id;
                    question.userId = data[i].user.userId;
                    question.userName = data[i].user.userName;
                    question.title = data[i].title;
                    question.description = data[i].description;
                    AnswerModel.find({"question":req.body.questionId}, function(err, data) {
                            var answer = {};
                            if(err) {
                                console.log(err);
                                res.send({"status": false});
                            } else {
                                res.send({"status": true, "result": {"answers": data}});
                            }
                    });                    
                    questions.push(question);
                } 
            }
            console.log("out of loop")
            res.send({"status": true, "result": {"questions": questions}});
        }
  });
};

module.exports = questionController;