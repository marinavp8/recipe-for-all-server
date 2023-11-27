const express = require('express');
const router = express.Router();
const edamamService = require("../services/edamam.services")


router.get("/search", (req, res, next) => {

    const { ingredient } = req.query
    console.log("req.query", req.query)

    edamamService
        .getRecipes(ingredient)
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

router.get("/recipes/mealtype", (req, res, next) => {
    const { meal } = req.query
    edamamService
        .getRecipebyMeal(meal)
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






module.exports = router