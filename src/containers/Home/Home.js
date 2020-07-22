import React, { Component, Fragment } from 'react'
import HomeContent from './HomeContent/HomeContent'
import SideBar from '../SideBar/SideBar'
import './Home.scss'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SideBar/>
        <HomeContent/>
      </Fragment>
    )
  }
}

export default Home