var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  model: [
    {
      type: String,
      parameters: [
        {
          productid: Number,
          quantity: Number,
          price: Number,
        },
      ],
    },
  ],
  email: {
    type: String,
    require: true,
  },
  totalBill: {
    type: Number,
  },
  coin: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  isPaid: Boolean,
  status: {
    type: String,
    default: "Not delivered",
  },
  time : { type : Date, default: Date.now }
});

module.exports = mongoose.model("order", orderSchema);
