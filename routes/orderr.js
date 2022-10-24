var express = require("express");
var router = express.Router();
var OrderM = require("../models/order.js");
/////for user
router.post("/order", async function (req, res) {
    console.log("order done");
    try {
      var getOrderMdata = new OrderM(req.body);
      await getOrderMdata.save();
      res.send(getOrderMdata);
    } catch (err) {
      console.log(err);
    }
  });
/////for admin
  router.get("/getorderdetail", async function (req, res) {
    console.log("product getting");
    const getAllOrder = await OrderM.find();
    res.send(getAllOrder);
  });


  router.put("/status/:id", async function (req, res) {
    console.log("updating");
    const use = await OrderM.findByIdAndUpdate(req.params.id, {status:"Order completed"});
    await use.save();
    console.log(use);
    res.send(use);
  
  });
  module.exports = router;