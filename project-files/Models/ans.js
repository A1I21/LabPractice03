
const mongoose = require("mongoose");

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

  module.exports = mongoose.model("answers", answarSchema);