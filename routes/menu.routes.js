const express = require('express')
const router = express.Router()
const Menu = require("../models/Menu.model")


router.get("/getallmenus/:ownerId", (req, res, next) => {
    const { ownerId } = req.params
    Menu
        .find({ owner: ownerId })
        .then((response) => res.json(response))
        .catch(err => next(err))
})


router.get("/:_id", (req, res, next) => {

    const { _id } = req.params
    Menu
        .findById(_id)
        .then((response) => res.json(response))
        .catch(err => next(err))

})

router.post("/", (req, res, next) => {

    const menu = req.body

    Menu
        .create(menu)
        .then((response) => res.json(response))
        .catch(err => next(err))

})

router.put("/updateMenu/:_id", (req, res, next) => {
    const { _id } = req.params
    const { name } = req.body
    console.log(_id)
    console.log(req.body)

    Menu
        .findByIdAndUpdate(_id, { name }, { new: false })
        .then(updatedMenu => res.json(updatedMenu))
        .catch(err => next(err))
})


// router.put("/updateMenu/:_id/:day", (req, res, next) => {
//     const { _id, day } = req.params
//     const { realId } = req.body
//     console.log("ESTO ES LO QUE LLEGA AL BACK", _id, day, realId)

//     Menu.findByIdAndUpdate(_id, day, { recipeBreakfastId: realId }, { new: true })
//         .then(updatedMenu => { res.json(updatedMenu); console.log("recetaaaa", updatedMenu) })
//         .catch(err => next(err))

// })


router.put("/updateMenu/:_id/:day", (req, res, next) => {
    const { _id, day } = req.params;
    const { realId } = req.body;
    console.log("ESTO ES LO QUE LLEGA AL BACK", _id, day, realId);

    Menu.findByIdAndUpdate(
        _id,
        { $set: { "days.$[elem].recipeBreakfastId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
            console.log("recetaaaa", updatedMenu);
        })
        .catch(err => next(err));
})
router.put("/updateMenuLunch/:_id/:day", (req, res, next) => {
    const { _id, day } = req.params;
    const { realId } = req.body;
    console.log("ESTO ES LO QUE LLEGA AL BACK", _id, day, realId);

    Menu.findByIdAndUpdate(
        _id,
        { $set: { "days.$[elem].recipeLunchId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
            console.log("recetaaaa", updatedMenu);
        })
        .catch(err => next(err));
});
router.put("/updateMenuDinner/:_id/:day", (req, res, next) => {
    const { _id, day } = req.params;
    const { realId } = req.body;
    console.log("ESTO ES LO QUE LLEGA AL BACK", _id, day, realId);

    Menu.findByIdAndUpdate(
        _id,
        { $set: { "days.$[elem].recipeDinnerId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
            console.log("recetaaaa", updatedMenu);
        })
        .catch(err => next(err));
});



router.delete("/deleteMenu/:id", (req, res, next) => {

    const { _id } = req.params;

    Menu
        .findOneAndDelete(_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
})

module.exports = router