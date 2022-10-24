var express = require("express");
var router = express.Router();
var OrderC = require("../models/completed.js");

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

  router.get("/getstatus", async function (req, res) {
    console.log("status getting");
    const getAllStatus = await OrderC.find();
    res.send(getAllStatus);
  });

  // router.delete("/alldelete", async function (req, res) {
  //   console.log("delete");
  //   await OrderC.find().remove();
  //   return res.send("deleted");
  // });

  module.exports = router;