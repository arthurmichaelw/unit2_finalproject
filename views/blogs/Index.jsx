const React = require('react')

const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { blogs } = this.props
    return (
      <Default title='Blog Index Page'>
        <div className='background'>
          <ul>
            {
                        blogs.map((blog) => {
                          const { name, entry, _id } = blog
                          return (
                            <li key={_id}>
                              <a href={`/blogs/${_id}`}>
                                {name}
                              </a> {entry}
                              <br />
                              <form method='POST' action={`blogs/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
          </ul>
        </div>
      </Default>
    )
  }
}

module.exports = Index
