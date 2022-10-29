const React = require('react')

const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, entry, _id } = this.props.blog
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName} Page`} blog={this.props.blog}>
        <p className='background'>{capName} {entry}</p>
      </Default>
    )
  }
}

module.exports = Show
