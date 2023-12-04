const edamamService = require("../services/edamam.services")

const getDinnerByIng = (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeDinnerbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipebreackfastbying = (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipebreackfastbying(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))

}

const getRecipeLunchByIng = (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipeLunchByIng(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipes = (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getRecipes(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getMultipleIng = (req, res, next) => {

    const { ingredient } = req.query

    edamamService
        .getMultipleIng(ingredient)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getHealthRecipe = (req, res, next) => {

    const { health } = req.query

    edamamService
        .getHealthRecipe(health)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipeByCountry = (req, res, next) => {

    const { place } = req.query

    edamamService
        .getRecipeByCountry(place)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}
const getRecipebyMeal = (req, res, next) => {

    const { mealType } = req.query

    edamamService
        .getRecipebyMeal(mealType)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipeTime = (req, res, next) => {

    const { time } = req.query

    edamamService
        .getRecipeTime(time)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipeCalories = (req, res, next) => {

    const { calories } = req.query

    edamamService
        .getRecipeCalories(calories)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getRecipeExcluding = (req, res, next) => {

    const { excluded } = req.query

    edamamService
        .getRecipeExcluding(excluded)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getByVitaminB12 = (req, res, next) => {

    const { index } = req.query

    edamamService
        .getByVitaminB12(index)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

const getOneRecipe = (req, res, next) => {

    const { id } = req.params

    edamamService
        .getOneRecipe(id)
        .then((response) => res.json(response.data))
        .catch(err => next(err))
}

module.exports = {
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
}