import React, { Component, Fragment } from 'react'
import HeaderNav from './containers/HeaderNav/HeaderNav'
import SideBar from './containers/SideBar/SideBar'

class App extends Component {
  render() {
    return(
      <Fragment>
        <HeaderNav/>
        <SideBar/>
      </Fragment>
    )
  }
}

export default App