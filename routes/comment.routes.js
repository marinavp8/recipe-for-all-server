const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const { sendComment, allComments, deleteComment } = require("../controllers/comments-controllers")

router.post('/', verifyToken, sendComment)

router.get('/', verifyToken, allComments)

router.delete('/delete/:_id', verifyToken, deleteComment)

module.exports = router