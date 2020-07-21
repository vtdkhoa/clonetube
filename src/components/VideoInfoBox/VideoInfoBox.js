import React, { Component, Fragment } from 'react'
import { Image, Button, Divider } from 'semantic-ui-react'
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

  render() {
    let descriptionTextClass = 'collapsed'
    let buttonTitle = 'Show More'
    let descriptionParagraphs = (
      <div>
        <p>Para 1</p>
        <p>Para 2</p>
        <p>Para 3</p>
        <p>Para 4</p>
        <p>Para 5</p>
      </div>
    )

    if (!this.state.collapsed) {
      descriptionTextClass = 'expanded'
      buttonTitle = 'Show Less'
    }

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
            <div className="video-publication-date">Sat, Jul 18 2020</div>
          </div>
          <Button color="youtube">10K Subscribe</Button>
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