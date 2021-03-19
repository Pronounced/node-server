const mongoose = require("mongoose");
const inventorySchema = new mongoose.Schema({
  vin: String,
  year: Number,
  make: String,
  model: String,
  seller: String,
  color: String,
  isApproved: Boolean
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;