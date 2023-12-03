const express = require('express');
const router = express.Router();
const edamamService = require("../services/edamam.services")

// TODO: REVISAR QUE TODOS LOS CATCH SEAN GESTIONADOS CON NEXT

router.get("/search/dinner", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeDinnerbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))

})

router.get("/search/breakfast", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipebreackfastbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))

})

router.get("/search/lunch", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeLunchByIng(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))

})

router.get("/search", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipes(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/multiple", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getMultipleIng(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})


router.get("/search/health", (req, res, next) => {

    const { health } = req.query

    edamamService
        .getHealthRecipe(health)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/search/place", (req, res, next) => {

    const { place } = req.query

    edamamService
        .getRecipeByCountry(place)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})


router.get("/recipes", (req, res, next) => {

    const { mealType } = req.query

    edamamService
        .getRecipebyMeal(mealType)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/recipes/diet", (req, res, next) => {

    const { diet } = req.query

    edamamService
        .getRecipebyMeal(diet)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/recipes/total-time", (req, res, next) => {

    const { time } = req.query

    edamamService
        .getRecipeTime(time)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/recipes/random", (req, res, next) => {


    edamamService
        .getRandom()
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})


router.get("/recipes/:id", (req, res, next) => {

    const { id } = req.params

    edamamService
        .getOneRecipe(id)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})





module.exports = router