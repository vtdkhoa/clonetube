import React from 'react'
import './Video.scss'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/'

const Video = props => {
  if (!props.id) return null

  const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`

  return (
    <div className="video-container">
      <div className="video">
      <iframe
        className="video-player"
        title={`${props.id}`}
        width={'560'}
        height={'315'}
        src={embedUrl}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
      />
      </div>
    </div>
  )
}

export default Video