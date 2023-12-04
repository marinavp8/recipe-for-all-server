const { verifyToken } = require("../middlewares/verifyToken")
const jwt = require('jsonwebtoken')
const User = require("../models/User.model")

const router = require("express").Router()

router.get('/', verifyToken, (req, res, next) => {

    User
        .find()
        .select({ username: 1 })
        .then(users => res.json(users))
        .catch(err => next(err))

})

router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
})



module.exports = router