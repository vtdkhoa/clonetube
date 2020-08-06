import React, { Component } from 'react'
import WatchContent from './WatchContent/WatchContent'
import { bindActionCreators } from 'redux'
import * as watchActions from '../../store/actions/watch'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { getSearchParam } from '../../services/url'
import { getChannelId } from '../../store/reducers/videos'

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

  render() {
    const videoId = this.getVideoId()

    return <WatchContent
      videoId={videoId}
      channelId={this.props.channelId}
    />
  }
}

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v')
  }
}

const mapDispatchToProps = dispatch => {
  const fetchWatchDetails = watchActions.details.request

  return bindActionCreators({
    fetchWatchDetails
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch))