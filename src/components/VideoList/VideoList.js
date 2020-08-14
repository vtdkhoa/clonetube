import React, { Fragment } from 'react'
import SideBar from '../../containers/SideBar/SideBar'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import VideoPreview from '../VideoPreview/VideoPreview'
import PropTypes from 'prop-types'
import './VideoList.scss'

const VideoList = props => {
  const videoPreviews = getVideoPreviews(props.videos)

  return (
    <Fragment>
      <SideBar/>
      <div className="video-list">
        <InfiniteScroll
          bottomReachedCallback={props.bottomReachedCallback}
          showLoader={props.showLoader}
        >
          {videoPreviews}
        </InfiniteScroll>
      </div>
    </Fragment>
  )
}

const getVideoPreviews = videos => {
  if (!videos || !videos.length) {
    return null
  }

  // make sure that the videos already have a description
  const firstVideo = videos[0]
  if (!firstVideo.snippet.description) {
    return null
  }

  return videos.map(video => (
    <VideoPreview
      horizontal={true}
      expanded={true}
      video={video}
      key={video.id}
      pathname='/watch'
      search={`?v=${video.id}`}
    />
  ))
}

VideoList.propTypes = {
  videos: PropTypes.array,
  bottomReachedCallback: PropTypes.func,
  showLoader: PropTypes.bool
}

export default VideoList