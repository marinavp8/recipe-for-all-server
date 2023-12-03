const express = require('express')
const router = express.Router()
const Menu = require("../models/Menu.model")
const { verifyToken } = require("../middlewares/verifyToken")


router.get("/getallmenus/:owner", (req, res, next) => {
    const { owner } = req.params
    Menu
        .find({ owner })
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

    const { body: menu } = req

    Menu
        .create(menu)
        .then((response) => res.json(response))
        .catch(err => next(err))

})

// TODO: REVISAR TODAS LAS OPORTUNIDADES DE RESPUESTA MEDIANTE HHTP STATUS
router.put("/updateMenu/:_id", verifyToken, (req, res, next) => {
    const { _id } = req.params
    const { name } = req.body
    const { _id: owner } = req.payload

    Menu
        .findByIdAndUpdate(_id, { name }, { owner }, { new: true })
        .then(() => res.sendStatus(201))
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
    const { _id: menuId, day } = req.params
    const { realId } = req.body

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeBreakfastId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
        })
        .catch(err => next(err));
})


// MEJORAR NOMENCLATURA DE REALID
router.put("/updateMenuLunch/:_id/:day", (req, res, next) => {
    const { _id: menuId, day } = req.params
    const { realId } = req.body;

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeLunchId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
        })
        .catch(err => next(err));
})

router.put("/updateMenuDinner/:_id/:day", (req, res, next) => {
    const { _id: menuId, day } = req.params
    const { realId } = req.body;

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeDinnerId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(updatedMenu => {
            res.json(updatedMenu);
        })
        .catch(err => next(err));
});



router.delete("/deleteMenu/:id", (req, res, next) => {

    const { _id } = req.params;

    Menu
        .findOneAndDelete(_id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err));
})

module.exports = router