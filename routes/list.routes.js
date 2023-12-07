const router = require("./users.routes")
const User = require("../models/User.model")
const { verifyToken } = require("../middlewares/verifyToken")


router.post('/', verifyToken, (req, res, next) => {

    const { ingredient } = req.body
    const { _id } = req.payload

    User
        .findByIdAndUpdate(
            _id,
            { $push: { myList: ingredient } },
            { new: true })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})

router.post('/delete', verifyToken, (req, res, next) => {
    const { ingredient } = req.body
    const { _id } = req.payload


    console.log('aqui cae en servidor', ingredient)

    User
        .findByIdAndUpdate(
            _id,
            { $pull: { myList: ingredient } },
            { new: true })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})




module.exports = router