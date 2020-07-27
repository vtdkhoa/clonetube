import React, { Fragment } from 'react'
import VideoGridHeader from './VideoGridHeader/VideoGridHeader'
import VideoPreview from '../VideoPreview/VideoPreview'
import { Divider } from 'semantic-ui-react'
import './VideoGrid.scss'

const VideoGrid = props => {
  if (!props.videos || !props.videos.length) {
    return <div/>
  }

  const gridItems = props.videos.map(video => {
    return (
      <VideoPreview video={video} key={video.id}/>
    )
  })
  const divider = props.hideDivider ? null : <Divider/>

  return (
    <Fragment>
      <VideoGridHeader title={props.title}/>
      <div className="video-grid">
        {gridItems}
      </div>
      {divider}
    </Fragment>
  )
}

export default VideoGrid