var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  event: String,
  timing: String,
  members: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;