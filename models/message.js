var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
      } ,
    msg:{
        type:String,
        required:true
      } ,
})

module.exports = mongoose.model('message', orderSchema)