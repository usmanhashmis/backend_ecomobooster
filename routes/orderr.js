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
          id:getOrderMdata._id
        
        });
    } catch (err) {
      console.log(err);
    }
  });
/////for admin
  router.get("/getorderdetail/:number", async function (req, res) {
    console.log("product getting");
    let count=req.params.number;
    let skip;
    if(count==1){
      skip=0
    }
    else{
    skip=5*(count-1)};
    const getAllOrder = await OrderM.find().skip(skip).limit(10);
    const number=await OrderM.find();
    const num=Math.floor(number.length/10);
    res.send({records:getAllOrder,num});
  });

  router.post("/getorderbydate", async function (req, res) {
    console.log("product getting by date",req.body);

    let checkbydate = req.body.number;
    
    let d=new Date() - (checkbydate*60*60*24*1000)
    const getAllOrder = await OrderM.find({createdAt:{$gte: d}});
     
    res.send(getAllOrder);
    
  });
 

  router.put("/status/:id", async function (req, res) {
    console.log("updating");
    const use = await OrderM.findByIdAndUpdate(req.params.id, {status:"Order completed"});
    await use.save();
    console.log(use);
    res.send(use);
  
  });

  router.delete("/delete", async function (req, res) {
    const alldeleted = await OrderM.remove().limit(10);
    res.send(alldeleted);
  });
  module.exports = router;