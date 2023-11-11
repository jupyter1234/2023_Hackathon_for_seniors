/** @format */

//커뮤니티 관련 api 처리

/** @format */
const { Router } = require('express');
const { Board } = require('../models/Board');

// 라우터 선언
const router = Router();

// GET ALL COMMENTS BY board_id
router.get('/:board_id', async function (req, res) {
  try {
    const comments = await Comment.find({ board_id: req.params.board_id }); // 모든 comments를 검색
    res.json(comments); // JSON 형식으로 응답
  } catch (error) {
    res.status(500).json({ message: error.message }); // 에러 발생 시 500 Internal Server Error 응답
  }
});

// CREATE COMMENTS
router.post('/', async function (req, res) {
  var board = await new Board();
  board.user_id = req.body.user_id;
  user.board_id = req.body.board_id;
  user.content = req.body.content;
  user.created_date = req.body.created_date;

  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }

    res.json({ result: 1 });
  });
});
// DELETE COMMENT
router.delete('/:_id', function (req, res) {
  Comment.remove({ _id: req.params._id }, function (err, output) {
    if (err) return res.status(500).json({ error: 'database failure' });
    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */
    res.status(204).end();
  });
});

module.exports = router;
