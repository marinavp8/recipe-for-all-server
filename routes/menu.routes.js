const express = require('express')
const router = express.Router()
const Menu = require('../models/Menu.model')
const { verifyToken } = require('../middlewares/verifyToken')
const { getMenus, getId, createMenu, editName, updateBreakfast, updateLunch, updateDinner, deleteMenu } = require('../controllers/menu-controllers')


router.get('/getallmenus/:owner', getMenus)

router.get('/:_id', getId)

router.post('/', verifyToken, createMenu)

router.put('/updateMenu/:_id', editName)

router.put('/updateMenu/:_id/:day', updateBreakfast)

router.put('/updateMenuLunch/:_id /:day', updateLunch)

router.put('/updateMenuDinner/:_id /:day', updateDinner)

router.delete('/deleteMenu/:id', deleteMenu)

module.exports = router