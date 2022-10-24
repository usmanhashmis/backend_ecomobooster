var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    ether_address:String,
    matic_address: String,
})

module.exports = mongoose.model('address', orderSchema)