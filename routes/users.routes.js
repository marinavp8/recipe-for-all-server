const { verifyToken } = require("../middlewares/verifyToken")

const User = require("../models/User.model")

const router = require("express").Router


router.get('/', verifyToken, (req, res, next) => {

    User
        .find()
        .then(users => res.json(users))
        .catch(err => next(err))

})

module.exports = router