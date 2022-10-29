const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    images: { type: Array, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    location: { type: Object },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", ListingSchema);
