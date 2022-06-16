const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
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
  info: {
    type: [String],
  },
  Q: {
    type: [ObjectId],
    ref: "questions",
  },
  A: {
    type: [ObjectId],
    ref: "answers",
  },
});

module.exports = mongoose.model("user", userSchema);
