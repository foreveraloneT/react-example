import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WelcomeText extends Component {
  static propTypes = {
    fontSize: PropTypes.number,
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    fontSize: 20,
  }

  render() {
    const { fontSize, text } = this.props

    return (
      <div
        style={{
          color: 'red',
          fontSize: `${fontSize}px`,
        }}
      >
        {text}
      </div>
    )
  }
}
