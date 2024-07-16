import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
