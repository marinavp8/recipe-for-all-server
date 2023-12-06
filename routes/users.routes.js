
const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const { allUsers, deleteUsers, findById } = require("../controllers/users-controllers")


router.get('/', verifyToken, allUsers)
router.delete('/delete/:_id', verifyToken, deleteUsers)
router.get('/user/:_id', findById)


module.exports = router