

module.exports = app => {

  const menuRoutes = require("./menu.routes")
  app.use("/api/menu", menuRoutes)

  const edamamRoutes = require("./edamam.routes")
  app.use("/api/edamam", edamamRoutes)

  const authRoutes = require("./auth.routes")
  app.use("/api/auth", authRoutes)

}
