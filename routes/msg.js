var express = require("express");
var router = express.Router();
var MsgM = require("../models/message.js");
/////for user
router.post("/query", async function (req, res) {
    console.log("Entered query");
    try {
      var getOrderMdata = new MsgM(req.body);
      await getOrderMdata.save();
      res.send(getOrderMdata);
    } catch (err) {
      console.log(err);
    }
  });
/////for admin
  router.get("/getallmsg", async function (req, res) {
    console.log("product getting");
    const getAllMsg = await MsgM.find();
    res.send(getAllMsg);
  });


  module.exports = router;