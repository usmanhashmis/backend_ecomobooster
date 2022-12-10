var express = require("express");
var router = express.Router();
var DisC = require("../models/discount.js");
/////for admin
router.post("/discount", async function (req, res) {
    console.log("Entered discounts");
    try {
      var getOrderMdata = new DisC(req.body);
      await getOrderMdata.save();
      res.send(getOrderMdata);
    } catch (err) {
      console.log(err);
    }
  });
/////for admin
  router.get("/getalldiscounts", async function (req, res) {
    console.log("product getting");
    const getAlldisc = await DisC.find();
    res.send(getAlldisc);
  });
/////for user
  router.get("/getdiscount", async function (req, res) {
    const resentD = await DisC.find().sort({_id:-1}).limit(1);
    res.send(resentD);
  });

  router.delete("/deletelast", async function (req, res) {
    const resentD = await DisC.find().sort({_id:-1}).limit(1);
    res.send(resentD);
  });

  router.delete("/deleterecords", async function (req, res) {
    const alldeleted = await DisC.remove({});
    res.send(alldeleted);
  });


  module.exports = router;