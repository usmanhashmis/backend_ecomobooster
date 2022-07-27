var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  Symbol:String,
  coin_name: String,
  current_price: String,
});
var cryptoprices = mongoose.model("Prices", schema);

module.exports.cryptoprices = cryptoprices;