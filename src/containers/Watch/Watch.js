import React, { Component } from 'react'
import WatchContent from './WatchContent/WatchContent'
import { bindActionCreators } from 'redux'
import * as watchActions from '../../store/actions/watch'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'

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
    const searchParams = new URLSearchParams(this.props.location.search)
    return searchParams.get('v')
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
    />
  }
}

const mapStateToProps = state => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  }
}

const mapDispatchToProps = dispatch => {
  const fetchWatchDetails = watchActions.details.request

  return bindActionCreators({
    fetchWatchDetails
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch))