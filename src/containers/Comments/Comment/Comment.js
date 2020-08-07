import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import Rating from '../../../components/Rating/Rating'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import './Comment.scss'

TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

const Comment = props => {
  if (!props.comment) {
    return <div/>
  }

  const topLevelComment = props.comment.snippet.topLevelComment
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    textOriginal,
    publishedAt
  } = topLevelComment.snippet
  const commentPublishedAt = new Date(publishedAt)

  return (
    <div className="comment">
      <Image
        className="user-image"
        src={authorProfileImageUrl}
        circular
      />
      <div>
        <div className="comment-info">
          <span id="user-name">{authorDisplayName}</span>
          <span id="time-published">
            {timeAgo.format(commentPublishedAt)}
          </span>
        </div>
        <span>{textOriginal}</span>
        <div className="comment-actions">
          <Rating likeCount={likeCount}/>
          <Button size="mini" compact>REPLY</Button>
        </div>
      </div>
    </div>
  )
}

export default Comment