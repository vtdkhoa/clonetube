import React, { Fragment } from 'react'
import Subscription from './Subscription/Subscription'
import SideBarHeader from '../SideBarHeader/SideBarHeader'
import { Divider } from 'semantic-ui-react'

const Subscriptions = () => {
  return (
    <Fragment>
      <SideBarHeader title="Subscriptions"/>
      <Subscription label="Music Channel" broadcasting/>
      <Subscription label="Academind" amountNewVideos={10}/>
      <Subscription label="Gearbox Digital" amountNewVideos={23}/>
      <Subscription label="Udemy" amountNewVideos={4}/>
      <Subscription label="Udacity" amountNewVideos={114}/>
      <Divider/>
    </Fragment>
  )
}

export default Subscriptions