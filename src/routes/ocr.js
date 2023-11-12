/** @format */

//커뮤니티 관련 api 처리

/** @format */
const Router = require("express");
const Board = require("../models/Board");
const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const axios = require("axios");
const fs = require("fs");
// 라우터 선언
const router = Router();

function imageToBase64(filePath) {
  // 이미지 파일을 읽어옴
  const imageBuffer = fs.readFileSync(filePath);

  // 이미지를 base64로 인코딩
  const base64Image = imageBuffer.toString("base64");

  return base64Image;
}

router.get("/:image_path", async (req, res) => {
  const imagePath = "uploads/" + req.params.image_path;

  const base64Data = imageToBase64(imagePath);
  try {
    const response = await axios
      .post(
        "https://yq0eygnyb9.apigw.ntruss.com/custom/v1/26118/9850178aefa4c1c7c57f795a0214bbf701c3dc46265794d818a76804f866078b/general",
        {
          body: {
            version: "V2",
            requestId: "1111",
            timestamp: 0,
            lang: "ko",
            images: [
              {
                format: "jpg",
                url: null,
                data: base64Data,
                name: "test_image",
              },
            ],
            enableTableDetection: false,
          },

          header: {
            "X-OCR-SECRET": "Z0FUb292Z2lITXRvcGFxd2x5cll0c0NGYVRuUUNJWWU=",
            "Content-Type": "Application/json",
          },
        },
      )
      .then(res.json({ commit: "success" }));
  } catch (error) {
    res.status(500).json({ message: error.message }); // 에러 발생 시 500 Internal Server Error 응답
  }
});

module.exports = router;
