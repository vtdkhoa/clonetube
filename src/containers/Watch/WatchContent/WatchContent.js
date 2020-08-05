import React, { Component } from 'react'
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos'
import Video from '../../../components/Video/Video'
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata'
import VideoInfoBox from '../../../components/VideoInfoBox/VideoInfoBox'
import Comments from '../../Comments/Comments'
import { connect } from 'react-redux'
import { getVideoById, getRelatedVideos } from '../../../store/reducers/videos'
import { getChannel } from '../../../store/reducers/channels'
import './WatchContent.scss'

class WatchContent extends Component {
  render() {
    if (!this.props.videoId) {
      return <div/>
    }

    return (
      <div className="watch-grid">
        <Video className="video" id={this.props.videoId}/>
        <VideoMetadata className="metadata" video={this.props.video}/>
        <VideoInfoBox
          className="video-info-box"
          video={this.props.video}
          channel={this.props.channel}
        />
        <Comments className="comments"/>
        <RelatedVideos className="related-videos" videos={this.props.relatedVideos}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    video: getVideoById(state, props.videoId),
    relatedVideos: getRelatedVideos(state, props.videoId),
    channel: getChannel(state, props.channelId)
  }
}

export default connect(mapStateToProps, null)(WatchContent)