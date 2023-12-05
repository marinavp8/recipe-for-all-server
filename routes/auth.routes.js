const router = require("express").Router()

const User = require("../models/User.model")

const { verifyToken } = require("../middlewares/verifyToken")

router.post('/signup', (req, res, next) => {

    const { username, email, password, avatar } = req.body

    User
        .create({ email, password, username, avatar })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

})

router.post('/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ errorMessages: ["Email and Password are required."] })
        return
    }

    User

        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ errorMessages: ["User not found."] })
                return
            }

            if (foundUser.validatePassword(password)) {
                const authToken = foundUser.signToken()
                res.status(200).json({ authToken })
            }

            else {
                res.status(401).json({ errorMessages: ["Incorrect password!!!!!!!"] })
            }

        })
        .catch(err => next(err))
})

router.get('/verify', verifyToken, (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
})


module.exports = router