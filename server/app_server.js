const express = require('express')
const cors = require('cors')
const session = require('express-session')
const app = express()
const passport = require('passport')
const views = require('./views/routes')
const { sequelize } = require('./models/models')
const cookieParser = require("cookie-parser");

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(session({
	secret: 'code',
	resave: true,
	saveUninitialized: true
}))
app.use(cookieParser("code"));
app.use(passport.initialize())
app.use(passport.session())
require('./auth')(passport)

app.use('/api', views)

sequelize.sync({alter: true}).then(() => app.listen(3001, () => {
    console.log("\nServer running on http://localhost:3001")
}))