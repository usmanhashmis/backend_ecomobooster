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
      let checkusername = await User.findOne({username: req.body.username})
      if(checkusername)
      return res.status(400).send("Username already existed");
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

router.get("/getcustomerdetail/:number", async function (req, res) {
    
  let count=req.params.number?req.params.number:0;
  let skip=count*10
  
  const getAllcuatomer = await User.find().skip(skip).limit(10);
  const number=await User.find();
  const num=Math.floor(number.length/10);
  res.send({records:getAllcuatomer,num});
});

router.post("/getcustomerbydate", async function (req, res) {
  console.log("product getting by date",req.body);

  let checkbydate = req.body.number;
  
  let d=new Date() - (checkbydate*60*60*24*1000)
  const getAllCustomer = await User.find({createdAt:{$gte: d}});
   
  res.send(getAllCustomr);
  
});


module.exports = router;
