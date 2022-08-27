var express = require("express");
var router = express.Router();
var { User } = require("../models/user.js");
var signUp = require("../middleW/userC");
var jwt = require("jsonwebtoken");
/* GET users listing. */
router.post("/signup",signUp, async function (req, res) {
   
  try {
    let check = await User.findOne({ email: req.body.email });
    if (check)
      return res.status(400).send("User with given Email already exist");
    let users = new User(req.body);
    await users.save();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async function (req, res) {
  try {
    let check = await User.findOne({ username: req.body.username });
    if (!check) return res.send("Username not exist");

    if (req.body.password != check.password)
      return res.status(400).send("Password incorrect");

    var token = jwt.sign({ id: check._id }, "mysecretkey");

    res.send({
      username: check.username,
      token,
    });
  } catch (err) {
    res.status(400).json("Username or password incorrect!");
  }
});

router.get("/getall", async function (req, res) {
  const use = await User.find();
  res.send(use);
});
module.exports = router;
