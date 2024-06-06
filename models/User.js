const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  squatMax: { type: Number, default: 0 },
  benchMax: { type: Number, default: 0 },
  deadliftMax: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
