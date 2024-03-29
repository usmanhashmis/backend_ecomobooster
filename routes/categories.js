var express = require("express");
var router = express.Router();
var Categ = require("../models/categories.js");

/* GET users listing. */
router.post("/addproduct", async function (req, res) {
  console.log("hit");
  try {
    var check_id = await Categ.find({product_id:req.body.product_id});
    
    if(check_id.length!=0){
      return res.status(400).send({msg:"Id already exist"});
    }
    else{
    var categ = new Categ(req.body);
      console.log("data:" , categ)
    await categ.save();
    res.send(categ);}
  }
   catch (err) {
    console.log(err);
  }
});
 
router.get("/getproduct", async function (req, res) {
  console.log("product getting");
  const getproduct = await Categ.find();
  res.send(getproduct);
});

router.get("/getallproduct", async function (req, res) {
  console.log("product getting");
  const getAllproduct = await Categ.find();
  res.send(getAllproduct);
});

router.get("/:id", async function (req, res) {
  console.log("One data getting");
  const use = await Categ.findById(req.params.id);
  res.send(use);
});

router.put("/:id", async function (req, res) {
  console.log("updating");
  console.log(req.body);
  const edit = req.body;
  const use = await Categ.findByIdAndUpdate(req.params.id, edit);
  await use.save();
  res.send(use);
});

router.patch('/stockupdate/:id', function (req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    if (!data) {
        return res.status(404).send();
    }
    res.send(data);
}).catch((error) => {
    res.status(500).send(error);
})

});

router.delete("/:id", async function (req, res) {
  console.log("delete");
  console.log(req.params.id);
  await Categ.findByIdAndDelete(req.params.id);

  return res.send("deleted");
});

module.exports = router;
