import React from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import { formatNumber } from '../../services/number/number-format'
import './Rating.scss'

const Rating = props => {
  let ratingProgress = null
  let likeCount = props.likeCount !== 0 ? props.likeCount : null
  let dislikeCount = null

  if (props.likeCount && props.dislikeCount) {
    const amountLikes = parseFloat(props.likeCount)
    const amountDislikes = parseFloat(props.dislikeCount)
    const ratingPercent = 100.0 * (amountLikes / (amountLikes + amountDislikes))

    likeCount = formatNumber(amountLikes)
    dislikeCount = formatNumber(amountDislikes)
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
        <span>{likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs down outline"/>
        <span>{dislikeCount}</span>
      </div>
      {ratingProgress}
    </div>
  )
}

export default Rating