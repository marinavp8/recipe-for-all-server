const User = require("../models/User.model")

const checkRole = (req, res, next) => {

    const { _id: userId } = req.payload

    User
        .findById(userId)
        .select("role")
        .then((user) => {
            if (user.role !== "ADMIN") {
                res.status(500).json("Admin role required")
            } else {
                next()
            }
        })
        .catch((error) => {
            next(error)
        })
}

module.exports = { checkRole }