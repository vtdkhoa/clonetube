import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Link } from 'react-router-dom'
import { formatNumber } from '../../services/number/number-format'
import { formatVideoDuration } from '../../services/time/time-format'
import PropTypes from 'prop-types'
import './VideoPreview.scss'

TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

class VideoPreview extends Component {
  render() {
    const { video } = this.props

    if (!video) {
      return <div/>
    }

    const horizontal = this.props.horizontal ? 'horizontal' : null
    const viewCountAndTimeString = VideoPreview.getFormattedViewAndTime(video)
    const duration = video.contentDetails ? video.contentDetails.duration : null
    const videoDuration = formatVideoDuration(duration)
    const expanded = this.props.expanded ? 'expanded' : null
    const description = this.props.expanded ? video.snippet.description : null

    return (
      <Link to={{ pathname: this.props.pathname, search: this.props.search }}>
        <div className={["video-preview", horizontal, expanded].join(' ')}>
          <div className="image-container">
            <Image src={video.snippet.thumbnails.medium.url}/>
            <div className="time-label">
              <span>{videoDuration}</span>
            </div>
          </div>
          <div className="video-info">
            <div className={["semi-bold", "show-max-two-lines", expanded].join(' ')}>
              {video.snippet.title}
            </div>
            <div className="video-preview-metadata-container">
              <div className="channel-title">
                {video.snippet.channelTitle}
              </div>
              <div className="view-count-and-time">
                {viewCountAndTimeString}
              </div>
              <div className="show-max-two-lines">
                {description}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  static getFormattedViewAndTime(video) {
    const publicationDate = new Date(video.snippet.publishedAt)
    const videoViewCount = video.statistics ? video.statistics.viewCount : null

    if (videoViewCount) {
      const videoViewCountShort = formatNumber(video.statistics.viewCount)
      return `${videoViewCountShort} views • ${timeAgo.format(publicationDate)}`
    }

    return ''
  }
}

VideoPreview.propTypes = {
  video: PropTypes.object,
  horizontal: PropTypes.bool,
  expanded: PropTypes.bool,
  pathname: PropTypes.string,
  search: PropTypes.string
}

export default VideoPreview