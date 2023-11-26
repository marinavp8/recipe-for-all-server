const express = require('express');
const router = express.Router();
const Menu = require("../models/Menu.model");


// router.get("/menu", (req, res, next) => {
//     Menu
//         .find()
//         .then(data => res.render("users/admin", { user: data }))
//         .catch(err => next(err))
// })


// router.get("/menu/:_id", (req, res, next) => {

//     const { _id } = req.params
//     Menu
//         .findById(_id)
//          .then((response) => res.json(response))
//         .catch(err => next(err))

// })


router.post("/", (req, res, next) => {

    const menu = req.body

    Menu
        .create(menu)
        .then((response) => res.json(response))
        .catch(err => next(err))

})

module.exports = router