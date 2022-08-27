var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  coin_name: {
    type: [String],
    required: true
 },
 coin_address:{
  type:String,
  required:true
 } 
 
}); 
var cryptopricess = mongoose.model("Prices", schema);

module.exports.Pricesm = cryptopricess;