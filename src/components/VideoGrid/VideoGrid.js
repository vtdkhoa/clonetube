import React, { Fragment } from 'react'
import VideoGridHeader from './VideoGridHeader/VideoGridHeader'
import VideoPreview from '../VideoPreview/VideoPreview'
import { Divider } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './VideoGrid.scss'

const VideoGrid = ({ videos, title, hideDivider }) => {
  if (!videos || !videos.length) {
    return <div/>
  }

  const gridItems = videos.map(video => {
    return (
      <VideoPreview
        video={video}
        key={video.id}
        pathname='/watch'
        search={`?v=${video.id}`}
      />
    )
  })
  const divider = hideDivider ? null : <Divider/>

  return (
    <Fragment>
      <VideoGridHeader title={title}/>
      <div className="video-grid">
        {gridItems}
      </div>
      {divider}
    </Fragment>
  )
}

VideoGrid.propTypes = {
  title: PropTypes.string,
  videos: PropTypes.array
}

export default VideoGrid