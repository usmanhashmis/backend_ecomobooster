const Joi = require("joi");
var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  username:
  { type:String,
    require:true},
  email: { type:String,
    require:true},
  password: { 
    type:String,
    require:true},
  },
    {timestamps:true}

);
var user = mongoose.model("User", schema);

function validations(object) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(8).max(10).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,15}$")),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });
  return schema.validate(object, { abortEarly: false });
}
module.exports.User = user;
module.exports.validate = validations;
