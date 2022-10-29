// Require Modules
require('dotenv').config()
const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Blog = require('./models/blog')

// Create Express App
const app = express()

// Config the App
/* Start Config */
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
/* End Config */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

// Mount Middleware
/* Start Middleware */

/* End Middleware */

// INDEX -- READ -- GET

// NEW
app.get('blog/new', (req, res) => {
  res.render('blog/New')
})

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW -- READ -- GET

/* End Routes */

// Listen on Ports
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
