import React, { Fragment } from 'react'
import SideBar from '../../containers/SideBar/SideBar'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import VideoPreview from '../VideoPreview/VideoPreview'
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
  return videos.map(video => (
    <VideoPreview
      horizontal={true}
      expanded={true}
      video={video}
      key={video.id}
      pathname={'/watch'}
      search={`?=${video.id}`}
    />
  ))
}

export default VideoList