const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean
});
const Users = mongoose.model("users", usersSchema);
module.exports = Users;