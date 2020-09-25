import React from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'
import PropTypes from 'prop-types'

const Comments = ({ comments, amountComments }) => {
  if (!comments) {
    return <div/>
  }

  const showComments = getComments(comments)
  return (
    <div className="comments" style={{ marginTop: 0 }}>
      <CommentsHeader amountComments={amountComments}/>
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

Comments.propTypes = {
  comments: PropTypes.array,
  amountComments: PropTypes.any
}

export default Comments