import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import Rating from '../../../components/Rating/Rating'
import './Comment.scss'

const Comment = props => {
  if (!props.comment) {
    return <div/>
  }

  const topLevelComment = props.comment.snippet.topLevelComment
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    textOriginal
  } = topLevelComment.snippet

  return (
    <div className="comment">
      <Image
        className="user-image"
        src={authorProfileImageUrl}
        circular
      />
      <div>
        <div className="user-name">{authorDisplayName}</div>
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