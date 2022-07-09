var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: String,
  description: String,
  date:String,
  profile:String,
});
var Categories = mongoose.model("Categories", schema);
module.exports = Categories;
