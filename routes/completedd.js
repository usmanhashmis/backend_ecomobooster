var express = require("express");
var router = express.Router();
var OrderC = require("../models/completed.js");
/////for user
router.post("/compl", async function (req, res) {
    console.log("order done");
    try {
      var orderCom = new OrderC(req.body);
      await orderCom.save();
      res.send(orderCom);
    } catch (err) {
      console.log(err);
    }
  });
/////for admin
  router.get("/getstatus", async function (req, res) {
    console.log("status getting");
    const getAllStatus = await OrderC.find();
    res.send(getAllStatus);
  });

  module.exports = router;