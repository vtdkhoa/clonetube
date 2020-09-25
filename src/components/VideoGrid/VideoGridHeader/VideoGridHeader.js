import React from 'react'
import PropTypes from 'prop-types'
import './VideoGridHeader.scss'

const VideoGridHeader = ({ title }) => {
  return (
    <div className="video-grid-header">
      <span className="title">{title}</span>
    </div>
  )
}

VideoGridHeader.propTypes = {
  title: PropTypes.string
}

export default VideoGridHeader