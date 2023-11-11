/**
 * eslint-disable no-undef
 *
 * @format
 */

//BoardSChema.js

<<<<<<< HEAD
const mongoose = require("mongoose");
const { User } = require("./User");

=======
const { mongoose, Schema } = require("mongoose");
const User = require("./User");

const moment = require("moment-timezone");

const getCurrentTime = () => {
  var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
  return m.format("YYYY-MM-DD HH:mm:ss");
};

>>>>>>> 09e9228 (feat: 보드 CRUD)
const BoardSchema = mongoose.Schema({
  contents: {
    type: String,
    required: true,
    trim: true,
  },
  created_date: {
<<<<<<< HEAD
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
=======
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
});

BoardSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "board_id",
});

const Board = mongoose.model("Board", BoardSchema);
module.exports = Board;
>>>>>>> 09e9228 (feat: 보드 CRUD)
