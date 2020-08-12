import React, { Component } from 'react'
import VideoList from '../../components/VideoList/VideoList'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { getSearchResults, getSearchNextPageToken } from '../../store/reducers/search'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as searchActions from '../../store/actions/search'
import { bindActionCreators } from 'redux'
import { getSearchParam } from '../../services/url'


class Search extends Component {
  componentDidMount() {
    if (!this.getSearchQuery()) {
      // redirect to home if search query (in URL) is not there
      this.props.history.push('/')
    }
    this.searchForVideos()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.youtubeLibraryLoaded !== this.props.youtubeLibraryLoaded) {
      this.searchForVideos()
    }
  }

  getSearchQuery() {
    return getSearchParam(this.props.location, 'search_query')
  }

  searchForVideos() {
    const searchQuery = this.getSearchQuery()
    if (this.props.youtubeLibraryLoaded) {
      this.props.searchForVideos(searchQuery)
    }
  }

  bottomReachedCallback() {
    if (this.props.nextPageToken) {
      this.props.searchForVideos(
        this.getSearchQuery(),
        this.props.nextPageToken,
        20
      )
    }
  }

  render() {
    return (
      <VideoList
        bottomReachedCallback={this.bottomReachedCallback}
        showLoader={true}
        videos={this.props.searchResults}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    searchResults: getSearchResults(state, props.location.search),
    nextPageToken: getSearchNextPageToken(state, props.location.search)
  }
}

const mapDispatchToProps = dispatch => {
  const searchForVideos = searchActions.forVideos.request
  return bindActionCreators({
    searchForVideos
  }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)
  (Search)
)