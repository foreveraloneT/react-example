import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './App'
import Fetch from './Page/Fetch'
// const Basic = require('./Template/Basic')
import Basic from './Template/Basic'

const Root = () => (
  <Router>
    <Basic>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/fetch" component={Fetch}/> 
      </Switch>
    </Basic>
  </Router>
)

export default Root