import React, { Component, Fragment } from 'react'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import SideBar from '../SideBar/SideBar'
import './Home.scss'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SideBar/>
        <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Trending"/>
            <VideoGrid title="Autos & Vehicles" hideDivider={true}/>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home