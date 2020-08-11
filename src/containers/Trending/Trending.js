import React, { Component } from 'react'
import VideoList from '../../components/VideoList/VideoList'
import * as videoActions from '../../store/actions/video'
import {
  getMostPopularVideos,
  allMostPopularVideosLoaded,
  getMostPopularVidsNextPageToken
} from '../../store/reducers/videos'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Trending extends Component {
  componentDidMount() {
    this.fetchTrendingVideos()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.fetchTrendingVideos()
    }
  }

  fetchTrendingVideos() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos(20, true)
    }
  }

  fetchMoreVideos() {
    if (this.props.youtubeLibraryLoaded && this.props.nextPageToken) {
      this.props.fetchMostPopularVideos(12, true, this.props.nextPageToken)
    }
  }

  shouldShowLoader() {
    return !this.props.allVideos
  }

  render() {
    const activeLoader = this.shouldShowLoader()

    return (
      <VideoList
        videos={this.props.videos}
        bottomReachedCallback={this.fetchMoreVideos}
        showLoader={activeLoader}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videos: getMostPopularVideos(state),
    allVideos: allMostPopularVideosLoaded(state),
    nextPageToken: getMostPopularVidsNextPageToken(state)
  }
}

const mapDispatchToProps = dispatch => {
  const fetchMostPopularVideos = videoActions.mostPopular.request
  return bindActionCreators({
    fetchMostPopularVideos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending)