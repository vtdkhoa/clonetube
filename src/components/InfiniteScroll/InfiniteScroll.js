import React, { Fragment } from 'react'
import { Waypoint } from 'react-waypoint'
import { Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './InfiniteScroll.scss'

const InfiniteScroll = props => {
  return (
    <Fragment>
      {props.children}
      <Waypoint onEnter={props.bottomReachedCallback}>
        <div className="loader-container">
          <Loader active={props.showLoader} inline="centered"/>
        </div>
      </Waypoint>
    </Fragment>
  )
}

InfiniteScroll.propTypes = {
  bottomReachedCallback: PropTypes.func,
  showLoader: PropTypes.bool
}

export default InfiniteScroll