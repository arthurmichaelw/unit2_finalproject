const React = require('react')

const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, entry } = this.props.blog
    return (
      <Default title={`${name} Edit Page`} blog={this.props.blog}>
        <form method='POST' action={`/blogs/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Entry: <input type='textarea' name='entry' defaultValue={entry} /><br />
          <input type='submit' value='Edit Blog' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
