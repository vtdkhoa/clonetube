import React from 'react'
import PropTypes from 'prop-types'
import './Video.scss'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/'

const Video = props => {
  if (!props.id) return null

  const embedUrl = `${BASE_EMBED_URL}${props.id}`

  return (
    <div className="video-container">
      <div className="video">
      <iframe
        className="video-player"
        title="video"
        src={embedUrl}
        frameBorder='0'
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      </div>
    </div>
  )
}

Video.propTypes = {
  id: PropTypes.string
}

export default Video