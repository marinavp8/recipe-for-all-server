
module.exports = app => {

  const menuRoutes = require("./menu.routes")
  app.use("/api/menu", menuRoutes)

  const edamamRoutes = require("./edamam.routes")
  app.use("/api/edamam", edamamRoutes)

  const authRoutes = require("./auth.routes")
  app.use("/api/auth", authRoutes)

  const uploadRoutes = require("./upload.routes")
  app.use("/upload", uploadRoutes)

  const commentRoutes = require("./comment.routes")
  app.use("/comment", commentRoutes)

}
