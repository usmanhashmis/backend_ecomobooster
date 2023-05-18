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
/////for user
  router.post("/getalldiscounts", async function (req, res) {
    let username=req.body.username;
    const getAlldisc = await DisC.findOne({promocode: req.body.promocode});
   
    if(getAlldisc){
      var users=getAlldisc.users;
      //console.log(users)
      //console.log(username)
      if(users.includes(username)){
        console.log("inside iffff")
        return res.status(400).send("Already used")
      }
      else{
             res.send({
                 amount: getAlldis.amount,
                 promocode:getAlldis.promocode,
                 coin:getAlldis.coin,
                 alerts:"Apply successfully"
    
    });
    //    res.status(200).send("Apply successfully")
      }
    }
    else
    res.status(400).send("Invalid Promo Code")
   
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
