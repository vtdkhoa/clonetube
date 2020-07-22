import React, { Component } from 'react'
import AppLayout from './components/AppLayout/AppLayout'
import Home from './containers/Home/Home'
import Watch from './containers/Watch/Watch'
import { Switch, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { youtubeLibraryLoaded } from './store/actions/api'

const API_KEY = 'AIzaSyBsqBssd8yrFDMcdKOy7vxhjglCIqmMZJA'

class App extends Component {
  componentDidMount() {
    this.loadYoutubeApi()
  }

  loadYoutubeApi() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/client.js'

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY)
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded()
        })
      })
    }
    document.body.appendChild(script)
  }

  render() {
    return(
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/watch" component={Watch}></Route>
        </Switch>
      </AppLayout>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    youtubeLibraryLoaded
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)