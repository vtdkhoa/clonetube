import React, { Component } from 'react'
import CommentsHeader from './CommentsHeader/CommentsHeader'
import AddComment from './AddComment/AddComment'
import Comment from './Comment/Comment'
import './Comments.scss'

class Comments extends Component {
  render() {
    if (!this.props.comments) {
      return <div/>
    }

    const comments = this.props.comments.map(
      comment => <Comment comment={comment} key={comment.id}/>
    )

    return (
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment/>
        {comments}
      </div>
    )
  }
}

export default Comments