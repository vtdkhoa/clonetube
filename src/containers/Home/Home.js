import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as videoActions from '../../store/actions/video'
import { bindActionCreators } from 'redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import { getVideoCategoryIds } from '../../store/reducers/videos'
import HomeContent from './HomeContent/HomeContent'
import SideBar from '../SideBar/SideBar'
import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryIndex: 0
    }
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

  render() {
    return (
      <Fragment>
        <SideBar/>
        <HomeContent/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)