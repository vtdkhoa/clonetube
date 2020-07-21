import React, { Component, Fragment } from 'react'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import './Watch.scss'

class Watch extends Component {
  render() {
    return (
      <Fragment>
        <VideoPreview horizontal={true}/>
        <VideoPreview/>
      </Fragment>
    )
  }
}

export default Watch