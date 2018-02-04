import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import WelcomeText from './Components/WelcomeText'
import Counter from './Components/NumberCounter'
import Timer from './Components/Timer'
import './App.css'

class App extends Component {
  state = {
    nameList: [
      { name: 'sample', time: 99 }
    ],
  }

  saveName = (time) => {
    const newName = {name: this.currentInput.value, time: time} 
    // console.log(this.currentInput)
    const { nameList: currentList } = this.state
    const nameList = [...currentList, newName]
    this.setState({ nameList })
  }

  renderName() {
    return (
      <div>
        {
          this.state.nameList.map((item, index) => (
            <h3 key={index}>
              {item.name} : {item.time}
            </h3>
          ))
        } 
      </div>
    )
  }

  onStopTimerHandler = (time) => {
    this.saveName(time) 
  }

  render() {
    return (
      <div>
        <div className="green-text">
          Hello
        </div>
        <div>
          <WelcomeText
            text="This is a book"
          />
          <img
            alt="this is abook"
            style={{ width: '200px' }}
            src="http://africanleadership.co.uk/wp-content/uploads/2017/06/a-book-a-week-image.jpg"
          />
          <WelcomeText
            text="This is a Counter"
            fontSize={30}
          />
          <Counter init={10} />
          <WelcomeText
            text="This is a Timer"
            fontSize={30}
          />
          <Timer
            onStop={this.onStopTimerHandler}
          />
          <input
            type="text"
            placeholder="name..."
            ref={ (input) => {
              this.currentInput = input
            } }
          />
          <div id="nameList">
            {this.renderName()}
          </div>
        </div>
        <Link to="/fetch">Test</Link>
      </div>
    )
  }
}

export default App
