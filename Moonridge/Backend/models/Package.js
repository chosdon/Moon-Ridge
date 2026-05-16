const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: String,
  description: String
});

module.exports = mongoose.model("Package", packageSchema);