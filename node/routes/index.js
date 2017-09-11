var express = require('express');
var router = express.Router();

var user = require("../controllers/UserController.js"),
    question = require("../controllers/QuestionController.js"),
    answer = require("../controllers/AnswerController.js");

/* Register User */
router.post('/api/register', user.save);

/* Login User */
router.post('/api/login', user.login);

/* Save Question */
router.post('/api/saveQuestion', question.save);

/* Fetch Questions */
router.post('/api/getQuestions', question.getQuestions);

/* Save Answer */
router.post('/api/saveAnswer', answer.save);

/* Update Likes */
router.post('/api/getAnswers', answer.getAnswers);

/* Update Likes */
router.post('/api/updateLike', answer.updateLike);

module.exports = router;
