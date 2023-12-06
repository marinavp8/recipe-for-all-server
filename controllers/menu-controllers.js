
const Menu = require("../models/Menu.model")

const getMenus = (req, res, next) => {
    const { owner } = req.params
    Menu
        .find({ owner })
        .then((response) => res.json(response))
        .catch(err => next(err))
}

const getId = (req, res, next) => {

    const { _id } = req.params
    Menu
        .findById(_id)
        .then((response) => res.json(response))
        .catch(err => next(err))

}

const createMenu = (req, res, next) => {

    const { body: menu } = req
    const { _id: owner } = req.payload
    menu.owner = owner

    Menu
        .create(menu)
        .then((response) => res.json(response))
        .catch(err => next(err))

}

const editName = (req, res, next) => {
    const { _id } = req.params
    const { name } = req.body

    Menu
        .findByIdAndUpdate(_id, { name })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const updateBreakfast = (req, res, next) => {
    const { _id: menuId, day } = req.params
    const { realId } = req.body

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeBreakfastId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(() => {
            res.sendStatus(201)
        })
        .catch(err => next(err))
}

const updateLunch = (req, res, next) => {
    const { _id: menuId, day } = req.params
    const { realId } = req.body

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeLunchId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(() => {
            res.sendStatus(201)
        })
        .catch(err => next(err))
}

const updateDinner = (req, res, next) => {
    const { _id: menuId, day } = req.params
    const { realId } = req.body

    Menu.findByIdAndUpdate(
        menuId,
        { $set: { "days.$[elem].recipeDinnerId": realId } },
        { arrayFilters: [{ "elem.day": day }], new: true }
    )
        .then(() => {
            res.sendStatus(201)
        })
        .catch(err => next(err))
}

const deleteMenu = (req, res, next) => {

    const { _id } = req.params
    console.log(_id)

    Menu
        .findOneAndDelete(_id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

module.exports = {
    getMenus,
    getId,
    createMenu,
    editName,
    updateBreakfast,
    updateLunch,
    updateDinner,
    deleteMenu

}



