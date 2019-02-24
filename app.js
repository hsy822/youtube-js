import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import routes from  "./routes"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"
import { localsMiddleware } from "./middlewares";

// const express = require('express')
const app = express()
 
const handleHome = (req, res) => res.send('home')

const handleProfile = (req, res) => res.send('profile')

//security
app.use(helmet())
app.set('view engine', 'pug')
app.use('/uploads', express.static('uploads'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//logger
app.use(morgan('dev'))

//middlewares
app.use(localsMiddleware)

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)

export default app