const user = require("../models/user");
const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in Recordss"
      });
    }
    req.profile = user;
    next();
  });
};


exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  return res.json(req.profile);
};

exports.getAllUser = (req,res) => {
  User.find()
  .populate("user","_id name mobile totalbalance")
  .exec((err,users) => {
    if(err){
      return res.status(400).json({
        error:'No user found in records'
      })
    }
    res.json(users)
  })
}
