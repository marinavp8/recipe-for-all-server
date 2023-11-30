const axios = require("axios")

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;


class EdamamService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`,
        })

    }

    getRecipes(ingredient) {

        return this.axiosApp.get("", {
            params: {
                q: ingredient,
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
            }
        },
        )
    }

    getOneRecipe(uri) {
        return this.axiosApp.get(`/by-uri`, {
            params: {
                uri: uri,
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                field: '&field=uri&field=label&field=image&field=images&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=glycemicIndex&field=totalCO2Emissions&field=co2EmissionsClass&field=totalWeight&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&field=digest&field=tags'
            }
        })
    }

    getRecipebyMeal(mealType) {
        return this.axiosApp.get('', {
            params: {
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                mealType: mealType
            }
        })
    }

    getRecipebyDiet(diet) {
        return this.axiosApp.get('', {
            params: {
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                diet: diet
            }
        })
    }

    getRecipeDinnerbying(ingredient) {

        return this.axiosApp.get('', {
            params: {
                type: "public",
                q: ingredient,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                mealType: 'dinner'

            }

        })
    }

    getRecipebreackfastbying(ingredient) {

        return this.axiosApp.get('', {
            params: {
                type: "public",
                q: ingredient,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                mealType: 'breakfast'

            }

        })
    }

    getRecipeLunchByIng(ingredient) {

        return this.axiosApp.get('', {
            params: {
                type: "public",
                q: ingredient,
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
                mealType: 'lunch'

            }

        })
    }

    getOneRecipe2(id) {
        return this.axiosApp.get(`/${id}`, {
            params: {
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
            }
        })
    }


}


const edamamService = new EdamamService()

module.exports = edamamService