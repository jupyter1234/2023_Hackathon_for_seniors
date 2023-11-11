/**
 * eslint-disable no-undef
 *
 * @format
 */

//UserSChema.js

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema(
  {
    contents: {
      type: mongoose.Schema.Types.String,
      required: true,
      trim: true,
    },
    created_date: {
      type: mongoose.Schema.Types.Date,
      required: true,
      trim: true,
    },
    modified_date: { type: Schema.Types.Date, required: true },
    email: { type: mongoose.Schema.Types.String },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'USER',
      required: true,
    },
  },
  { timestamps: true },
);

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;
