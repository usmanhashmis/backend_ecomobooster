var express = require("express");
var router = express.Router();
var {Pricesm} = require("../models/cryptoprices.js");
 
/* GET users listing. */
router.post("/add", async function (req, res) {
 var abc = req.body;
 console.log(abc);

  try {
    var categ = new Pricesm(req.body);
    await categ.save();
    res.send(categ);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getprices", async function (req, res) {
  const use = await Pricesm.find().sort({_id:-1}).limit(1);
  res.send(use);
});
router.get("/:id", async function (req, res) {
  console.log("getting");
  const use = await Pricesm.findById(req.params.id);
  res.send(use);
});

router.put("/:id", async function (req, res) {
  console.log("updating");
  console.log(req.body.name);
  const edit = req.body;
  const use = await Pricesm.findByIdAndUpdate(req.params.id, edit);
  await use.save();
  res.send(use);
});



module.exports = router;
