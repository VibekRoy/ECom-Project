const mongoose = require("mongoose");

const PostSchema = {
  username:{
    type:String,
    required: true    
  },
  id:{
    type:Number,
    required: true
  }
};


const Carts = mongoose.model("OfficialCart", PostSchema); //collection name, schema

module.exports = Carts;