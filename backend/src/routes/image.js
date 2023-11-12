//프론트로부터 이미지 받아서 저장하기
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require("path");



//저장할 경로와 이름 설정
const storage = multer.diskStorage({
  destination : function(req,file,cb) {
    cb(null, "uploads")
  },
  filename : function(req,file, cb) {
    cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  }
});

//단일파일 업로드
const uploads = multer(
    {
        storage: storage
    }
).single('file');

router.post("/", async(req,res,next) => {
    uploads(req,res, err => {
        if(err){
            return res.status(500).send(err);
        }
        else {
            console.log(req.filename);
            return res.sendStatus(200);
        }
    })
})
module.exports = router;