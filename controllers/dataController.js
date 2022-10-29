const Blog = require('../models/blog')

const dataController = {
    // Index
    index (req, res, next) {
        Blog.find({}, (err, foundBlogs) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.blogs = foundBlogs
                next()
            }
        })
    },
    // Destroy
destroy (req, res, next) {
    Blog.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
        if (err) {
            res.status(400).send({
                msg: err.message
            })
        } else {
            res.locals.data.blog = deletedBlog
            next()
        }
    })
},
    // Update
update (req, res, next) {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBlog) => {
        if (err) {
            res.status(400).send({
                msg: err.message
            })
        } else {
            res.locals.data.blog = updatedBlog
            next()
        }
    })
},
    // Create
    create (req, res, next) {
        Blog.create(req.body, (err, createdBlog) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.blog = createdBlog
                next()
            }
        })
    },
    // Edit

    // Show
    show (req, res, next) {
        Blog.findById(req.params.id, (err, foundBlog) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a post iwht that ID'
                })
            } else {
                res.locals.data.blog = foundBlog
                next()
            }
        })
    }
}

module.exports = dataController