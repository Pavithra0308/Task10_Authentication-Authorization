const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = {User};

