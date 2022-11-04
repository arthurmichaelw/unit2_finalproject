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
          <div className='container'>
          <div className='header'><p className='headerTitle'>Microsoft Internet Explorer - {title} <button>X</button><button>_</button></p></div>
          <nav className='nav'>
            <a href=''>Home</a>
            <a href=''>Edit</a>
            <a href=''>View</a>
            <a href=''>Go</a>
            <a href=''>Favorites</a>
            <a href=''>Help</a>
          </nav>
          <div className='fauxNavigation'>
          <button className='fauxButton'>Back</button>
          <button className='fauxButton'>Forward</button>
          <button className='fauxButton'>Stop</button>
          <button className='fauxButton'>Refresh</button>
          <button className='fauxButton'>Home</button>
          <button className='fauxButton'>Search</button>
            </div>
          <div className='address'>Address  <input type="text" className='addressField' placeholder='http://localhost:3000/blogs/'></input></div>
          <div className='mySpaceWebpage'>
          <div className='mySpaceHeader'>MySpace.com   |  Home  <input type="text"></input><button>Search</button></div>
          <nav className='mySpaceNav'>
            <a href='/blogs'>Home  </a>
            <a href='/blogs/new'>New Post  </a>
            {blog ? <a href={`/blogs/${blog._id}/edit`}> Edit Page  </a> : ''}
            {blog ? <a href={`/blogs/${blog._id}`}> Show Page  </a> : ''}
          </nav>


          <div className='mySpaceBody'>
          <h3>Tom</h3>
          <h5>":-/"</h5>
          <div className='mySpaceBlog'>
            <h5>Hey! Read My Blog Posts!</h5>
          {this.props.children}
          </div>
          </div>

          </div>
          <div className='footer'></div>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Default
