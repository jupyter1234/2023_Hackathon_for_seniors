/**
 * eslint-disable no-undef
 *
 * @format
 */

//BoardSChema.js

const { mongoose, Schema } = require("mongoose");
const User = require("./User");

const moment = require("moment-timezone");

const getCurrentTime = () => {
  var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
  return m.format("YYYY-MM-DD HH:mm:ss");
};

const BoardSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  contents: {
    type: String,
    required: true,
    trim: true,
  },
  created_date: {
    type: String,
    required: true,
    trim: true,
    default: getCurrentTime(),
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

BoardSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "board_id",
});

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;
