var express = require("express");
var router = express.Router();
var Categ = require("../models/cryptoprices");

/* GET users listing. */
router.post("/add", async function (req, res) {
  console.log("hit");
  try {
    var categ = new Categ(req.body);
    await categ.save();
    res.send(categ);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getprices", async function (req, res) {
  const use = await Categ.find();
  res.send(use);
});
router.get("/:id", async function (req, res) {
  console.log("getting");
  const use = await Categ.findById(req.params.id);
  res.send(use);
});

router.put("/:id", async function (req, res) {
  console.log("updating");
  console.log(req.body.name);
  const edit = req.body;
  const use = await Categ.findByIdAndUpdate(req.params.id, edit);
  await use.save();
  res.send(use);
});



module.exports = router;
