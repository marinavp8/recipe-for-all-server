const express = require('express');
const router = express.Router();
const edamamService = require("../services/edamam.services")



router.get("/search/dinner", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeDinnerbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => err.data.errors)

})

router.get("/search/breakfast", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipebreackfastbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => err.data.errors)

})

router.get("/search/lunch", (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeLunchByIng(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => err.data.errors)

})



router.get("/search", (req, res, next) => {

    const { ingredient } = req.query


    edamamService
        .getRecipes(ingredient)
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

router.get("/recipes/detail", (req, res, next) => {
    const { uri } = req.params
    edamamService
        .getOneRecipe(uri)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})





module.exports = router