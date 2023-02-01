const mongoose = require("mongoose");

const ProductSchemas = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

module.exports = mongoose.model("products",ProductSchemas);

