require('dotenv').config()

const db = require('./db')
const Blog = require('/blogs')

const starterBlogPosts = [
  {
    name: 'What this Blog Is', entry: 'Blah Blah Blah'
  },
  {
    name: 'A little About Me', entry: 'Blah Blah Blah'
  },
  {
    name: 'My first Blog Post', entry: 'Hi! Welcome to My Blog!'
  }
]

Blog.deleteMany({})
  .then(() => {
    Blog.create(starterBlogPosts)
      .then((createdBlogs) => {
        console.log('created blog posts:', createdBlogs)
        db.close()
      })
      .catch(err => {
        console.log(err)
        db.close()
      })
  }).catch(err => {
    console.log(err)
    db.close()
  })
