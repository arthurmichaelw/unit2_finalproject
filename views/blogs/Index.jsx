const React = require('react')

const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { blogs } = this.props
    return (
      <Default title='Blog Index Page'>
        <ul>
          {
                        blogs.map((blog) => {
                          const { name, entry, _id } = blog
                          return (
                            <li key={_id}>
                              <a href={`/blogs/${-id}`}>
                                {name}
                              </a> {entry}
                              <br />
                              <form method='POST' action={`fruits/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
