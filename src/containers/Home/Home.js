import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as videoActions from '../../store/actions/video'
import { bindActionCreators } from 'redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { getVideoCategoryIds, videosByCategoryLoaded, videoCategoriesLoaded } from '../../store/reducers/videos'
import HomeContent from './HomeContent/HomeContent'
import SideBar from '../SideBar/SideBar'
import PropTypes from 'prop-types'
import './Home.scss'

class Home extends Component {
  state = {
    categoryIndex: 0
  }

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos()
      this.props.fetchVideoCategories()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos()
      this.props.fetchVideoCategories()
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory()
    }
  }

  fetchVideosByCategory() {
    const categoryInitialIndex = this.state.categoryIndex
    const categories = this.props.videoCategories.slice(
      categoryInitialIndex,
      categoryInitialIndex + 3
    )
    this.props.fetchMostPopularVideosByCategory(categories)
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3
      }
    })
  }

  // Note: Because onEnter is callback => handleBottomReachedCallback should be arrow function
  handleBottomReachedCallback = () => {
    if (!this.props.videoCategoriesLoaded) return
    this.fetchVideosByCategory()
  }

  shouldShowLoader() {
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      return this.state.categoryIndex < this.props.videoCategories.length
    }
    return false
  }

  render() {
    return (
      <Fragment>
        <SideBar/>
        <HomeContent
          bottomReachedCallback={this.handleBottomReachedCallback}
          showLoader={this.shouldShowLoader()}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state)
  }
}

const mapDispatchToProps = dispatch => {
  const fetchMostPopularVideos = videoActions.mostPopular.request
  const fetchVideoCategories = videoActions.categories.request
  const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request

  return bindActionCreators({
    fetchMostPopularVideos,
    fetchVideoCategories,
    fetchMostPopularVideosByCategory
  }, dispatch)
}

Home.propTypes = {
  youtubeLibraryLoaded: PropTypes.bool,
  videoCategories: PropTypes.array,
  videoCategoriesLoaded: PropTypes.bool,
  videosByCategoryLoaded: PropTypes.number,
  fetchMostPopularVideos: PropTypes.func,
  fetchVideoCategories: PropTypes.func,
  fetchMostPopularVideosByCategory: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)