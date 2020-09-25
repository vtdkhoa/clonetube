import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import NextUpVideo from './NextUpVideo/NextUpVideo'
import PropTypes from 'prop-types'
import './RelatedVideos.scss'

const RelatedVideos = ({ videos }) => {
  if (!videos || !videos.length) {
    return <div className="related-videos"/>
  }

  // no problems, before I check if the array has at least one element
  const nextUpVideo = videos[0]
  const remainingVideos = videos.slice(1)
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

RelatedVideos.propTypes = {
  videos: PropTypes.array
}

export default RelatedVideos