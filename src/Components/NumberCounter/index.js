import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  static propTypes = {
    init: PropTypes.number,
  }

  static defaultProps = {
    init: 0,
  }

  state = {
    number: this.props.init,
  }

  countUp = () => {
    // const currentNum = this.state.number
    const { number: currentNum } = this.state
    const number = currentNum + 1
    this.setState({ number })
  }
  countDown = () => {
    // const currentNum = this.state.number
    const { number: currentNum } = this.state
    const number = currentNum - 1
    this.setState({ number })
  }

  render() {
    const { number } = this.state

    return (
      <div>
        <div>{number}</div>
        <button
          onClick={this.countUp}
          type="button">
            Plus
          </button>
          <button
          onClick={this.countDown}
          type="button">
            Reduce</button>
      </div>
    )
  }
}
