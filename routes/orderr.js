var express = require("express");
var router = express.Router();
var OrderM = require("../models/order.js");
var Product = require("../models/categories");
/////for user
router.post("/order", async function (req, res) {
    
    
    try {
      console.log("inside")
      var getOrderMdata = new OrderM(req.body);
      await getOrderMdata.save();
      for(let i=0;i<req.body.productdetail.length;i++){
        let id=req.body.productdetail[i].productid;
        let orderQty=req.body.productdetail[i].quantity;
        console.log(orderQty)
        let product=await Product.find({product_id:id})
        let presentQty=product[0].product_stock;
        let newQty=parseInt(presentQty)-parseInt(orderQty)
        console.log(newQty)
      let product1=await Product.findOneAndUpdate({product_id:id},{product_stock:newQty})
      await product1.save();
    }
    // const item = await OrderM.findOne({ _id });
    // console.log("idss",item);
      res.send(
        {getOrderMdata,
        
        });
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

  // router.get("/getorderbydate", async function (req, res) {
  //   console.log("product getting");
  //   const getAllOrder = await OrderM.find();
  //   res.send(getAllOrder);
  // });
 

  router.put("/status/:id", async function (req, res) {
    console.log("updating");
    const use = await OrderM.findByIdAndUpdate(req.params.id, {status:"Order completed"});
    await use.save();
    console.log(use);
    res.send(use);
  
  });
  module.exports = router;