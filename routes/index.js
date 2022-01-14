const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const postRouter = require('./post')

router.use('/user',userRouter);
router.use('/post',postRouter);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    message: "Blogsite api"
  })
});



module.exports = router;
