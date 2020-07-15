import React, { Component, Fragment } from 'react'
import Subscription from './Subscription/Subscription'
import SideBarHeader from '../SideBarHeader/SideBarHeader'
import { Divider } from 'semantic-ui-react'

class Subscriptions extends Component {
  render() {
    return (
      <Fragment>
        <SideBarHeader title="Subscriptions"/>
        <Subscription label="Music Channel" broadcasting/>
        <Subscription label="Coursea" amountNewVideos={10}/>
        <Subscription label="TEDx Talks" amountNewVideos={23}/>
        <Subscription label="Stanford iOS" amountNewVideos={4}/>
        <Subscription label="Udacity" amountNewVideos={114}/>
        <Divider/>
      </Fragment>
    )
  }
}

export default Subscriptions