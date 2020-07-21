import React, { Component } from 'react'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import Video from '../../components/Video/Video'
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata'
import VideoInfoBox from '../../components/VideoInfoBox/VideoInfoBox'
import Comments from '../Comments/Comments'
import './Watch.scss'

class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="c8osw7irauQ"/>
        <VideoMetadata className="metadata" viewCount={1000}/>
        <VideoInfoBox className="video-info-box"/>
        <Comments className="comments"/>
        <RelatedVideos className="related-videos"/>
      </div>
    )
  }
}

export default Watch