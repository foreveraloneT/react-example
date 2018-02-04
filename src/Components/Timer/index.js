import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Timer extends Component {
  static propTypes = {
    onStop: PropTypes.func,
  }

  state = {
    second: 0,
    isStart: false,
  }

  startTimer = () => {
    this.clock = setInterval(() => {
      const { second: curr, isStart } = this.state
      if (isStart) {
        const second = curr + 1
        this.setState({ second })
      }
    }, 1000)
  }

  onClickStartHandler = () => {
    this.setState({ isStart: true })
  }

  onClickStopHandler = () => {
    const { onStop } = this.props
    // if(onStop) {
    //   onStop(this.state.second, this.state.isStart)
    // }
    if (this.state.isStart) {
      onStop && onStop(this.state.second)
      this.setState({ isStart: false })
    }
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    const { second } = this.state

    return (
      <div>
        <div>{second}</div>
        <button
          onClick={this.onClickStartHandler}
          type="button">
            Start
          </button>
        <button
          onClick={this.onClickStopHandler}
          type="button">
            Stop
          </button>
      </div>
    )
  }
}
