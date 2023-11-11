const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
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

const User = mongoose.model("User", UserSchema);

module.exports = User;
