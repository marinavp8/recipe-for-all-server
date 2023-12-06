
const User = require("../models/User.model")


const allUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, _id: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const deleteUsers = (req, res, next) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.json('User deleted succesfully'))
        .catch(err => next(err))

}

module.exports = {

    allUsers,
    deleteUsers

}