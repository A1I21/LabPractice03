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
const quastionSchema = mongoose.Schema({
  Thequestion: {
    type: String,
  },
  description: {
    type: String,
  },
  level: {
    type: String,
  },
  tags: {
    type: [String],
  },
  scoore: {
    type: Number,
    requrid: true,
  },
  author: {
    type: ObjectId,
    ref: "user",
  },
  numUsersSolved: {
    type: [ObjectId],
    ref: "User",
  },
});
const answarSchema = mongoose.Schema({
  question: {
    type: ObjectId,
    ref: "questions",
  },
  user: {
    type: ObjectId,
    ref: "user",
  },
  answer: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("user", userSchema);
module.exports = mongoose.model("questions", quastionSchema);
module.exports = mongoose.model("answers", answarSchema);
