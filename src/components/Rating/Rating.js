import React from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import './Rating.scss'

const Rating = props => {
  let ratingProgress = null

  if (props.likeCount && props.dislikeCount) {
    const ratingPercent = 100 * (props.likeCount / (props.likeCount + props.dislikeCount))

    ratingProgress = <Progress
      className="progress"
      percent={ratingPercent}
      size="tiny"
    />
  }

  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs up outline"/>
        <span>{props.likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs down outline"/>
        <span>{props.dislikeCount}</span>
      </div>
      {ratingProgress}
    </div>
  )
}

export default Rating