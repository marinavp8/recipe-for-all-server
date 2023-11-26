const axios = require("axios")

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.EDAMAM_APP_KEY;


class EdamamService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `https://api.edamam.com/api/recipes/v2`,
        })

    }

    getRecipes(q) {
        return this.axiosApp.get("", {
            params: {
                q: q,
                type: "public",
                app_id: EDAMAM_APP_ID,
                app_key: EDAMAM_APP_KEY,
            }
        },
        )
    }

    getOneRecipe(id) {
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