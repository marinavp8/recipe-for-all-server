const { verifyToken } = require("../middlewares/verifyToken")
const User = require("../models/User.model")
const router = require("express").Router()

router.get('/', verifyToken, (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, _id: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.delete('/delete/:_id', verifyToken, (req, res, next) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})

module.exports = router