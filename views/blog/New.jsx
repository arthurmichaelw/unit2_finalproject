const React = require('react')

const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Create A New Blog Post'>
        <form method='POST' action='/logs'>
          Title: <input type='text' name='name' placeholder='Title' /><br />
          Entry: <input type='textarea' name='entry' placeholder='Entry' /><br />
          <input type='submit' value='Submit Blog' />
        </form>
      </Default>
    )
  }
}
