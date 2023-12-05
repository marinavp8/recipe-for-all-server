const { response } = require("express")
const User = require("../models/User.model")
const router = require("./users.routes")


router.post('/', (req, res, next) => {
    console.log(req.body, req.params, req.query)

    const { userId, recipeId } = req.body

    User
        .findById(userId)
        .then(user => {

            if (!user.favouriteRecipies.includes(recipeId)) {
                return user.findById(userId, { $push: { favouriteRecipies: recipeId } })
            }
            else {
                return user.findById(userId, { $pull: { favouriteRecipies: recipeId } })

            }

        })
        .then(() => console.log(response.data))
        .catch(err => next(err))

})

module.exports = router