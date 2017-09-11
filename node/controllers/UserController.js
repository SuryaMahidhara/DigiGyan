var mongoose = require("mongoose"),
    UserModel = require('./../models/user.js');

var User = mongoose.model("User");

var userController = {};

userController.save = function(req, res) {
  var user = new User(req.body);

  console.log(req.body);

  user.save(function(err, data) {
    if(err) {
      console.log(err);
      res.send({"status": false});
    } else {
      console.log("Successfully created an user.");
      console.log(data);
      res.send({"status": true});
    }
  });
};

userController.login = function(req, res) {
  var result = {};

  console.log(req.body);

  UserModel.find(req.body, function(err, data) {
    if(err) {
      console.log(err);
      res.send({"status": false});
    } else {
        if(data && data.length) {
            console.log("Fetched user data.");
            console.log(data);
            result = {
                'userName': data[0].userName,
                'userId': data[0]._id,
                'tags': data[0].tags
            };
            console.log(result);
            res.send({"status": true, "result": result});
        } else {
            res.send({"status": false});
        }
      
    }
  });
};

module.exports = userController;