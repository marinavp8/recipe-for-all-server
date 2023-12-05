const { verifyToken } = require("../middlewares/verifyToken")
const jwt = require('jsonwebtoken')
const User = require("../models/User.model")
const router = require("express").Router()

router.get('/', verifyToken, (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, _id: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.delete('/delete/:id', (req, res, next) => {

    const { id } = req.params

    User

        .findByIdAndDelete(id)
        .then(() => console.log())
        .catch(err => next(err))

})


module.exports = router