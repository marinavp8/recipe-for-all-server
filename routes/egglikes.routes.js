const { response } = require("express")
const User = require("../models/User.model")
const router = require("./users.routes")
const { verifyToken } = require("../middlewares/verifyToken")


router.put('/', verifyToken, (req, res, next) => {

    const { recipeId } = req.body
    const { _id: userId } = req.payload

    User
        .findById(userId)
        .then(user => {

            if (!user.favouriteRecipies.includes(recipeId)) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $push: { favouriteRecipies: recipeId } },
                    { new: true },
                    console.log(user))
            }
            else {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { favouriteRecipies: recipeId } },
                    { new: true })

            }


        })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})

module.exports = router