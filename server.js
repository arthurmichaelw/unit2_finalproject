require('dotenv').config()
// Require Modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const db = require('.models/db')

// Create Express App
const app = express()

// Config the App
/* Start Config */
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})
/* End Config */

// Mount Middleware
/* Start Middleware */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/blogs', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
/* End Middleware */

// Listen on Ports
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
