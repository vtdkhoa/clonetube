import React, { Component } from 'react'
import WatchContent from './WatchContent/WatchContent'
import { bindActionCreators } from 'redux'
import * as watchActions from '../../store/actions/watch'
import * as commentActions from '../../store/actions/comment'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { getSearchParam } from '../../services/url'
import { getChannelId } from '../../store/reducers/videos'
import { getCommentsNextPageToken } from '../../store/reducers/comments'

class Watch extends Component {
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchWatchContent()
    }
  }

  getVideoId() {
    return getSearchParam(this.props.location, 'v')
  }

  fetchWatchContent() {
    const videoId = this.getVideoId()
    if (!videoId) {
      this.props.history.push('/')
    }
    this.props.fetchWatchDetails(videoId, this.props.channelId)
  }

  fetchMoreComments() {
    if (this.props.nextPageToken) {
      this.props.fetchCommentThread(
        this.getVideoId(),
        this.props.nextPageToken
      )
    }
  }

  render() {
    const videoId = this.getVideoId()

    return <WatchContent
      videoId={videoId}
      channelId={this.props.channelId}
      nextPageToken={this.props.nextPageToken}
      bottomReachedCallback={this.fetchMoreComments}
    />
  }
}

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v'),
    nextPageToken: getCommentsNextPageToken(state, props.location)
  }
}

const mapDispatchToProps = dispatch => {
  const fetchWatchDetails = watchActions.details.request
  const fetchCommentThread = commentActions.threads.request

  return bindActionCreators({
    fetchWatchDetails,
    fetchCommentThread
  }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
  (Watch)
)