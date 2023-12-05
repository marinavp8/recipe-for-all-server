const router = require("express").Router()

const Comment = require('../models/Comments.model')

const { verifyToken } = require("../middlewares/verifyToken")

router.post('/', verifyToken, (req, res, next) => {

    const { comment, recipeCommented } = req.body
    const ownerId = req.payload._id

    Comment
        .create({ comment, owner: ownerId, recipeCommented })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.get('/', verifyToken, (req, res, next) => {

    const { recipeId } = req.query

    Comment
        .find({ recipeCommented: recipeId })
        .populate('owner')
        .then((comments) => res.json(comments))
        .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {

    const { comment } = req.body

    Comment
        .findByIdAndUpdate({ comment })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))


})

module.exports = router