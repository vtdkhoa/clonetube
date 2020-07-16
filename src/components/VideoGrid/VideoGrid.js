import React, { Fragment } from 'react'
import VideoGridHeader from './VideoGridHeader/VideoGridHeader'
import VideoPreview from '../VideoPreview/VideoPreview'
import { Divider } from 'semantic-ui-react'
import './VideoGrid.scss'

const VideoGrid = props => {
  const divider = props.hideDivider ? null : <Divider/>

  return (
    <Fragment>
      <VideoGridHeader title="Trending"/>
      <div className="video-grid">
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        {divider}
      </div>
    </Fragment>
  )
}

export default VideoGrid