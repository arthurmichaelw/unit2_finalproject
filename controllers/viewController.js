const RESOURCE_PATH = '/blogs'

const viewController = {
  index (req, res, next) {
    res.render('blogs/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('blogs/New')
  },
  edit (req, res, next) {
    res.render('blogs/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('blogs/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const blogId = req.params.id || res.locals.data.blog._id
    res.redirect(`${RESOURCE_PATH}/${blogId}`)
  }
}

module.exports = viewController
