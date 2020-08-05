import React, { Component, Fragment } from 'react'
import { Image, Button, Divider } from 'semantic-ui-react'
import Linkify from 'react-linkify'
import { formatPublishedAtDateString } from '../../services/date/date-format'
import { formatNumber } from '../../services/number/number-format'
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

  getSubscribeButtonText() {
    const { channel } = this.props
    const parsedSubscriberCount = Number(channel.statistics.subscriberCount)
    const subscriberCount = formatNumber(parsedSubscriberCount)
    return `Subscribe ${subscriberCount}`
  }

  render() {
    const { video, channel } = this.props

    if (!video || !channel) {
      return <div/>
    }

    const descriptionParagraphs = this.getVideoDescriptions()
    const { buttonTitle, descriptionTextClass } = this.getDescriptionConfig()
    const formattedPublishedAt = formatPublishedAtDateString(video.snippet.publishedAt)
    const buttonText = this.getSubscribeButtonText()
    const channelThumbnail = channel.snippet.thumbnails.medium.url
    const channelName = channel.snippet.title

    return (
      <Fragment>
        <div className="video-info-box">
          <Image
            className="channel-image"
            src={channelThumbnail}
            circular
          />
          <div className="video-info">
            <div className="channel-name">{channelName}</div>
            <div className="video-publication-date">
              {formattedPublishedAt}
            </div>
          </div>
          <Button
            className="subscribe"
            color="youtube"
          >{buttonText}</Button>
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