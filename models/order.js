var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productid:String,
    quantity: Number,
    email:String,
    isPaid:Boolean,
    price:Number,
    totalBill: Number,
    coin:String,
    address:String,

})

module.exports = mongoose.model('order', orderSchema)