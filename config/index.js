const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173"

module.exports = (app) => {

  app.set("trust proxy", 1)

  app.use(
    cors({
      origin: [FRONTEND_URL]
    })
  )

  app.use(logger("dev"))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*')

  //   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  //   res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  //   next()
  // })
}