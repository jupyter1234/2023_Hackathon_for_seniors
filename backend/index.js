/** @format */

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

// 라우터 추가
const userRouter = require('./src/routes/UserRoute');

// express app 생성
const app = express();

app.use(cors());

// DB 연결
mongoose.connect(process.env.MONGO_URI, { dbName: 'Hackerton2023_Back' });

// 커넥션 관리 이벤트 :: 연결 확인 log
mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('OK');
});

// 라우터 이동
app.use('/api/users', userRouter);

// express.req.body 안에 body-parser 기능들을 정의.
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001);
