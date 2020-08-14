import React, { Component } from 'react'
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos'
import Video from '../../../components/Video/Video'
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata'
import VideoInfoBox from '../../../components/VideoInfoBox/VideoInfoBox'
import Comments from '../../Comments/Comments'
import InfiniteScroll from '../../../components/InfiniteScroll/InfiniteScroll'
import { connect } from 'react-redux'
import { getVideoById, getRelatedVideos, getAmountComments } from '../../../store/reducers/videos'
import { getChannel } from '../../../store/reducers/channels'
import comments, { getCommentsVideo } from '../../../store/reducers/comments'
import PropTypes from 'prop-types'
import './WatchContent.scss'

class WatchContent extends Component {
  shouldShowLoader() {
    return !!this.props.nextPageToken
  }

  render() {
    if (!this.props.videoId) {
      return <div/>
    }

    return (
      <InfiniteScroll
        bottomReachedCallback={this.props.bottomReachedCallback}
        showLoader={this.shouldShowLoader()}
      >
        <div className="watch-grid">
          <Video className="video" id={this.props.videoId}/>
          <VideoMetadata className="metadata" video={this.props.video}/>
          <VideoInfoBox
            className="video-info-box"
            video={this.props.video}
            channel={this.props.channel}
          />
          <Comments
            className="comments"
            comments={this.props.comments}
            amountComments={this.props.amountComments}
          />
          <RelatedVideos className="related-videos" videos={this.props.relatedVideos}/>
        </div>
      </InfiniteScroll>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    video: getVideoById(state, props.videoId),
    relatedVideos: getRelatedVideos(state, props.videoId),
    channel: getChannel(state, props.channelId),
    comments: getCommentsVideo(state, props.videoId),
    amountComments: getAmountComments(state, props.videoId)
  }
}

WatchContent.propTypes = {
  video: PropTypes.object,
  relatedVideos: PropTypes.array,
  channel: PropTypes.object,
  comments: PropTypes.array,
  amountComments: PropTypes.any
}

export default connect(mapStateToProps, null)(WatchContent)