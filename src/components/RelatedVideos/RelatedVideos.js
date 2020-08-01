import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import NextUpVideo from './NextUpVideo/NextUpVideo'
import './RelatedVideos.scss'

const RelatedVideos = props => {
  if (!props.videos && !props.videos.length) {
    return <div className="related-videos"/>
  }

  // no problems, before I check if the array has at least one element
  const nextUpVideo = props.videos[0]
  const remainingVideos = props.videos.slice(1)
  const relatedVideoPreviews = remainingVideos.map(relatedVideo => (
    <VideoPreview
      video={relatedVideo}
      key={relatedVideo.id}
      pathname='/watch'
      search={`?v=${relatedVideo.id}`}
      horizontal={true}
    />
  ))

  return (
    <div className="related-videos">
      <NextUpVideo video={nextUpVideo}/>
      {relatedVideoPreviews}
    </div>
  )
}

export default RelatedVideos