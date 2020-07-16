import React, { Component } from 'react'
import AppLayout from './components/AppLayout/AppLayout'
import Home from './containers/Home/Home'
import Watch from './containers/Watch/Watch'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return(
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/watch" component={Watch}></Route>
        </Switch>
      </AppLayout>
    )
  }
}

export default App