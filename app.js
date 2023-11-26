require("dotenv").config()

require("./db")

const express = require("express")
const app = express()

require("./config")(app)

// const indexRoutes = require("./routes")
const edamamService = require("./services/edamam.services")
// app.use("/api", indexRoutes)

app.get("/hello", (req, res, next) => {
    edamamService
        .getRecipes("chicken")
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})
app.get("/hello2", (req, res, next) => {
    edamamService
        .getOneRecipe("b79327d05b8e5b838ad6cfd9576b30b6")
        .then((response) => res.json(response.data))
        .catch(err => next(err))
})


const menuRoutes = require("./routes/menu.routes")
app.use("/api/menu", menuRoutes)

// const authRoutes = require("./routes/auth.routes")
// app.use("/api/auth", authRoutes)


require("./error-handling")(app)

module.exports = app;
