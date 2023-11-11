/**
 * eslint-disable no-undef
 *
 * @format
 */

//CommentSChema.js

// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: 'User',
    },
    board_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: 'Board',
    },
    content: {
      type: mongoose.Schema.Types.String,
      required: true,
      trim: true,
    },
    reply: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: 'Comment',
    },
    created_date: { type: Schema.Types.Date, required: true },
  },
  { timestamps: true },
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
