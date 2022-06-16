const mongoose = require("mongoose");
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


module.exports = mongoose.model("questions", quastionSchema);