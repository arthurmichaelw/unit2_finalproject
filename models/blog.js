const mongoose = require('mongoose')

// Make a Schema
const blogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  entry: { type: String, required: true }
},
{ timestamps: true })

// Make a Model from the Schema
// the Blog model allows us to use the CRUD Create Read Update Destroy in the app

const Blog = mongoose.model('Blog', blogSchema)

// Export the Model for Use in the App
module.exports = Blog
