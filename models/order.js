var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productid:[{
        type:String,
        require:true,
    }],
    quantity: Number,
    email:String,
    isPaid:Boolean,
    price:[{
        type:Number,
        require:true,
    }],
    totalBill: Number,
    coin:String,
    address:String,
    status:{
        type: String,
    default:"Not delivered"
},

})

module.exports = mongoose.model('order', orderSchema)
