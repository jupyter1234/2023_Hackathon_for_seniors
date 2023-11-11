/**
 * eslint-disable no-undef
 *
 * @format
 */

//CommentSChema.js

// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Board = require("./Board");
const moment = require("moment-timezone");

const getCurrentTime = () => {
  var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
  return m.format("YYYY-MM-DD HH:mm:ss");
};

console.log(getCurrentTime()); // 2022-08-04 00:01:40

const CommentSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "User",
  },
  board_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "Board",
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: true,
    trim: true,
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    ref: "Comment",
  },
  created_date: {
    type: String,
    required: true,
    default: getCurrentTime(),
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
