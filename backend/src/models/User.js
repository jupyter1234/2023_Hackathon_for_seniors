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
    name: { 
      type: mongoose.Schema.Types.String, 
      required: true, 
      trim: true 
    },
    nickname: {
      type: String,
      required: true,
      unique: true
    },
    bdate: 
    { 
      type: mongoose.Schema.Types.Date, 
      required: true, 
      trim: true 
    },
    gender: 
    { 
      type: mongoose.Schema.Types.String, 
      required: true 
    }, // 'require'가 아닌 'required'
    phone_number: 
    { 
      type: mongoose.Schema.Types.String, 
      required: true 
    },
    user_ID: 
    {
      type: String,
      required: true
    },
    password:
    {
      type: String,
      required: true
    }
  },
  { timestamps: true },
);

const User = mongoose.model('user', UserSchema);

module.exports = User;
