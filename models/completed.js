var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productid:String,
    status:Boolean

})

module.exports = mongoose.model('completed', orderSchema)