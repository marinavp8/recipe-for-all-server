const express = require('express');
const router = express.Router();
const edamamService = require("../services/edamam.services")


router.get("/search", (req, res, next) => {
    const { q } = req.query
    edamamService
        .getRecipes(q)
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