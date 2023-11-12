/** @format */
const { Router } = require('express');
const { User } = require('../models/User');
// 라우터 선언
const router = Router();

// GET ALL USERS

router.get('/', async function (req, res) {
  try {
    const users = await User.find({}); // 모든 사용자를 검색
    res.json(JSON.parse(users)); // JSON 형식으로 응답
  } catch (error) {
    res.status(500).json({ message: error.message }); // 에러 발생 시 500 Internal Server Error 응답
  }
});
// GET SINGLE USER
router.get('/:user_id', function (req, res) {
  res.end();
});

// GET USER BY _id
router.get('/:_id', function (req, res) {
  User.findOne({ Gender: req.params._id }, function (err, user) {
    if (err) return res.status(500).json({ error: err });
    if (!user) return res.status(404).json({ error: 'user not found' });
    res.json(JSON.parse(user));
  });
});

// CREATE User
router.post('/', async function (req, res) {
  var user = await new User();
  console.log(req.body);
  user.Name = req.body.name;
  user.Bdate = new Date(req.body.date);
  user.Gender = req.body.gender;
  user.Email = req.body.email;
  user.Phone_number = req.body.phone_number;

  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 0 });
      return;
    }

    res.json({ result: 1 });
  });
});

// UPDATE THE USER
router.put('/:_id', function (req, res) {
  User.findById(req.params._id, function (err, user) {
    if (err) return res.status(500).json({ error: 'database failure' });
    if (!user) return res.status(404).json({ error: 'user not found' });

    if (req.body.name) user.Name = req.body.name;
    if (req.body.date) user.Bdate = req.body.date;
    if (req.body.gender) user.Gender = req.body.gender;
    if (req.body.email) user.Email = req.body.email;
    if (req.body.phone_number) user.Phone_number = req.body.phone_number;

    user.save(function (err) {
      if (err) res.status(500).json({ error: 'failed to update' });
      res.json({ message: 'user updated' });
    });
  });
});

// DELETE USER
router.delete('/:_id', function (req, res) {
  User.remove({ _id: req.params._id }, function (err, output) {
    if (err) return res.status(500).json({ error: 'database failure' });

    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */

    res.status(204).end();
  });
});

module.exports = router;
