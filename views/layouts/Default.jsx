const React = require('react')

class Default extends React.Component {
  render () {
    const { blog, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/blogs'>Home</a>
            <a href='/blogs/new'>New Post</a>
            {blog ? <a href={`/blogs/${blog._id}/edit`}> {blog.name} Edit Page </a> : ''}
            {blog ? <a href={`/blogs/${blog._id}`}>{blog.name} Show Page</a> : ''}
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
