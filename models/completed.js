var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productid:{
        type:String,
        required:true
      } ,
      status:{
        type:String,
        required:true
      },

})

module.exports = mongoose.model('completed', orderSchema)