const express = require('express');
const router = express.Router();
const edamamService = require("../services/edamam.services")
const {
    getDinnerByIng,
    getRecipebreackfastbying,
    getRecipeLunchByIng,
    getRecipes,
    getMultipleIng,
    getHealthRecipe,
    getRecipeByCountry,
    getRecipebyMeal,
    getRecipeTime,
    getRecipeCalories,
    getRecipeExcluding,
    getByVitaminB12,
    getOneRecipe

} = require('../controllers/edamam-controllers')

router.get("/search/dinner", getDinnerByIng)

router.get("/search/breakfast", getRecipebreackfastbying)

router.get("/search/lunch", getRecipeLunchByIng)

router.get("/search", getRecipes)

router.get("/multiple", getMultipleIng)

router.get("/search/health", getHealthRecipe)

router.get("/search/place", getRecipeByCountry)

router.get("/recipes", getRecipebyMeal)

router.get("/recipes/diet", (req, res, next) => {

    const { diet } = req.query

    edamamService
        .getRecipebyMeal(diet)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})

router.get("/recipes/total-time", getRecipeTime)

router.get("/calories", getRecipeCalories)

router.get("/excluding", getRecipeExcluding)

router.get("/vitB12", getByVitaminB12)

router.get("/recipes/:id", getOneRecipe)

// router.get("/explore", (req, res, next) => {

//     const { ingredient, health, mealtype, calories , time} = req.query

//     edamamService
//         .getMultipleFiltering(ingredient, health, mealtype, calories, time)
//         .then((response) => res.json(response.data))
//         .catch(err => next(err))
// })

module.exports = router