var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  category:String,
  product_name:{
    type:String,
    required:true
  } ,
  product_id:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  } ,
  price:{
    type:String,
    required:true
  } ,
  product_img:{
    type:String,
    required:true
  },
  product_stock:{
    type:Number,
    //required:true
  },
  purchase_price:{
    type:Number,
    required:true
  },

});
var Categories = mongoose.model("Categories", schema);
module.exports = Categories;
