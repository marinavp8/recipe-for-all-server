const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")

const { sendComment, allComments, deleteComment } = require("../controllers/comments-controllers")

router.post('/', verifyToken, sendComment)

router.get('/', verifyToken, allComments)

router.post('/edit', (req, res, next) => {

    const { comment } = req.body

    Comment
        .findByIdAndUpdate({ comment })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

})

router.delete('/delete/:_id', verifyToken, deleteComment)

module.exports = router