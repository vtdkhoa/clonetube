import React, { Component, Fragment } from 'react'
import { Image, Button, Divider } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import { formatPublishedAtDateString } from '../../services/date/date-format'
import './VideoInfoBox.scss'

class VideoInfoBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  onToggleCollapse = () => {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed
      }
    })
  }

  getVideoDescriptions() {
    const { snippet } = this.props.video
    const videoDescription = snippet ? snippet.description : null

    if (!videoDescription) {
      return null
    }
    return videoDescription.split('\n').map((paragraph, index) =>
      <p key={index}>
        <Linkify>{paragraph}</Linkify>
      </p>
    )
  }

  getDescriptionConfig() {
    let descriptionTextClass = 'collapsed'
    let buttonTitle = 'Show More'

    if (!this.state.collapsed) {
      descriptionTextClass = 'expanded'
      buttonTitle = 'Show Less'
    }

    return {
      descriptionTextClass,
      buttonTitle
    }
  }

  render() {
    const { video } = this.props

    if (!video) {
      return <div/>
    }

    const descriptionParagraphs = this.getVideoDescriptions()
    const { buttonTitle, descriptionTextClass } = this.getDescriptionConfig()
    const formattedPublishedAt = formatPublishedAtDateString(video.snippet.publishedAt)

    return (
      <Fragment>
        <div className="video-info-box">
          <Image
            className="channel-image"
            src="http://via.placeholder.com/48x48"
            circular
          />
          <div className="video-info">
            <div className="channel-name">Channel Name</div>
            <div className="video-publication-date">
              {formattedPublishedAt}
            </div>
          </div>
          <Button
            className="subscribe"
            color="youtube"
          >10k subscribe</Button>
          <div className="video-description">
            <div className={descriptionTextClass}>
              {descriptionParagraphs}
            </div>
            <Button
              compact
              onClick={this.onToggleCollapse}
            >{buttonTitle}</Button>
          </div>
        </div>
        <Divider/>
      </Fragment>
    )
  }
}

export default VideoInfoBox