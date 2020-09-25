import React from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import { formatNumber } from '../../services/number/number-format'
import PropTypes from 'prop-types'
import './Rating.scss'

const Rating = ({ likeCount, dislikeCount }) => {
  let ratingProgress = null
  let likeAmount = likeCount !== 0 ? likeCount : null
  let dislikeAmount = null

  if (likeCount && dislikeCount) {
    const amountLikes = parseFloat(likeCount)
    const amountDislikes = parseFloat(dislikeCount)
    const ratingPercent = 100.0 * (amountLikes / (amountLikes + amountDislikes))

    likeAmount = formatNumber(amountLikes)
    dislikeAmount = formatNumber(amountDislikes)
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
        <span>{likeAmount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs down outline"/>
        <span>{dislikeAmount}</span>
      </div>
      {ratingProgress}
    </div>
  )
}

Rating.propTypes = {
  likeCount: PropTypes.any,
  dislikeCount: PropTypes.any
}

export default Rating