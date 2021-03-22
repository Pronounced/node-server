const mongoose = require("mongoose");
const messagesSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  message: String
});

const Messages = mongoose.model("Messages", messagesSchema);
module.exports = Messages;