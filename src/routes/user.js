/** @format */

//유저 로그인, 회원가입 처리 라우터
//유저 로그인, 회원가입 처리 라우터
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//로그인
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ user_ID: req.body.user_ID });
    //진짜 유저 없음
    if (!user) {
      console.log("유저 정보 없음");
      return res.status(400).send("Auth failed, ID not found");
    }
    if (user.password == req.body.password) {
      return res.json({ user_id: user._id });
    } else {
      return res.status(400).send("Wrong Password");
    }
  } catch (error) {
    next(error);
  }
});

//회원가입
router.post("/register", async (req, res, next) => {
  try {
    //console.log("here");
    const user = new User(req.body);
    console.log(req.body.bdate);
    const year = parseInt(req.body.bdate.split("/")[2], 10);
    if (year <= 1958) {
      await user.save().then(console.log("success"));
      return res.sendStatus(200);
    } else {
      res.json({ status: "too young!" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
