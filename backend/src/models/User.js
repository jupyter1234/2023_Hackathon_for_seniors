/**
 * eslint-disable no-undef
 *
 * @format
 */

// UserSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    Name: { type: mongoose.Schema.Types.String, required: true, trim: true },
    Bdate: { type: mongoose.Schema.Types.Date, required: true, trim: true },
    Gender: { type: mongoose.Schema.Types.String, required: true }, // 'require'가 아닌 'required'
    Email: { type: mongoose.Schema.Types.String },
    Phone_number: { type: mongoose.Schema.Types.String, required: true },
  },
  { timestamps: true },
);

var User = mongoose.model('User', UserSchema, { collectionName: 'USER' });

module.exports = { User };
