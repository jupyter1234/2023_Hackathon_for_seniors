/**
 * eslint-disable no-undef
 *
 * @format
 */

//BoardSChema.js

const mongoose = require("mongoose");
const { User } = require("./User");

const BoardSchema = mongoose.Schema({
  contents: {
    type: String,
    required: true,
    trim: true,
  },
  created_date: {
    type: Date,
    required: true,
    trim: true,
  },
  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;