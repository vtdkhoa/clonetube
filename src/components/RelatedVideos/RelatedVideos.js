import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import './RelatedVideos.scss'

const RelatedVideos = props => {
  return (
    <div className="related-videos">
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
    </div>
  )
}

export default RelatedVideos