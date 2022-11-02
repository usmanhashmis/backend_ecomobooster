var mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({ 
      productdetail: [
        {
          productid: {type:Number,
            require:true},
          quantity:{ type:Number,
            require:true,},
          price:{ type:Number,
            require:true,},
        },
        
      ],
  email: {
    type: String,
    require: true,
  },
  totalBill: {
    type: Number,
    require:true,
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
