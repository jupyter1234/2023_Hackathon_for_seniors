/** @format */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config({
  path: ".env",
});
const cors = require("cors");

// 라우터 추가

const userRouter = require("./routes/UserRoute");
const Welfare = require("./models/Welfare_fac");
const board = require("./routes/board");
const comment = require("./routes/comment");

// express app 생성
const app = express();

app.use(cors());
app.use(express.json());

// DB 연결
mongoose.connect(process.env.MONGO_URI, { dbName: "Hackerton2023_Back" });

// 커넥션 관리 이벤트 :: 연결 확인 log
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});
//기관 위치 전부 가져오기
app.get("/welfare", async function (req, res) {
  try {
    const welfares = await Welfare.find({}, { _id: 0, name: 1, location: 1 });
    res.send(welfares);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});
// Welfare.insertMany([
//   {
//     name : "달성군 북부노인복지관",
//     location : {
//       type: 'Point',

//       coordinates : [128.455040, 35.860659]
//     }
//   }
// ]). then(
//   console.log("더미데이터 생성 성공")
// )

app.get("/", (req, res) => {
  res.send("OK");
});

// 라우터 이동

app.use("/user", require("./routes/user"));
app.use("/board", require("./routes/board"));
app.use("/comments", comment);
s;
app.listen(3001);
