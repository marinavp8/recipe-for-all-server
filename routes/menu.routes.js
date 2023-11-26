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
//         .findByIdAndDelete(_id)
//         .then(() => res.redirect("/usersadmin"))
//         .catch(err => next(err))

// })


router.post("/", (req, res, next) => {

    let menu = {
        name: "menú 1",
        days: [{
            day: "Monday",
            recipeBreakfastId: "b79327d05b8e5b838ad6cfd9576b30b6",
            recipeLunchId: "b79327d05b8e5b838ad6cfd9576b30b6",
            recipeDinnerId: "b79327d05b8e5b838ad6cfd9576b30b6"
        },
        {
            day: "Tuesday",
            recipeBreakfastId: "b79327d05b8e5b838ad6cfd9576b30b6",
            recipeLunchId: "b79327d05b8e5b838ad6cfd9576b30b6",
            recipeDinnerId: "b79327d05b8e5b838ad6cfd9576b30b6"
        }
        ]
    }
    Menu
        .create(menu)
        .then((response) => res.json(response))
        .catch(err => next(err))

})

module.exports = router