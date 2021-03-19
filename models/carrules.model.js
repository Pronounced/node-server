const mongoose = require("mongoose");
const carrulesSchema = new mongoose.Schema({
  name: String,
  startYear: Number,
  endYear: Number,
  make: String,
  model: String,
  color: String
});

const CarRules = mongoose.model("CarRules", carrulesSchema);
module.exports = CarRules;