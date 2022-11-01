var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    coin:{
        type:String,
        required:true
      } ,
    amount:{
        type:Number,
        required:true
      } ,
      promocode:{
        type:String,
        required:true
      } ,
})

module.exports = mongoose.model('discount', orderSchema)