
var express = require("express");
var router = express.Router();
var { Admin_User } = require("../models/adminlogin");
var jwt = require("jsonwebtoken");

router.post("/login", async function (req, res) {
    try {
      let check = await Admin_User.findOne({ admin_username: req.body.admin_username });
      if (!check) return res.status(400).send("User with given Email not exist");
  
      if (req.body.password != check.password)
        return res.status(400).send("password incorrect");
  
      var token = jwt.sign({ id: check._id }, "mysecretkey");
  
      res.send({
        username: check.username,
        token,
      });
    } catch (err) {
      res.status(400).json("Username or password incorrect!");
    }
  });

  module.exports = router;