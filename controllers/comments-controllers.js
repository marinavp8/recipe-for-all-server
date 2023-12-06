
const Comment = require('../models/Comments.model')

const sendComment = (req, res, next) => {

    const { comment, recipeCommented } = req.body
    const { _id: owner } = req.payload

    Comment
        .create({ comment, owner, recipeCommented })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const allComments = (req, res, next) => {

    const { recipeId } = req.query

    Comment
        .find({ recipeCommented: recipeId })
        .populate('owner')
        .then((comments) => res.json(comments))
        .catch(err => next(err))
}

const deleteComment = (req, res, next) => {

    const { _id } = req.params

    Comment
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}

module.exports = {
    sendComment,
    allComments,
    deleteComment
}