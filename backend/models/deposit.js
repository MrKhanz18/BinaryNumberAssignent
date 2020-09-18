var mongoose = require("mongoose"); //importing mongoose library in this line
const { ObjectId } = mongoose.Schema;

// var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema(
  {
    id: {
      type: ObjectId,
      ref: "User",
    },

    deposit: {
      type: Number,
      default: 0,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deposit", userSchema);
