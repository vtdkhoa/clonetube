import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as videoActions from '../../store/actions/video'
import { bindActionCreators } from 'redux'
import { getYoutubeLibraryLoaded } from '../../store/reducers/api'
import HomeContent from './HomeContent/HomeContent'
import SideBar from '../SideBar/SideBar'
import './Home.scss'

class Home extends Component {
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos()
    }
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
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  }
}

const mapDispatchToProps = dispatch => {
  const fetchMostPopularVideos = videoActions.mostPopular.request
  return bindActionCreators({
    fetchMostPopularVideos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)