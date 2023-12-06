
const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const { allUsers, deleteUsers } = require("../controllers/users-controllers")

router.get('/', verifyToken, allUsers)
router.delete('/delete/:_id', verifyToken, deleteUsers)

module.exports = router