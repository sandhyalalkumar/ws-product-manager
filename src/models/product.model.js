const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const details = new Schema({
    productCategoty: String, 
    productName: String, 
});

const location = new Schema({
    placeName: String,
    district: String,
    state:String,
    pin:String,
    longitude:Number,
    latitude: Number
});

const productSchema = new Schema({
    title: String, 
    id: String,
    provider: String,
    description: String,
    category: [String],
    location: location,
    details: details
    },{
        timestamps: true
});

module.exports = mongoose.model("products", productSchema);