var express = require("express");
var router = express.Router();
var Address = require("../models/smartcontractaddress.js");

/* GET users listing. */
router.post("/addcontract", async function (req, res) {
  console.log("hit");
  try {
    var categ = new Address(req.body);
    await categ.save();
    res.send(categ);
  } catch (err) {
    console.log(err);
  }
});
 
router.get("/getaddress", async function (req, res) {
  console.log("product getting");
  const use = await Address.find();
  res.send(use);
});



module.exports = router;
