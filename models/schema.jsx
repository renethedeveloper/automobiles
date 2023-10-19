const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const carSchema = new mongoose.Schema(
    {
        make: String,
        model: String,
        color: String,
        year: Number,
        isForSale: Boolean,
    },
    {
        timestamps: true
    }
);

// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized +s
// Veggies > veggies
const Car = mongoose.model("Car", carSchema);

module.exports = Car;
