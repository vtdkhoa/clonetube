import React, { Component, Fragment } from 'react'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import SideBar from '../SideBar/SideBar'
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll'
import * as videoActions from '../../store/actions/video'
import {
  getMostPopularVideos,
  allMostPopularVideosLoaded,
  getMostPopularVidsNextPageToken
} from '../../store/reducers/videos'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './Trending.scss'

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

  getVideoPreviews() {
    return this.props.videos.map(video => (
      <VideoPreview
        horizontal={true}
        expanded={true}
        video={video}
        key={video.id}
        pathname={'/watch'}
        search={`?v=${video.id}`}
      />
    ))
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
    console.log(this.props)
    const videoPreviews = this.getVideoPreviews()
    const activeLoader = this.shouldShowLoader()

    return (
      <Fragment>
        <SideBar/>
        <div className="trending">
          <InfiniteScroll
            bottomReachedCallback={this.fetchMoreVideos}
            showLoader={activeLoader}
          >
            {videoPreviews}
          </InfiniteScroll>
        </div>
      </Fragment>
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