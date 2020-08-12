import React from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'

const Comments = props => {
  if (!props.comments) {
    return <div/>
  }

  const showComments = getComments(props.comments)
  return (
    <div className="comments" style={{ marginTop: 0 }}>
      <CommentsHeader amountComments={props.amountComments}/>
      <AddComment/>
      {showComments}
    </div>
  )
}

const getComments = comments => {
  return comments.map(comment =>
    <Comment
      comment={comment}
      key={comment.id}
    />
  )
}

export default Comments