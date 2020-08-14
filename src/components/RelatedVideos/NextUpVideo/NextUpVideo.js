import React, { Fragment } from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'
import VideoPreview from '../../VideoPreview/VideoPreview'
import PropTypes from 'prop-types'
import './NextUpVideo.scss'

const NextUpVideo = props => {
  return (
    <Fragment>
      <div className="next-up-container">
        <h4>Up next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked/>
        </div>
      </div>
      <VideoPreview
        video={props.video}
        pathname='/watch'
        search={`?v=${props.video.id}`}
        horizontal={true}
      />
      <Divider/>
    </Fragment>
  )
}

NextUpVideo.propTypes = {
  video: PropTypes.object
}

export default NextUpVideo