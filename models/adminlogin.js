var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  admin_username: String,
  password: String,
});
var admin_user1 = mongoose.model("AUser", schema);

module.exports.Admin_User = admin_user1;