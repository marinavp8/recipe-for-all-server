const express = require('express')
const router = express.Router()
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
    getOneRecipe,
    getMultipleFiltering

} = require('../controllers/edamam-controllers')

router.get("/search/dinner", getDinnerByIng)

router.get("/search/breakfast", getRecipebreackfastbying)

router.get("/search/lunch", getRecipeLunchByIng)

router.get("/search", getRecipes)

router.get("/multiple", getMultipleIng)

router.get("/search/health", getHealthRecipe)

router.get("/search/place", getRecipeByCountry)

router.get("/recipes", getRecipebyMeal)

router.get("/recipes/total-time", getRecipeTime)

router.get("/calories", getRecipeCalories)

router.get("/excluding", getRecipeExcluding)

router.get("/vitB12", getByVitaminB12)

router.get("/recipes/:id", getOneRecipe)

router.get("/explore", getMultipleFiltering)

module.exports = router