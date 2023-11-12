/** @format */

//커뮤니티 관련 api 처리

/** @format */
const Router = require("express");
const Board = require("../models/Board");
const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const axios = require("axios");
const fs = require("fs");
const request = require("request");
const { v4: uuidv4 } = require("uuid");

// 라우터 선언
const router = Router();

router.get("/:image_path", async (req, res) => {
  const imagePath = "./uploads/" + req.params.image_path;
  const imageBuffer = fs.readFileSync(imagePath);
  const base64String = imageBuffer.toString("base64");

  const options = {
    uri: "https://yq0eygnyb9.apigw.ntruss.com/custom/v1/26118/9850178aefa4c1c7c57f795a0214bbf701c3dc46265794d818a76804f866078b/general",
    method: "POST",
    json: true, // JSON 형식으로 요청
    body: {
      version: "V1",
      requestId: "string",
      timestamp: 0,
      lang: "ko",
      images: [
        {
          format: "png",
          data: base64String,
          name: "string",
          templateIds: [0],
        },
      ],
      enableTableDetection: false,
    },
    headers: {
      "X-OCR-SECRET": "Z0FUb292Z2lITXRvcGFxd2x5cll0c0NGYVRuUUNJWWU=",
      "Content-Type": "Application/json",
    },
  };
  request.post(options, function (err, httpResponse, body) {
    if (err) {
      res.status(500).json({ message: "Error processing OCR request" });
    } else {
      const extractedData = body.images
        .map((image) => {
          return image.fields.map((field) => {
            return {
              inferText: field.inferText,
            };
          });
        })
        .flat();
      res.json({ extractedData });
    }
  }); //callback})
});

module.exports = router;
