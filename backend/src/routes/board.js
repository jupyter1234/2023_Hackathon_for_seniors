/** @format */

//커뮤니티 관련 api 처리

/** @format */
const Router = require("express");
const Board = require("../models/Board");
const User = require("../models/User");
const mongoose = require("mongoose");

// 라우터 선언
var router = Router();

const moment = require("moment-timezone");

const getCurrentTime = () => {
  var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
  return m.format("YYYY-MM-DD HH:mm:ss");
};

// GET ALL BOARDS

router.get("/", async function (req, res) {
  try {
    const boards = await Board.find(); // 모든 보드를 검색
    res.json(boards); // JSON 형식으로 응답
  } catch (error) {
    res.status(500).json({ message: error.message }); // 에러 발생 시 500 Internal Server Error 응답
  }
});

// GET BOARD BY Category
router.get("category/:category", async function (req, res) {
  const board = await Board.find({
    category: req.params.category,
  })
    .select("title, user_id, contents, created_date category")
    .populate({ path: "user_id", select: "nickname" })
    .then(console.log("sent"));
  res.json(board);
});

// GET BOARD BY board_id
router.get("/:board_id", async function (req, res) {
  const board = await Board.findOne({
    _id: new mongoose.Types.ObjectId(req.params.board_id),
  })
    .populate({ path: "user_id", select: "nickname" })
    .populate({
      path: "comments",
      populate: { path: "user_id", select: "nickname" },
    })
    .lean()
    .then(console.log("sent"));
  res.json(board);
});

// CREATE Board
router.post("/", async function (req, res) {
  const board = new Board();
  board.contents = req.body.contents;
  board.user_id = req.body.user_id;
  board.category = req.body.category;

  await board.save().then(res.json({ result: "Board created" }));
});

// UPDATE THE board
router.put("/:board_id", function (req, res) {
  const board = Board.findById(req.params._id, function (err, user) {
    if (err) return res.status(500).json({ error: "database failure" });
    if (!board) return res.status(404).json({ error: "board not found" });

    if (req.body.contents) board.contents = req.body.contents;
    board.created_date = getCurrentTime();
    if (req.body.modified_date) board.modified_date = req.body.modified_date;
    if (req.body.user_id) board.user_id = req.body.user_id;
    if (req.body.category) board.category = req.body.category;

    user.save(function (err) {
      if (err) res.status(500).json({ error: "failed to update" });
      res.json({ message: "board updated" });
    });
  });
});

// DELETE USER
router.delete("/:board_id", function (req, res) {
  User.remove({ _id: req.params._id }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */
    res.status(204).end();
  });
});

module.exports = router;
