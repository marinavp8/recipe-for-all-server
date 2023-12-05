const axios = require("axios")

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;

class EdamamService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`,
            params: {
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
            }
        })

    }

    getRecipes(ingredient) {

        return this.axiosApp.get("", {
            params: {
                q: ingredient
            }
        },
        )
    }

    getMultipleIng(ingredient) {
        return this.axiosApp.get("", {
            params: {
                q: ingredient,
                ingr: '1-8'

            }
        },
        )
    }

    getOneRecipe(id) {

        return this.axiosApp.get(`/${id}`)
    }

    getRecipebyMeal(mealType) {

        return this.axiosApp.get('', {
            params: {
                mealType: mealType
            }
        })
    }

    getRecipebyDiet(diet) {

        return this.axiosApp.get('', {
            params: {
                diet: diet
            }
        })
    }

    getRecipeDinnerbying(ingredient) {

        return this.axiosApp.get('', {
            params: {
                q: ingredient,
                mealType: 'dinner'
            }
        })
    }

    getRecipebreackfastbying(ingredient) {

        return this.axiosApp.get('', {
            params: {
                q: ingredient,
                mealType: 'breakfast'
            }
        })
    }

    getRecipeLunchByIng(ingredient) {

        return this.axiosApp.get('', {
            params: {
                q: ingredient,
                mealType: 'lunch'

            }
        })
    }
    getHealthRecipe(health) {

        return this.axiosApp.get('', {
            params: {
                health: health
            }
        })
    }

    getRecipeByCountry(place) {

        return this.axiosApp.get('', {
            params: {
                cuisineType: place

            }
        })
    }
    getRecipeTime(time) {

        return this.axiosApp.get('', {
            params: {
                time: time

            }
        })
    }
    getRecipeCalories(calories) {

        return this.axiosApp.get('', {
            params: {
                calories: calories

            }
        })
    }

    getRecipeExcluding(excluded) {
        return this.axiosApp.get('', {
            params: {
                excluded: excluded

            }
        })
    }


    // getRandom(random) {

    //     return this.axiosApp.get('', {
    //         params: {
    //             random: random

    //         }
    //     })
    // }



}

const edamamService = new EdamamService()

module.exports = edamamService